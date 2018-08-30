//Import React from React 
import React, { Component } from 'react';
//Import firebase from firebase 
import firebase from "firebase";
//Import login stylesheet 
import styles from '../styles/login.css';
//Import react-router elements 
import { Link, Router, Route, browserHistory } from "react-router"; 
//Import form elements from react-bootstrap
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";



//*********************************** Form and event attributs  ***********************************

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


//*********************************** Submit button ***********************************
//Create a handle for button/ submit 
  handleSubmit = event => {


//Prevent the user submiting the form when there is no password inputted
    event.preventDefault();
//Declare the password variable 
    var password = document.getElementById("password").value;
//Declare the email variable 
    var email = document.getElementById("email").value;
//Console.log the password variable for debug 
    console.log(password);
//Console.log the email variable for debug 
    console.log(email);
//Set the credential variable - To find whether the user is auth() or not
    var credential = firebase.auth.EmailAuthProvider.credential(email, password);
//Log variable for debug 
    console.log(credential);
  

//Call firebase auth() function with the inputted email and password
firebase.auth().signInWithEmailAndPassword( email, password)
//If the email and password match firebase database call the firebase user function
   .then(function(User) {
       //Success - the users email and password is on database
       //Console log for debug
       console.log(firebase.auth().currentUser);
       console.log("yay you're a user");
       window.location = "location";
       //Set the window location to the ./dashboard element


   })
//If the email and password DO NOT match firebase data run the catch function
  .catch(function(error) {
       //Error Handling - The users password does not match firebase
       //Console log for debug 
       console.log(firebase.auth().currentUser);
       console.log("User not found")

  
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


