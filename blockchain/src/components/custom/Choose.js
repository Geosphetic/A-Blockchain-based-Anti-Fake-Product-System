import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Choose extends Component {

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
        // console.log(e.target.innerHTML);
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
                        <Link to={"/remCount"} className="title" onClick={this.handleInputChange}>{product.product_name}</Link>
                    </li>
                </div>
            )
        }) 
        return(
            <div className="container">
                <ul className="collection">
                    <li className="collection-item avatar">
                        <h3>Product Lists</h3>
                    </li>
                        {productList}
                </ul>
            </div>
        )
    }
}

export default Choose;