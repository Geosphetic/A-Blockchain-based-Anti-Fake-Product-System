import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_name: [],
            product_organizer: [],
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
                <div className="contact" key={product.product_id}>
                    <li className="collection-item avatar">
                    <i class="material-icons">&#xe854;</i>

                        <p><b>{product.product_name}</b></p>
                        <br></br>
                        <Link to={"/acceptproduct/" + product.product_id} className="title" onClick={this.handleInputChange}><button id={product.product_id} className="waves-effect waves-light btn yellow darken-3">ACCEPT</button></Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link to={"/reject/" + product.product_id} className="title" onClick={this.handleInputChange}><button id={product.product_id} className="waves-effect waves-light btn red darken-3">REJECT</button></Link>
                        
                    </li>
                </div>
            )
        }) 
        return(
            <div className="container">
                <ul className="collection">
                    <li className="collection-item avatar">
                        <h3>Products Decision</h3>
                    </li>
                        {productList}
                </ul>
            </div>
        )
    }
}

export default ProductData;