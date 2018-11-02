//Import React from React 
import React, { Component } from 'react';

//Import firebase from firebase 
import firebase from "firebase";

//Import react-router elements 
import { Link, Router, Route, browserHistory } from "react-router"; 
//Import form elements from react-bootstrap
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import $ from "jquery";

export default class matches extends React.Component{

// Create a div for each of the matches
  // Append the name of the match 
    // Append the profile image of the match

componentDidMount() {
    
// Call the current auth() state of the user
  firebase.auth().onAuthStateChanged((user) => {
// If they are a user
    if (user) {

// Set the variable of the users id 
    var match_uid = user.uid;

// Console.log the uid of the user for debug
    console.log(user.uid);
// Call the firebase database
    var db = firebase.firestore();
// database setting => to prevent a console error
   db.settings({
  timestampsInSnapshots: true
   });

// Get the current auth() users collection of matches
   db.collection("users").doc(match_uid).collection("match")

   .get()

// Then run the querySnapshot for each of the entrys within the collection
   .then(function(querySnapshot) {

// For each element of data call the function doc
   querySnapshot.forEach(function(doc) {

// Declare the name variable from the collection => should print out the uid of the matches 
   var name = doc.id;

// Get the data for the people within the match container 
   db.collection("users").doc(name)

   .get()

// The for the doc of the users within the match container
   .then(function(doc){

// Declare the name variable
   var user_name = doc.data().name;

// Declare the profile image url of the user as profile_img
   var profile_img = doc.data().profileimg;

// Create a new div element <div>
   var newDiv = document.createElement("div");

   var matchContent = document.createTextNode(user_name); 

// Set the id attribute of the div to the users name
   newDiv.setAttribute('id', user_name);

// Create a new img as display img and set its attributes for debug
   var display_img = new Image(200,200);

// Set the source of the new image as the profile img url 
   display_img.src = profile_img;

// Append the name for debug
   //document.getElementById("matches_container").append(user_name);

   newDiv.append(matchContent);

    newDiv.append(display_img);

    document.getElementById("matches_container").append(newDiv)
    

   });

});
});

}

});

}





render(){
return(
<div id="matches_container">
</div>
			);
	}
}