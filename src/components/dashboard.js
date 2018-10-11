//Import React from React 
import React, { Component } from 'react';
//Import firebase from firebase 
import firebase from "firebase";
//Import login stylesheet 
import styles from '../styles/dashboard.css';
//Import react-router elements 
import { Link, Router, Route, browserHistory } from "react-router"; 
//Import form elements from react-bootstrap
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import $ from "jquery";


export default class Current extends React.Component{

componentDidMount() {
//**************************************** Show and hide profile *********************//
// when my profile is selected -- show profile
  $("#My-profile").click(function(){
    $("#profile_pop").show();
});

// When close box is selected close profile
    $("#close").click(function(){
    $("#profile_pop").hide();
});

//**************************************** Yes/ No functionality *********************//  
//**************************************** Yes *********************// 
// When yes is selected -- run function 
    $("#Yes").click(function(){
// Console.log - for debug
    console.log("Yes");
});

//**************************************** No *********************// 
// When no is selected - run function
    $("#No").click(function(){

// Console.log no for debug
    console.log("No");

// Declare to no variable - get the id of the last variable of ptc matches = uid;
    var no = $("#ptc-matches").children().last().attr('id');
// Console.log no for debug should print the user id of the match on screen
    console.log(no);
// Remove the top div out of view of the user
    $("#ptc-matches").children().last().remove();
// Get the current signed in users uid

//**************************************** Signed in user said no/ to user *********************// 
    //Under the current users doc create a new collection called no
      //Within the collection add the user id's of no's to the collection
        // structure  = users - current auth() - no - (uid of the no match)
    firebase.auth().onAuthStateChanged((user) => {
// If they are a user
    if (user) {

// Set the data base variable 
    var db = firebase.firestore();
// Set the variable of the users id 
    var uid = user.uid;
// Console.log the uid of the user for debug
    console.log(user.uid);
// users => uid (current users database) => Create collection no => Add new doc with the uid of the user that the user said no
    var docRef = db.collection("users").doc(uid).collection("no").doc(no);
// Merge the data with the current dataset => prevents the data already existing from being overided 
    var setWithMerge = docRef.set({
    no
}, { merge: true });

  }

});

});

//**************************************** Log out button functionality *********************// 
// When the logout button in the profile tab is clicked - run function
  $("#logout-button").click(function(){
// Call firebase and set the auth() state of the user to none --  
      firebase.auth().signOut().then(function() {
// If the signout of the user is successful 
// Console.log for debug
  console.log("sign-out process was successful");
// Set the signed out users location to the login tab
  window.location = "login";
}, function(error) {
  // An error happened.
});

});


//**************************************** Profile Element *********************// 
// On mount of the object - find the auth users uid 
firebase.auth().onAuthStateChanged((user) => {
// If they are a signed in user 
  if (user) {
// Delcare a variable for the users uid
    var uid;

  	uid = user.uid;
// Log the uid of the user to the console
    console.log(user.uid);
// Declare the db variable for firebase 
    var db;
    db = firebase.firestore();

// Set the timestamp to true - to prevent console errors 
   db.settings({
  timestampsInSnapshots: true
   });
// Declare the variable of doc to declare the path for firebase database with the uid of auth() user 
   var docRef;
   docRef = db.collection("users").doc(uid);

// Declare the userRef of the collection
   var userRef;
   userRef = db.collection("users");

// Get the data for the current auth() user from the users database
    docRef.get().then(function(doc){
// If the doc of the user exists 
    if (doc.exists){
// Console.log the data of the signed in user for debug
      console.log("Document data:", doc.data());

// Delcare the variable for the users display picture 
      var display_pic = doc.data().profileimg;

// Delcare the variable for the users name
      var name = doc.data().name;

// Delcare the variable for the users age
      var age = doc.data().age;

      console.log(doc.data().profileimg);
      console.log(name);
      console.log(age);

      document.getElementById("pop_photo").src= display_pic;

      document.getElementById("pop_info").append(name + "," + age);
    }
   }).catch(function(error){
    console.log("Error getting document:", error)
   })
  }
  // Call the users database from firebase and get all of the Users data - will change to allow user to refine data
  db.collection("users").get().then(function(querySnapshot) {
// For each element of data call the function doc
    querySnapshot.forEach(function(doc) {
// Console each of the user elements to console for debug
      console.log(doc.data());
// Declare the data variable 
      var data = doc.data.length +1;
// Declare the name variable 
      var name = doc.data().name;
// Console log the name variablefor debug
      console.log(name);
//
      var age = doc.data().age;

      console.log(age);

      var uid = doc.data().uid;

      console.log(uid);

      var state = doc.data().state;


      // Append the uid of the user to -- a div value 
        // Get the last div, with the new div uid value 
         //Append the value to the current auth() users firebase database


      var profileimgurl = doc.data().profileimg;


//Main div element 
      var newDiv = document.createElement("div");

      newDiv.setAttribute('id', uid);


// Profile Img
      var img = new Image(200,200);

      img.src = profileimgurl;

// Identifier
      var identifier = document.createElement("div");

      identifier.setAttribute("value", uid);


      identifier.setAttribute("id", uid);
      
      var idcontent = document.createTextNode(uid);

     identifier.appendChild(idcontent);

// User Content
      var userContent = document.createElement("div");

      userContent.setAttribute("id", "userContent");


      var newContent = document.createTextNode("name:" + name + "age:" + age); 
      
      userContent.appendChild(newContent);


      newDiv.append(userContent);

      newDiv.append(img);


      newDiv.append(identifier);


      // add the newly created element and its content into the DOM 
      var currentDiv = document.getElementById("dummy"); 
      document.getElementById("ptc-matches").append(newDiv); 

    });
});
});
}



	render(){
   
		return(
		<div id="Dashboard">
    <div id="match_container">
    <div id="Head">
    <ul> 
      <li><a id="My-profile">My Profile</a></li>
      <li><a id="Home"></a>Home</li>
      <li><a id="Messages">Messages</a></li>
    </ul>
    </div>

       <div id="ptc-matches">
       </div>
    </div>

    <div id="choices">
        <button id="Yes">Y</button>
        <button id="No">X</button>
    </div>
			<div id="profile_pop">
      <p id="close">X</p>
			      <img id="pop_photo" src=""/>
            <h3 id="pop_info"></h3>
      <div id="logout">
            <Button
            id="logout-button"
            block
            bsSize="large"
            type="submit"
          >
            Logout
          </Button>
       </div>

			</div>
    </div>
			);
	}
}

