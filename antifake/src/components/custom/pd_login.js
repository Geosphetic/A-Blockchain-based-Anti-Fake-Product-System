import React, { Component } from 'react'
import md5 from 'md5'
import axios from 'axios'

class pd_login extends Component {

    constructor(props){
        super(props)
        this.state = {
            'pd_username': null,
            'pd_password': null
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { pd_username, pd_password } = this.state;
        console.log(pd_username)
        axios.get('http://localhost:8000/api/registerPD', {
            pd_username: pd_username,
            pd_password: pd_password,
        })
        .then(function(response){ 

            const pds = response.data;
            const pd = pds.find((pd) => {
                return pd.pd_username === pd_username && pd.pd_password === md5(pd_password);
            });
            if(pd){
                window.location.assign("/pd_products/" + pd.pd_username)
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
                <h4><em>Product Distributor Login</em></h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="pd_username" name="pd_username" onChange={this.handleInputChange} required/>
                    <label htmlFor="name">User Name</label><br></br>
                    <input type="password" id="pd_password" name="pd_password" onChange={this.handleInputChange} required/>
                    <label htmlFor="name">Password</label><br></br><br></br>
                    <button className="btn blue darken-2" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>      
        )
    }
}

export default pd_login;