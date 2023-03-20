import React, { Component } from 'react'
import md5 from 'md5'
import axios from 'axios'

class bp_login extends Component {

    constructor(props){
        super(props)
        this.state = {
            'bp_username': null,
            'bp_password': null
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { bp_username, bp_password } = this.state;
        console.log(bp_username)
        axios.get('http://localhost:8000/api/registerBP', {
            bp_username: bp_username,
            bp_password: bp_password,
        })
        .then(function(response){ 

            const bps = response.data;
            const bp = bps.find((bp) => {
                return bp.bp_username === bp_username && bp.bp_password === md5(bp_password);
            });
            if(bp){
                window.location.assign("/addproduct/"+ bp_username)
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
                <h4><em>Brand Party Login</em></h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="bp_username" name="bp_username" onChange={this.handleInputChange} required/>
                    <label htmlFor="name">Username</label><br></br>
                    <input type="password" id="bp_password" name="bp_password" onChange={this.handleInputChange} required/>
                    <label htmlFor="name">Password</label><br></br><br></br>
                    <button className="btn blue darken-2" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>      
        )
    }
}

export default bp_login;