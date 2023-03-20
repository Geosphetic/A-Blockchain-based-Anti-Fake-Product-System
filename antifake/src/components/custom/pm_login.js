import React, { Component } from 'react'
import md5 from 'md5'
import axios from 'axios'
import { Link } from 'react-router-dom';

class pm_login extends Component {

    constructor(props){
        super(props)
        this.state = {
            'pm_username': null,
            'pm_password': null
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { pm_username, pm_password } = this.state;
        console.log(pm_username)
        axios.get('http://localhost:8000/api/registerPM', {
            pm_username: pm_username,
            pm_password: pm_password,
        })
        .then(function(response){ 

            const pms = response.data;
            const pm = pms.find((pm) => {
                return pm.pm_username === pm_username && pm.pm_password === md5(pm_password);
            });
            if(pm){
                window.location.assign("/fromBP/"+ pm_username)
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
                <h4><em>Product Manufacturer Login</em></h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="pm_username" name="pm_username" onChange={this.handleInputChange} required/>
                    <label htmlFor="name">Username</label><br></br>
                    <input type="password" id="pm_password" name="pm_password" onChange={this.handleInputChange} required/>
                    <label htmlFor="name">Password</label><br></br><br></br>
                    <button className="btn blue darken-2" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
                <div className="center">
                        <h6>Forget Password?</h6>
                        <Link to = {"/pmforget"}>Click Here</Link>
                    </div>
            </div>      
        )
    }
}

export default pm_login;
