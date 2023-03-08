import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends Component {
    state = {
        location: ""
    }

    componentWillReceiveProps(){
        console.log(this.props)
        this.setState({
            location: this.props.history.location.pathname
        })
    }
    render(){

        if(this.state.location === "/" || this.state.location === "/aboutus"  || this.state.location === "/product"  || this.state.location === "/productdec" || this.state.location === "/ContactUs" || this.state.location === "/newproduct"){
            return ( 
                <nav className="nav-wrapper black darken-2">
                    <div className="container">
                        <a className="brand-logo" href="/">
                            Anti-Fake Product System
                        </a>
                    </div>
                </nav>
            )
        }else{
            return(
                <nav className="nav-wrapper black darken-2">
                    <div className="container">
                        <a className="brand-logo" href="/" >
                            Anti-Fake Product System
                        </a>
                        <ul className="right">
                            <li><NavLink to="/aboutus">About Us</NavLink></li>
                            <li><NavLink to="/c_products">Products</NavLink></li>
                            <li><NavLink to="/addproduct">Add New Product</NavLink></li>
                            <li><NavLink to="/productdec">Inventory</NavLink></li>
                            <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
                        </ul>
                    </div>
                </nav>
            )
        }

        
    }
}

export default withRouter(Navbar)