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

import logo from '../Images/rollerskatelogo.svg';

import leftarrow from '../Images/leftarrow.svg';

import rightarrow from '../Images/rightarrow.svg';


import $ from "jquery";

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
//Check that the new user is auth()
if(firebase.auth().currentUser !== null){
//For debug console log the user id of the new user
console.log("user id" + firebase.auth().currentUser.uid)
//Declare a variable for the new users 
var uid = firebase.auth().currentUser.uid;





//*********************************** Database ***********************************
// create a variable for firebase firestore database 
   var db = firebase.firestore();

// Set the timestamp to true - to prevent console errors 
db.settings({
  timestampsInSnapshots: true
});



// Add a new entry to the users database collection - with uid for easy callback
  db.collection("users").doc(uid).set({
    uid: uid,
    name: name,
    age: age,
    gender: gender,
    email: email,
    state: "online",
    bio: null
})

// For debug - console log wether the database entry was success full or not
.then(function(docRef) {
    console.log("Document written with ID: ", uid);
    window.location = "upload";
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});




//*********************************** If not a new user ***********************************

}
})
}





  render() {
      return(
         <div id="register">
          <div id="back-nav">
           <Link to={"/login"}><img src={leftarrow}/></Link>
          </div>
          <div id="home-nav">
            <Link to={"/"}><img src={logo}/></Link>
          </div>
      <div id="register-form">
      <h4>Register</h4>


<p> Enter Your Name </p>
      <form onSubmit={this.handleSubmit}>


          <FormGroup controlId="name" bsSize="large">
            <FormControl
              id="name"
              autoFocus
              type="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>

<p> Enter Your Age </p>       
             <FormGroup controlId="age" bsSize="large">
            <FormControl
              id="age"
              autoFocus
              type="age"
              placeholder="Age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </FormGroup>

<p> Select Your Gender </p> 
           <FormGroup controlId="gender" bsSize="large">
            <FormControl
              id="gender"
              autoFocus
              placeholder="Gender"
              value={this.state.gender}
              onChange={this.handleChange}
            />
          </FormGroup>


<p> Enter Your Email </p>      
          <FormGroup controlId="email" bsSize="large">
            <FormControl
              id="email"
              autoFocus
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>

<p> Create A Password </p>     
          <FormGroup controlId="password" bsSize="large">
            <FormControl
              id="password"
              placeholder="Password"
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
           </div>
        </div>
      );
  }
}
