import React, { Component } from 'react';
import Web3 from 'web3';
import AntiFake from '../../build/AntiFake.json';
import axios from 'axios';

class AcceptProduct extends Component {
    async componentWillMount() {
        await this.loadWeb3();
        await this.loadBlockChain();
    }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    async loadBlockChain() {
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        this.setState({ account: accounts[0] });
        const networkId = await web3.eth.net.getId();
        const networkData = AntiFake.networks[networkId];
        if (networkData) {
            const product = new web3.eth.Contract(AntiFake.abi, networkData.address);
            this.setState({ product });
        } else {
            window.alert('AntiFake contract not deployed to detected network.');
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.addProductToBlockchain();
    };

    addProductToBlockchain = () => {
        this.setState({ loading: true });
        this.state.product.methods
            .addProduct(this.state.product_name, this.state.product_details, this.state.id)
            .send({ from: this.state.account })
            .once('receipt', (receipt) => {
                console.log(receipt);
                this.addProductToDatabase();
            });
    };

    addProductToDatabase = () => {
        axios.post('http://localhost:8000/api/acceptProduct', {
                product_name: this.state.product_name,
                product_manufacturer: this.state.product_manufacturer,
                id: this.state.id,
                product_details: this.state.product_details,
            })
            .then((response) => {
                console.log(response.data);
                this.setState({ loading: false });
                window.location.assign('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    constructor(props) {
        super(props);
        this.state = {
            account: '',
            product: null,
            product_name: '',
            product_manufacturer: '',
            product_details: '',
            id: null,
            loading: false,
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.setState({
            id: id,
        });
    }

    render() {
        return (
            <div className='container'>
                <h4>Accept the Product Prototype</h4>
                <form onSubmit={this.handleSubmit}>
                    <br></br>
                    <input type='text' id='product_name' name='product_name' onChange={this.handleInputChange} required />
                    <label htmlFor='name'>Product Name</label>
                    <br></br>
                    <input type='text' id='product_manufacturer' name='product_manufacturer' onChange={this.handleInputChange} required />
                    <label htmlFor='name'>Product Manufacturer</label>
                    <br></br>
                    <input type='text' id='product_details' name='product_details' onChange={this.handleInputChange} required />
                    <label htmlFor='name'>Product Quantity & Product Sizes</label>
                    <br></br>
                    <br></br>
                    <button className='btn blue darken-2' type='submit' name='action' disabled={this.state.loading}>
                        {this.state.loading ? 'Submitting...' : 'Submit'}
                        <i className='material-icons right'>send</i>
                    </button>
                </form>
            </div>
        );
        }
    }
    export default AcceptProduct;
