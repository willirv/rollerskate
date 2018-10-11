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


import $ from "jquery";

export default class upload extends React.Component{

// Put the file upload into the already made user database 
  // User inputs the images 
    // Get the url of the inputed image 
      // Either turn the image into a blob and put into the database of the user 
         //Or... Put the file into the database without blob

componentDidMount() {

// When the image submit button is pressed 
  $("#image_submit").click(function(){
    console.log("test");

// Check to see whether the user is authed () in firebase 
 firebase.auth().onAuthStateChanged((user) => {

// If they are a user, get the uid of the user and console.log for debug
  if (user) {

 // Declare the uid varaible with the users uid 
    var uid = user.uid;

// Console.log the uid of the user 
    console.log(uid);

 // Declare the file input
    var file = document.getElementById("image_uploads").files[0];
    
// Declare the file name variable 
    var filename = document.getElementById("image_uploads").files[0].name;

// Console.log the filename for debug 
    console.log(filename);


// Declare the storage url of storage location
    var storageUrl = "/Images/";

// Declare the storage ref --- Where the file is to be placed
    var storageRef = firebase.storage().ref(storageUrl).child(filename);

// Set a variable for the task that is to be continued 
    storageRef.put(file)

// On the state chnaged of the input run the function snapshot => if it works, might need to change
     .then(function(snapshot) {

// Set a variable for the percentage of the file upload => from the snapshot function
    var percentage = snapshot.bytesTransferred/snapshot.totalBytes *100;

// Console.log the percentage of the upload to the console for debug
    console.log(percentage);

// Set the location of where to append the percentage metre => may remove in the future 
    var location = document.getElementById("percentage-tab");

// Append the percentage to the to the percentage tab div 
    location.append(percentage);

// If the percentage of the file upload === 100
  // Get the url of the file that was just uploaded 
    if (percentage== 100){
    	storageRef.getDownloadURL().then(function (url) {
        
         // console.log the url of the image for debug 
    		console.log(url);

         // Set the database variable
    		var db = firebase.firestore();

         // Set the database settings to true => to prevent errors within console
    		 db.settings({
             timestampsInSnapshots: true
             });

         //Set the docref of the database to the the users collection => with the uid of the auth()ed user
             var docRef = db.collection("users").doc(uid);

         // set merge => to prevent existing data 
             var setWithMerge = docRef.set({profileimg: url}, { merge: true })
         // When the document is set => change the window location to the main dashboard
             .then(function () {
             	window.location = "dashboard";
             });

        

            
    	});




    }
});


}

//Firebase auth()
});
// click function
});
// Mount
}







render(){
return(
<div id="upload-form">
   <div id="file-input">
      <div id="percentage-tab"></div>
   <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple/>
   <button id="image_submit">Submit</button>
   </div>
</div>
			);
	}
}