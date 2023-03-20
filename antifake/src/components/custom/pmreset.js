import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import md5 from 'md5'

class PMReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pm_username: '',
      pm_email: '',
      pm_password: '',
      message: '',
      error: '',
      success: false,
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ pm_username: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ pm_email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ pm_password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      pm_username: this.state.pm_username,
      pm_email: this.state.pm_email,
      pm_password: md5(this.state.pm_password),
    };

    axios
      .post('http://localhost:8000/api/registerPM', data)
      .then((response) => {
        this.setState({ message: response.data, error: '', success: true });
      })
      .catch((error) => {
        this.setState({ message: '', error: error.response.data });
      });
  };

  render() {
    if (this.state.success) {
      return <Redirect to={'/fromBP/' + this.pm_username} />;
    }

    return(
        <div className="container">
            <h4><em>Product Manufacturer Reset Password</em></h4>
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="pm_username" name="pm_username" onChange={this.handleInputChange} required/>
                <label htmlFor="name">Username</label><br></br>
                <input type="text" id="pm_email" name="pm_email" onChange={this.handleInputChange} required/>
                <label htmlFor="name">Email</label><br></br>
                <input type="password" id="pm_password" name="pm_password" onChange={this.handlePasswordChange} required/>
                <label htmlFor="name">Password</label><br></br><br></br>
                <button className="btn blue darken-2" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                </button>
            </form>
        {this.state.message && <p>{this.state.message}</p>}
        {this.state.error && <p className="error">{this.state.error}</p>}
      </div>
    );
  }
}

export default PMReset;
