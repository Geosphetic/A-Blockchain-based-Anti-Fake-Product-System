import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            final: [],
            id: null,
            pm: window.location.href.split('/').pop()
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/PMBP')
        .then((response) => {
            const data = response.data;
            this.setState({ final: data });
        })
        .catch((err) => {
            console.error(err);
        });
    }

    handleInputChange = (e) => {
        const name = e.target.innerHTML;
        let index = 0;
        for(let i = 0; i < this.state.final.length; i++){
            if(name === this.state.final[i].product_name){
                index = i;
                break;
            }
        }
        const id = this.state.final[index].product_id;
        this.setState({
            id: id
        });
    };

    render(){
        const filteredProducts = this.state.final.filter((product) => {
            return product.product_manufacturer === this.state.pm;
        });

        const productList = filteredProducts.map(product => {
            return (
                <div className="contact" key={product.product_id}>
                    <li className="collection-item avatar">
                    <i className="material-icons">&#xe854;</i>

                        <p><b>{product.product_name}</b></p>
                        <p>{product.product_manufacturer}</p>
                        <p>{product.product_details}</p>
                        <br></br>
                        <Link to={"/acceptProduct/" + product.product_id} className="title" onClick={this.handleInputChange}><button id={product.product_id} className="waves-effect waves-light btn green darken-3">ACCEPT</button></Link> &nbsp;&nbsp;&nbsp;
                        <Link to={"/reject/" + product.product_id} className="title" onClick={this.handleInputChange}><button id={product.product_id} className="waves-effect waves-light btn red darken-3">REJECT</button></Link>
                        <br></br>
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
