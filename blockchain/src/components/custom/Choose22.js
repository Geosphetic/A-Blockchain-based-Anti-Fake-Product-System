import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Choose extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_name: [],
            product_manufacturer: [],
            product_id: [],
            final: [],
            id: null,
        };
    }

    componentDidMount(){
        let currentComponent = this;
      
        axios.get('http://localhost:8000/api/productName', {})
        .then(function(response){ 
            var data = response.data;
            currentComponent.setState({
                final: data
            })
        })
        .catch(function(err){
            console.error(err);
        });

    }

    handleInputChange = (e) => {
        var name = e.target.innerHTML;
        var index = 0;
        for(let i = 0; i < this.state.product_name.length; i++){
            if(name === this.state.product_name[i]){
                index = i;
                break;
            }
        }
        var id = this.state.product_id[index];
        this.setState({
            id : id
        })
    };


    render(){
        const productList = this.state.final.map(product => {
            return (
                <div className="contact" key={product.product}>
                    <li className="collection-item avatar">
                    <i class="material-icons">&#xe854;</i>
                    <br></br>
                    Product Name : 
                        <Link to={"/showReason/"+ product.product_id} className="title" onClick={this.handleInputChange}> {product.product_name}</Link>
                        <p><em>PM : {product.product_manufacturer}</em></p>
                        <p><em>Details : {product.product_details}</em></p>
                    </li>
                </div>
            )
        }) 
        return(
            <div className="container">
                <ul className="collection">
                    <li className="collection-item avatar">
                        <h4>Product Lists</h4>
                    </li>
                        {productList}
                </ul>
            </div>
        )
    }
}

export default Choose;