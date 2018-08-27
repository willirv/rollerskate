import React, { Component } from 'react';
import firebase from "firebase";
import styles from '../styles/login.css';
import { Link, Router, Route, browserHistory } from "react-router"; 
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";






export default class Login extends React.Component{
  constructor(props){
    super(props);
// Set the state of the form as email and password --- will be the element we push to firebase database 
     this.state = {
      email:"",
      password:""
     };
  }

// Create a valid form state and define the email and password elements 
  validateForm(){
     return this.state.email.length > 0 && this.state.password.length > 0;
  }

// Set an event for when the input form is changed
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }




// Create a handle event preventing default being submitted
  handleSubmit = event => {
    event.preventDefault();
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    console.log(password);
    console.log(email);

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

  // ...
});
}






	render(){
		return(
         <div className="login-form">
			<h4>Login</h4>
      
           <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              id="email"
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
               <Link to={"register"}>Register</Link>
               <Link to={"forgotpassword"}>Forgot me password?</Link>
        </div>
			);
	}
}


