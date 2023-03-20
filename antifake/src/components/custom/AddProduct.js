import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_name: '',
            product_manufacturer: '',
            product_details: '',
        };
    }

    pm = window.location.href.split('/').pop();

    handleInputChange = e => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { product_name, product_manufacturer, product_details } = this.state;
        console.log(product_name);
        axios.post('http://localhost:8000/api/productName', {
            product_name: product_name,
            product_manufacturer: product_manufacturer,
            product_details: product_details
        })
        .then(function(response){ 
            window.location.assign('/choose/'+ product_manufacturer);
        })
        .catch(function(err){
            console.error(err);
        });
    }

    render(){
        return(
            <div className="container">
                <h4>Create New Product</h4>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="product_name" name="product_name" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">Product Name</label><br></br>
                        <input type="text" id="product_manufacturer" name="product_manufacturer" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">Product Manufacturer</label><br></br>
                        <input type="text" id="product_details" name="product_details" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">Product Details</label><br></br><br></br>
                        <button className="btn blue darken-2" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                    <div className="center">
                        <p><h4>Product Decision.?</h4 ></p>
                        <Link to = {"/productdec/" + this.pm}>Click Here</Link>
                    </div>
            </div>
        )
    }
}

export default AddProduct;