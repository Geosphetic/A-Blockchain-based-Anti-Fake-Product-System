import React, { Component } from 'react';
import axios from 'axios';

class C_Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            c_username: '',
            c_email: '',
            c_password: '',
        };
    }

    handleInputChange = e => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { c_username, c_email, c_password } = this.state;
        console.log(c_username);
        axios.post('http://localhost:8000/api/registerClients', {
            c_username: c_username,
            c_email: c_email,
            c_password: c_password
        })
        .then(function(response){ 
            window.location.assign('/login');
        })
        .catch(function(err){
            console.error(err);
        });
    }

    render(){
        return(
            <div className="container">
                <h4><em>Customer Registration</em></h4>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="c_username" name="c_username" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">UserName</label><br></br>
                        <input type="text" id="c_email" name="c_email" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">E-Mail</label><br></br>
                        <input type="password" id="c_password" name="c_password" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">Password</label><br></br><br></br>
                        <button className="btn blue darken-2" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                        <div className="center"><p>Already Registered.?  </p><a href="/login">LogIn</a> </div>
                    </form>
            </div>
        )
    } 
}

export default C_Register;