import React, { Component } from 'react';
import axios from 'axios';

class ProductStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: '',
      RejectionDatabaseExists: false,
      AcceptanceDatabaseExists: false,
      product: null,
      error: null,
    };
  }

  componentDidMount() {
    const productId = parseInt(window.location.href.split('/').pop());
    this.setState({ productId });

    axios.get('http://localhost:8000/api/reasonReject')
      .then(response => {
        const product = response.data.find(product => product.product_id === productId);
        if (product) {
          this.setState({ 
            RejectionDatabaseExists: true,
            product,
          });
        }
      })
      .catch(error => {
        this.setState({ error: `Error fetching data from RejectionDatabase: ${error.message}` });
      });

    axios.get('http://localhost:8000/api/acceptProduct')
      .then(response => {
        const product = response.data.find(product => product.product_id === productId);
        if (product) {
          this.setState({ 
            AcceptanceDatabaseExists: true,
            product,
          });
        }
      })
      .catch(error => {
        this.setState({ error: `Error fetching data from AcceptanceDatabase: ${error.message}` });
      });
  }

  render() {
    const { productId, RejectionDatabaseExists, AcceptanceDatabaseExists, product, error } = this.state;

    if (error) {
      return <p>{error}</p>;
    }

    if (!RejectionDatabaseExists && !AcceptanceDatabaseExists) {
      return <h4>THIS PRODUCT with Product ID <em><b>{productId}</b></em> IS NOT FOUND IN THE DATABASE <br></br>i.e. <br></br>The Brand Party has neither ACCEPTED the prototype nor REJECTED it...!</h4>;
    }

    return (
      <div>
        <p>Product ID: {productId}</p>
        {product && (
          <div>
            <p>Product Name: <em>{product.product_name}</em></p>
            <p>Product Manufacturer: <em>{product.product_manufacturer}</em></p>
            <p>Product Details: <em>{product.product_details}</em></p>
          </div>
        )}
        {RejectionDatabaseExists && <p>Product with Product ID <em>{productId}</em> is <b>Rejected</b>.</p>}
        {AcceptanceDatabaseExists && <p>Product with Product ID <em>{productId}</em> is <b>Accepted</b>. <br></br> </p>}
      </div>
    );
  }

}

export default ProductStatus;
