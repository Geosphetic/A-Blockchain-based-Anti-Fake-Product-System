import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponents: false
        }
    }


    render(){
        return (
            <div className="container">
                <br></br>
                <h3>Welcome, to the new age of Decentralization.! <i className="material-icons">&#xe854;</i></h3>
                <br></br>
                <ul className="collection with-header">
                <li className="collection-header"><h5><em>Choose User Type</em></h5></li>
                    <li className="collection-item"><div><h5>Brand Party<Link to="/bp_register" className="secondary-content"><i className="material-icons">send</i></Link></h5></div></li>
                    <li className="collection-item"><div><h5>Product Manufacturer<Link to="/pm_register" className="secondary-content"><i className="material-icons">send</i></Link></h5></div></li>
                    <li className="collection-item"><div><h5>Product Distributor<Link to="/pd_register" className="secondary-content"><i className="material-icons">send</i></Link></h5></div></li>
                    <li className="collection-item"><div><h5>Customer<Link to="/register" className="secondary-content"><i className="material-icons">send</i></Link></h5></div></li>
                </ul>
            </div>
        )
    }
}

export default Home