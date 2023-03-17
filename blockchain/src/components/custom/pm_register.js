import React, { Component } from 'react';
import axios from 'axios';

class PM_Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pm_username: '',
            pm_email: '',
            pm_password: '',
        };
    }

    handleInputChange = e => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { pm_username, pm_email, pm_password } = this.state;
        console.log(pm_username);
        axios.post('http://localhost:8000/api/registerPM', {
            pm_username: pm_username,
            pm_email: pm_email,
            pm_password: pm_password
        })
        .then(function(response){ 
            window.location.assign('/pm_login');
        })
        .catch(function(err){
            console.error(err);
        });
    }

    render(){
        return(
            <div className="container">
                <h4><em>Product Manufacturer Registration</em></h4>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="pm_username" name="pm_username" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">UserName</label><br></br>
                        <input type="text" id="pm_email" name="pm_email" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">E-Mail</label><br></br>
                        <input type="password" id="pm_password" name="pm_password" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">Password</label><br></br><br></br>
                        <button className="btn blue darken-2" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                        <div className="center"><p>Already Registered.?  </p><a href="/pm_login">LogIn</a> </div>
                    </form>
            </div>
        )
    } 
}

export default PM_Register;