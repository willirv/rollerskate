//Import React from React 
import React, { Component } from 'react';
//Import firebase from firebase 
import firebase from "firebase";
//Import upload stylesheet 
import styles from '../styles/upload.css';
//Import react-router elements 
import { Link, Router, Route, browserHistory } from "react-router"; 
//Import form elements from react-bootstrap
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import logo from '../Images/rollerskatelogo.svg';

import camera from '../Images/camera.svg';


import $ from "jquery";

export default class upload extends React.Component{



componentDidMount() {


// If the user has selected Males 
   $("#male-selection").click(function(){
  
  // console.log for debug
    console.log("male");
    

  // Find the current auth() user => to get the uid of the user
   firebase.auth().onAuthStateChanged((user) => { 

// Set the uid variable as the auth() user's
   var uid = user.uid;
// Console.log the uid of the user for debug
   console.log(uid);

   // Declare the variable for the firebase database   
   var db = firebase.firestore();

   // Create a new collection and document within the auth() user database => called yes
   var docRef = db.collection("users").doc(uid);

   var setWithMerge = docRef.set({
   preference: "male"
}, { merge: true })

   .then(function(){
    window.location = "dashboard";
   })


 });
});

// If the user has selected females 
   $("#female-selection").click(function(){
    // console.log for debug
    console.log("female");

    // Find the current auth() user => to get the uid of the user
   firebase.auth().onAuthStateChanged((user) => { 

// Set the uid variable as the auth() user's
   var uid = user.uid;
// Console.log the uid of the user for debug
   console.log(uid);

   // Declare the variable for the firebase database   
   var db = firebase.firestore();

   // Create a new collection and document within the auth() user database => called yes
   var docRef = db.collection("users").doc(uid);

   var setWithMerge = docRef.set({
   preference: "female"
}, { merge: true })

   .then(function(){
    window.location = "dashboard";
   })


 });

});


// If the user has selected both

   $("#both-selection").click(function(){
    // console.log for debug
    console.log("both");

    // Find the current auth() user => to get the uid of the user
   firebase.auth().onAuthStateChanged((user) => { 

// Set the uid variable as the auth() user's
   var uid = user.uid;
// Console.log the uid of the user for debug
   console.log(uid);

   // Declare the variable for the firebase database   
   var db = firebase.firestore();

   // Create a new collection and document within the auth() user database => called yes
   var docRef = db.collection("users").doc(uid);

   var setWithMerge = docRef.set({
   preference: "both"
}, { merge: true })

   .then(function(){
    window.location = "dashboard";
   })


 });
});

}







render(){
return(
<div id="gender">
   <h3>Who would you like to talk to?</h3>
   <div id="gender_select">
       <ul>
        <li> <a href="#" id="male-selection">Male</a> </li>
        <li> <a href="#" id="female-selection">Female</a> </li>
        <li> <a href="#" id="both-selection">Male & Female</a> </li>
      </ul>
    </div>
</div>
			);
	}
}