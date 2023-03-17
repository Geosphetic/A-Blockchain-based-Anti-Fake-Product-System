import React, { Component } from 'react';
import Web3 from 'web3';
import AntiFake from '../../build/AntiFake.json'

class Reject extends Component {

    async componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
      }
    
    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    async loadBlockchainData() {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        console.log(accounts)
        this.setState({ account: accounts[0] })
        const networkId = await web3.eth.net.getId()
        const networkData = AntiFake.networks[networkId]
        if(networkData) {
            const product = new web3.eth.Contract(AntiFake.abi, networkData.address)
            this.setState({ product })
            const prodCount = await product.methods.productsCount().call()
            this.setState({ prodCount })
            for (var i = 1; i <= prodCount; i++) {
                const products = await product.methods.products(i).call()
                if(products.product_id === this.state.id){
                    this.setState({
                        products: [...this.state.products, products]
                    })
                }
            }
            console.log(this.state.products)
        } else {
            window.alert('AntiFake contract not deployed to detected network.')
        }
    }

    handleInputChange = (e) => {
        console.log(e.target.id)
        this.setState({
            selectedId: e.target.id,
        })
        this.reject(e.target.id);
    }


    reject(id) {
        console.log(this.state.selectedId)
        this.setState({ loading: true })
        this.state.election.methods.reject(id).send({ from: this.state.account })
        .once('receipt', (receipt) => {
            this.setState({ loading: false })
            window.location.assign("/");
        })
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        this.setState({
            id: id,
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            id: null,
            account: '',
            product: null,
            prodCount: 0,
            products: [],
            loading: true,
            selectedId: null
        }
    }

    render(){
        const productList = this.state.products.map(products => {
            return (
                <div className="contact" key={products.id}>
                    <li className="collection-item avatar">
                    <i class="material-icons">&#xe854;</i>
                        <p><b>{products.name}</b></p>
                        <p>{products.details}</p>
                        <a href="/rejected" className="secondary-content"><button id={products.id} onClick={this.handleInputChange} className="waves-effect waves-light btn blue darken-2">Reject</button></a>
                    </li>
                </div>
            )
        }) 
        return(
            <div className="container">
                <ul className="collection">
                    <li className="collection-item avatar">
                        <h3>Product Transactions</h3>
                    </li>
                        {productList}
                </ul>
            </div>
        )
    }
}

export default Reject;