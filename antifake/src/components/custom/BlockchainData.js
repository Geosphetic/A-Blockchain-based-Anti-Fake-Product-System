import React, { Component } from 'react';
import Web3 from 'web3';
import AntiFake from '../../build/AntiFake.json';

class BlockchainData extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
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

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = AntiFake.networks[networkId];
    if (networkData) {
      const antiFake = new web3.eth.Contract(AntiFake.abi, networkData.address);
      this.setState({ antiFake });
      const productsCount = await antiFake.methods.productsCount().call();
      this.setState({ productsCount });
      for (var i = 1; i <= productsCount; i++) {
        const product = await antiFake.methods.products(i).call();
        this.setState({
          products: [...this.state.products, product]
        });
      }
      this.setState({ loading: false });
    } else {
      window.alert('AntiFake contract not deployed to detected network.');
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      products: [],
      loading: true
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Product List</h1>
        <table className="table">
          <thead>
            <tr>
              <th><b>ID</b></th>
              <th><b>Name</b></th>
              <th><b>Decision</b></th>
              <th><b>Quantity and Sizes</b></th>
              <th><b>Product ID</b></th>
            </tr>
          </thead>
          <tbody>
            { this.state.products.map((product, key) => {
              return(
                <tr key={key}>
                  <td><em>{product.id}</em></td>
                  <td><em>{product.name}</em></td>
                  <td><em>{product.decision}</em></td>
                  <td><em>{product.details}</em></td>
                  <td><em>{product.product_id}</em></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BlockchainData;
