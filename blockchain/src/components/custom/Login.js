import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            'c_username': null,
            'c_password': null
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { c_username, c_password } = this.state;
        console.log(c_username)
        axios.get('http://localhost:8000/api/registerClients', {
            c_username: c_username,
            c_password: c_password,
        })
        .then(function(response){ 
            if(response.data){
                window.location.assign("/c_products")
            }else{
                alert('Incorrect Username or Password');
            }
        })
        .catch(function(err){
            console.error(err);
        });
    }


    render(){
        return(
            <div className="container">
                <h4><em>Customer Login</em></h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="c_username" name="c_username" onChange={this.handleInputChange} required/>
                    <label htmlFor="name">Username</label><br></br>
                    <input type="password" id="c_password" name="c_password" onChange={this.handleInputChange} required/>
                    <label htmlFor="name">Password</label><br></br><br></br>
                    <button className="btn blue darken-2" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>      
        )
    }
}

export default Login;