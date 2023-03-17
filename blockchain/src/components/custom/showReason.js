import React, { Component } from 'react';
import axios from 'axios';

class ProductStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: '',
      db1Exists: false,
      db2Exists: false,
      error: null,
    };
  }

  componentDidMount() {
    const productId = parseInt(window.location.href.split('/').pop());
    this.setState({ productId });


    axios.get('http://localhost:8000/api/reasonReject')
      .then(response => {
        const productIds = response.data.map(product => product.product_id);
        if (productIds.includes(productId)) {
          this.setState({ db1Exists: true });
        }
      })
      .catch(error => {
        this.setState({ error: `Error fetching data from db1: ${error.message}` });
      });

    axios.get('http://localhost:8000/api/acceptProduct')
      .then(response => {
        const productIds = response.data.map(product => product.product_id);
        if (productIds.includes(productId)) {
          this.setState({ db2Exists: true });
        }
      })
      .catch(error => {
        this.setState({ error: `Error fetching data from db2: ${error.message}` });
      });
  }

  render() {
    const { productId, db1Exists, db2Exists, error } = this.state;

    if (error) {
      return <p>{error}</p>;
    }

    return (
<div>
  <p>Product ID: {productId}</p>
  {db1Exists && <p>Product ID {productId} is Rejected for the reason.</p>}
  {db2Exists && <p>Product ID {productId} is Accepted</p>}
</div>

    );
  }
}

export default ProductStatus;
