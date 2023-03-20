import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class decisionFromBP extends Component {
  state = {
    products: [],
    product_id: [],
    loading: true,
    error: null,
    pm_username: ''
  };

  componentDidMount() {
    const pm_username = window.location.href.split('/').pop();
    this.setState({ pm_username });

    axios.get('http://localhost:8000/api/PMBP')
      .then(response => {
        const filteredProducts = response.data.filter(product => product.product_manufacturer === pm_username);
        if (filteredProducts.length > 0) {
          this.setState({
            products: filteredProducts,
            loading: false,
            error: null
          });
        } else {
          this.setState({
            products: [],
            loading: false,
            error: `No Products Found for Product Manufacturer ${pm_username}`
          });
        }
      })
      .catch(error => {
        this.setState({
          products: [],
          loading: false,
          error: error.message
        });
      });
  }

  render() {
    const { products, loading, error, pm_username } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h3>Products By the Product Manufacturer :  <b><em>{pm_username}</em></b></h3>
        <ul>
          {products.map(product => (
            <li key={product.product_id}>
            <i class="material-icons">&#xe854;</i>
            <Link to={"/showreason/"+ product.product_id} className="title" onClick={this.handleInputChange}> <em>{product.product_name}</em></Link>
            <p><em>{product.product_details}</em></p>
            <br></br>
            </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default decisionFromBP;
