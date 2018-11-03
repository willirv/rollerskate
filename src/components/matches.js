//Import React from React 
import React, { Component } from 'react';
//Import firebase from firebase 
import firebase from "firebase";
//Import Matches stylesheet 
import styles from '../styles/matches.css';
//Import react-router elements 
import { Link, Router, Route, browserHistory } from "react-router"; 
//Import form elements from react-bootstrap
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//Import Jquery 
import $ from "jquery";
//Render component
export default class matches extends React.Component{

// Create a div for each of the matches
  // Append the name of the match 
    // Append the profile image of the match
      //Create a div within each match with a unique id 
        // Get the unique I div and hide it potencially

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

// Declare a variable for the uid of the unique user 
   var user_uid = doc.data().uid;

// Declare the profile image url of the user as profile_img
   var profile_img = doc.data().profileimg;

// Create a new div element <div>
   var newDiv = document.createElement("div");

// Set the attribute of the div's as the names of the matches 
   newDiv.setAttribute('value', user_name );


// Create a new <p> element
   var match_name = document.createElement("p");

// Then append the users name to the new <p> element
   var matchContent = document.createTextNode(user_name); 

// Append the username of the user to the new <p> element
    match_name.append(matchContent);


/************************************************ Timer Component ************************************************/

// Create a new div called time => when the user types in the message screen update the timer
   var timer = document.createElement("div");

   timer.setAttribute('id', "timer");

// Create an input 
   var timer_output = document.createElement("input");

// Set the value of the input to 5000 just for debug
   timer_output.setAttribute('value', "5min");

// Append the time_output element to the timer div
   timer.append(timer_output)

/************************************************ Messages_tab ************************************************/

 //For each of the matches that we have 
  //Create a new div for each called messages => or with each users unique uid
    //We need to hide the div for the messages tab and transition it when the user selects one of their matches
     // When we've completed that task, we then need to create a header on the page with the match users name
       //Create the spearate components of the chat, messages, type your message
         // And the sumbit field

// Create a new div element for each of the users 
   var message_tab = document.createElement("div");

// Set the ID of the message tab div as message tab
   message_tab.setAttribute('id', "messagetab");

// Set the value of the created div as the users unique uid 
   message_tab.setAttribute('value', user_uid);
  


// Create a new img as display img and set its attributes for debug
   var display_img = new Image(200,200);

// Set the source of the new image as the profile img url 
   display_img.src = profile_img;

// Append the name for debug
   //document.getElementById("matches_container").append(user_name);


    newDiv.append(match_name);
    newDiv.append(display_img);
    newDiv.append(timer);
    newDiv.append(message_tab);

    document.getElementById("matches_container").append(newDiv)



$('#matches_container > div').click(function(){


 var test = $(this).attr('value');

 alert(test);
});
    

   });

});
});

}

});
}

//#matches_container > div:nth-child(2)

render(){
return(
<div id="matches_container">
</div>
			);
	}
}