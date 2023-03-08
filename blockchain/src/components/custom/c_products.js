import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class C_Products extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponents: false
        }
    }

    render() {
        return(
            <div className="container">
            <li className="collection-item avatar">
                <p className="title" href="/">
                    <h3>Welcome To the Future of Shopping</h3>
                </p>
                <p className="secondary-content"><br></br></p>
            </li>
            <br></br>
            <nav>
            <div className="container">
                <ul>
                    <li><NavLink to="/product">Groceries</NavLink></li>
                    <li><NavLink to="/product">Electronics</NavLink></li>
                    <li><NavLink to="/product">Mens Fashion</NavLink></li>
                    <li><NavLink to="/product">Girls Fashion</NavLink></li>
                    <li><NavLink to="/product">Others</NavLink></li>
                </ul>
            </div>
            </nav>
            </div>
        )
    }
}

export default C_Products
