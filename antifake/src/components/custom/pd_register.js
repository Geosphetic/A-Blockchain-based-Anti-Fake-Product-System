import React, { Component } from 'react';
import axios from 'axios';

class PD_Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pd_username: '',
            pd_email: '',
            pd_password: '',
        };
    }

    handleInputChange = e => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { pd_username, pd_email, pd_password } = this.state;
        console.log(pd_username);
        axios.post('http://localhost:8000/api/registerPD', {
            pd_username: pd_username,
            pd_email: pd_email,
            pd_password: pd_password
        })
        .then(function(response){ 
            window.location.assign('/pd_login');
        })
        .catch(function(err){
            console.error(err);
        });
    }

    render(){
        return(
            <div className="container">
                <h4><em>Product Distributor Registration</em></h4>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="pd_username" name="pd_username" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">User Name</label><br></br>
                        <input type="text" id="pd_email" name="pd_email" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">E-Mail</label><br></br>
                        <input type="password" id="pd_password" name="pd_password" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">Password</label><br></br><br></br>
                        <button className="btn blue darken-2" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                        <div className="center"><p>Already Registered.?  </p><a href="/pd_login">LogIn</a> </div>
                    </form>
            </div>
        )
    } 
}

export default PD_Register;