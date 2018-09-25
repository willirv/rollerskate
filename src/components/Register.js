//Import React from React 
import React, { Component } from 'react';
//Import firebase from firebase 
import firebase from "firebase";
//Import login stylesheet 
import styles from '../styles/register.css';
//Import react-router elements 
import { Link, Router, Route, browserHistory } from "react-router"; 
//Import form elements from react-bootstrap
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class Register extends React.Component{


  constructor(props){
    super(props);
// Set the state of the form as name, age, email and password  
     this.state = {
      name:"",
      age:"",
      email:"",
      password:""
     };
  }



// Create a valid form state and define the email and password elements 
  validateForm(){
     return this.state.email.length > 0 && this.state.password.length > 0;
  }

// Set an event for when the input form is changed and target the id of selected form
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }




//*********************************** Submit button ***********************************
//Create a handle for button/ submit 
  handleSubmit = event => {


//Prevent the user submiting the form when there is no password inputted with event
    event.preventDefault();

//*********************************** Declare input variables ***********************************
//Declare the password variable 
    var password = document.getElementById("password").value;
//Declare the email variable 
    var email = document.getElementById("email").value;
// Declare the name variable
    var name = document.getElementById("name").value;
// Declare the age variable
    var age = document.getElementById("age").value;
// Declare the gender variable 
    var gender = document.getElementById("gender").value;


//Console.log the password variable for debug 
    console.log(password);
//Console.log the email variable for debug 
    console.log(email);
//Console.log the age of user for debug
    console.log(age);
//Console.log the name of user for debug
    console.log(name);
//Console.log gender
    console.log(gender);



//*********************************** Register new user ***********************************

//Call firebase auth() function to create new user auth account with the inputted email and password
firebase.auth().createUserWithEmailAndPassword(email, password)

//*********************************** If a new user ***********************************
.then(function(user){

//*********************************** Database ***********************************
// create a variable for firebase firestore database 
var db = firebase.firestore();

// Set the timestamp to true - to prevent console errors 
db.settings({
  timestampsInSnapshots: true
});

// Add a new entry to the users database collection - with user information
  db.collection("users").add({
    name: name,
    age: age,
    gender: gender,
    email: email,
    bio: null
})
// For debug - console log wether the database entry was success full or not
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    window.location = "dashboard";
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

})

//*********************************** If not a new user ***********************************

.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // error debug
  console.log(errorCode);
   // error debug
  console.log(errorMessage);
  // ...
});


}


  render() {
      return(
         <div id="register">
           <div id="register-home">
           <Link to={"/login"}> &larr; back </Link>
            <Link to={"/login"}>HOME</Link>
           </div>
      <div id="register-form">
      <h4>Register</h4>

/* Enter name */
      <form onSubmit={this.handleSubmit}>


          <FormGroup controlId="name" bsSize="large">
            <FormControl
              id="name"
              autoFocus
              type="name"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>

/* Enter age */        
             <FormGroup controlId="age" bsSize="large">
            <FormControl
              id="age"
              autoFocus
              type="age"
              placeholder="Enter your age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </FormGroup>

/* Get Gender */
           <FormGroup controlId="gender" bsSize="large">
            <FormControl
              id="gender"
              autoFocus
              type="gender"
              placeholder="Enter your gender"
              value={this.state.gender}
              onChange={this.handleChange}
            />
          </FormGroup>


/* Enter email */      
          <FormGroup controlId="email" bsSize="large">
            <FormControl
              id="email"
              autoFocus
              type="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>

/* Enter password */      
          <FormGroup controlId="password" bsSize="large">
            <FormControl
              id="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            id="login-submit"
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Register
          </Button>
        </form>
           <div id="link-bar">
            <div className="forgotpassword-button">
               <Link to={"forgotpassword"}>Forgot your password?</Link>
            </div>
            </div>
           </div>
        </div>
      );
  }
}
