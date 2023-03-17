import React, { Component } from 'react';
import axios from 'axios';

class BP_Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bp_username: '',
            bp_email: '',
            bp_password: '',
        };
    }

    handleInputChange = e => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { bp_username, bp_email, bp_password } = this.state;
        console.log(bp_username);
        axios.post('http://localhost:8000/api/registerBP', {
            bp_username: bp_username,
            bp_email: bp_email,
            bp_password: bp_password
        })
        .then(function(response){ 
            window.location.assign('/bp_login');
        })
        .catch(function(err){
            console.error(err);
        });
    }

    render(){
        return(
            <div className="container">
                <h4><em>Brand Party Registration</em></h4>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="bp_username" name="bp_username" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">UserName</label><br></br>
                        <input type="text" id="bp_email" name="bp_email" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">E-Mail</label><br></br>
                        <input type="password" id="bp_password" name="bp_password" onChange={this.handleInputChange} required/>
                        <label htmlFor="name">Password</label><br></br><br></br>
                        <button className="btn blue darken-2" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                        <div className="center"><p>Already Registered.?  </p><a href="/bp_login">LogIn</a> </div>
                    </form>
            </div>
        )
    } 
}

export default BP_Register;