import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const ADMIN_USERNAME = "afps";
const ADMIN_PASSWORD = "afps";

class Admin extends Component {
  state = {
    username: "",
    password: "",
    error: "",
    redirectToHome: false,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      console.log("Login successful!");
      this.setState({ redirectToHome: true });
    } else {
      console.log("Incorrect username or password");
      this.setState({ error: "Incorrect username or password" });
    }
    // Clear input fields after submission
    this.setState({ username: "", password: "" });
  };

  render() {
    const { username, password, error, redirectToHome } = this.state;
    if (redirectToHome) {
      return <Redirect to="/blockchaindata" />;
    }
    return (
      <div className="container">
        <h4>
          <em>Admin Login</em>
        </h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="admin_username"
            name="username"
            value={username}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="admin_username">Username</label>
          <br />
          <input
            type="password"
            id="admin_password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="admin_password">Password</label>
          <br />
          <br />
          <button className="btn blue darken-2" type="submit" name="action">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
        {error && <div>{error}</div>}
      </div>
    );
  }
}

export default Admin;
