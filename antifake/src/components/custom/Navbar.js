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

        if(this.state.location === "/"){
            return ( 
                <nav className="#2196f3 blue">
                    <div className="container">
                        <a className="brand-logo" href="/">
                            Anti-Fake Product System
                        </a>
                    </div>
                </nav>
            )
        }else{
            return(
                <nav className="#2196f3 blue">
                    <div className="container">
                        <a className="brand-logo" href="/" >
                            Anti-Fake Product System
                        </a>
                        <ul className="right">
                            <li><NavLink to="/aboutus">About Us</NavLink></li>
                            <li><NavLink to="/admin">Admin</NavLink></li>
                            <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}

export default withRouter(Navbar)