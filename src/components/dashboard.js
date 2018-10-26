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

import anime from 'animejs';

import logo from '../Images/rollerskatelogo.svg';

import cross from '../Images/cross.svg';

import tick from '../Images/tick.svg';

import profile_icon from '../Images/profile-icon.svg';

import messages_icon from '../Images/messages_icon.svg';

import profile_background from '../Images/profile_background.svg';

import pencil from '../Images/pencil.svg';


import gender from '../Images/gender.svg';





export default class Current extends React.Component{

componentDidMount() {


//**************************************** Show and hide profile *********************//
// when my profile is selected -- show profile
  $("#My-profile").click(function(){

  var profileOpen = document.querySelector("#profile_pop");

  var profile_icon = document.querySelector("My-profile img");

  
  $("#profile_pop").show();

  anime({
  targets: profileOpen,
  translateY: 800,
  duration: 900,
  easing: 'easeInOutSine'
});

});




 $("#My-profile").mouseenter(function(){

 var target = document.querySelector(".profile-icon");

  anime({
   targets: target,
    rotate: '1turn',
    opacity: 0.7,
});

});


 $("#My-profile").mouseleave(function(){

 var target = document.querySelector(".profile-icon");

  anime({
   targets: target,
    opacity: 1,
});

});

// When close box is selected close profile
  $("#close").click(function(){

  var profileClose = document.querySelector("#profile_pop");

  anime({
  targets: profileClose,
  translateY: -800,
  duration: 1100,
  easing: 'easeInOutSine'
});
    //$("#profile_pop").hide();
});


$("#close").mouseenter(function(){

  var close_icon = document.querySelector("#close")

anime({
  targets: close_icon,
  opacity: 0.7
});

});




$("#close").mouseleave(function(){

  var close_icon = document.querySelector("#close")

anime({
  targets: close_icon,
  opacity: 1
});

});




$("#bio_button").mouseenter(function(){


var button = document.querySelector("#bio_button")

anime({
  targets: button,
  opacity: 0.6
});

});



$("#bio_button").mouseleave(function(){


var button = document.querySelector("#bio_button")

anime({
  targets: button,
  opacity: 1
});

});


$("#bio_button").click(function(){
   
   $("#add-bio").show();

   var bio_target = document.querySelector("#add-bio");


anime({
  targets: bio_target,
  opacity: 1,
  duration: 1000,
});



});




$("#add-bio-close").click(function(){
   

var bio_target = document.querySelector("#add-bio");


anime({
  targets: bio_target,
  opacity: 0,
  duration: 1000,
  complete: function(anim) { 
    $("#add-bio").hide();
  }
});



});



$("#gender_button").click(function(){
   
$("#re-select-gender").show();


var gender_target = document.querySelector("#re-select-gender");


anime({
  targets: gender_target,
  opacity: 1,
  duration: 1000,
});




});




$("#messages").click(function(){

$("#messages_pop").show();

var messages_open = document.querySelector("#messages_pop")

anime({
  targets: messages_open,
  translateX:-1400,
  duration: 1100,
  easing: 'easeInOutSine'
});

});


  $("#messages_close").click(function(){

    var messages_close = document.querySelector("#messages_pop")
    
anime({
  targets: messages_close,
  translateX:1400,
  duration: 1000,
  easing: 'easeInOutSine',
   complete: function(anim) { 
    $("#messages_pop").hide();
  }
});

});


    // when my profile is selected -- show profile
  $("#match-close").click(function(){
    $("#itsamatch").hide();
});

// When the user selects the gender preference of males 
  // We need to update the database so the users preference === males 
     // After the selections refresh the dashboard div - similar to the bio element  
   $("#males").click(function(){
    // Check the current auth() state of the user
     firebase.auth().onAuthStateChanged((user) => {
    // Declare the uid of the current user if there is one
     var uid = user.uid;
    // Declare the database variable => so that we can get the data for the user and change it 
     var db = firebase.firestore();
   // Declare the doc ref the the currently auth users database
     var docRef = db.collection("users").doc(uid);
   // We then want to merge the new value depending on the users gender choice on their profile
      // Set the preference of the user to male => because they have selected male
    var setWithMerge = docRef.set({
    preference: "Male",
    }, { merge: true });
   // Console.log for debug
    //console.log("changing the gender option of the user to males");

    // Reload to update the bio content;
    $("#bio-content").load("#bio-content");

     });
   });

// When the user selects the gender preference of females 
   // We need to update the databse so the users preference changes to === female
     // After the selections refresh the dashboard div - similar to the bio element  
    $("#females").click(function(){

     firebase.auth().onAuthStateChanged((user) => {
    // Declare the uid of the current user if there is one
     var uid = user.uid;
    // Declare the database variable => so that we can get the data for the user and change it 
     var db = firebase.firestore();
   // Declare the doc ref the the currently auth users database
     var docRef = db.collection("users").doc(uid);
   // We then want to merge the new value depending on the users gender choice on their profile
      // Set the preference of the user to male => because they have selected female
    var setWithMerge = docRef.set({
    preference: "Female",
    }, { merge: true });
   // Console.log for debug
    //console.log("changing the gender option of the user to males");

    // Reload to update the bio content;
    $("#bio-content").load("#bio-content");
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



//**************************************** Updating the bio of the user *********************//
    $("#bio-submit").click(function(){


    firebase.auth().onAuthStateChanged((user) => {
// If they are a user
    if (user) {
// Set the data base variable 
    var db = firebase.firestore();
// Find the value of the inputed bio
    var biotext = document.getElementById("bio-input").value;
// Log the biotext variable to console 
    console.log(biotext);
// Declare the uid of the users uid
    var uid = user.uid;
// Console.log the uid of the user for debug
    console.log(user.uid);
// Declare the location where we are going to put the bio text within the users database 
    var docRef = db.collection("users").doc(uid);

// Set a merge within the database => to prevent the data from overiding existing enteries
    var setWithMerge = docRef.set({
    bio: biotext,
    }, { merge: true });

// Reload to update the bio content;
    $("#bio-content").load("#bio-content");

  }
 
});
});

//**************************************** Yes/ No functionality *********************//


//**************************************** Yes *********************// 
// When yes is selected -- run function 
    $("#Yes").click(function(){

  
// Get the id of the last child of the ptc matches div
   var yes_uid = $("#ptc-matches").children().last().attr('id');

// console.log the yes varible to the console for debug => should print the uid of the targeted user
   console.log(yes_uid);

   var yes_button_element = document.querySelector('#Yes');


  anime({
   targets: yes_button_element,
    scale: {
    value: '2',
    duration: 300,
    easing: 'easeInOutSine'
  },
  direction: 'alternate'
});
   
// Find the current auth() user => to get the uid of the user
   firebase.auth().onAuthStateChanged((user) => { 

// Set the uid variable as the auth() user's
   var uid = user.uid;

// Console.log the uid of the logged in user 
  // console.log(uid);


// Declare the variable for the firebase database   
   var db = firebase.firestore();

// Create a new collection and document within the auth() user database => called yes
   var docRef = db.collection("users").doc(uid).collection("yes").doc(yes_uid);

// Merge the new collection within the existing users database => to prevent all the databeing overided
   var setWithMerge = docRef.set({
    yes_uid
}, { merge: true });




// Console.log - for debug
  // console.log("Yes");



// Need to check the auth() users database for the uid of the potencial match
  // Then check the database of the potencial match for the uid of the auth user 
    // then run function if its a match


//**************************************** Calling both the current auth() users database and the match on the screens and comparing the data => to see wheather its a match *********************// 
// Get the current auth users data()
  db.collection("users").doc(uid).collection("yes")
  .get()
// Query snapshot the firebase database 
  .then(function(querySnapshot){
// For each document within the database 
   querySnapshot.forEach(function(doc){
// Console.log them with a string for debugging => prints the users the auth() has said yes to
    console.log("currentuser:" + doc.id);

// Declare a variable for the users data => the users theyve said yes to
    var user_yes = doc.id;


// Set the Ref for the database to the yes users content
   var Ref = db.collection("users").doc(yes_uid).collection("yes");

// After finding the auth() users data => then get the data for the potencial match on the screen
  // Using the declared variable of the present div => get the collection of no selections !!!!! Have to change to yes
    db.collection("users").doc(yes_uid).collection("yes")
    .get()
    // Add a querySnapshot function
    .then(function(querySnapshot) {
       // For each document within the user on the screens database 
        querySnapshot.forEach(function(doc) {
          // set a variable for the potencial matches data 

          var poten_data = doc.id;

          // Console.log the data within the no collection
         console.log("potencial match:" + doc.id);


              // Declare a duplicate variable => as false
     var match = false;


     //**************************************** Match check -- Check the whether both users have said yes *********************//
// Get the uid of the current div on the screen
   // Call firebase ref with their uid to the yes collection 
     // We then need to check whether the uid of the potencial match is within the collection 
       // If that is true, show a pop up => its a match etc.
         // If it is false, continue with the matching process


// Checking the potencial matches database for the uid of the currently logged in user 
  // If the data of the potencial match = the ui of the auth user
      if(poten_data === uid){
         // Then console.log "this is a match"
  console.log("This is a match");

  // Declare the variable for the firebase database   
   var db = firebase.firestore();

// Create a new collection and document within the auth() user database => called yes
   var docRef = db.collection("users").doc(uid).collection("match").doc(yes_uid);

// Merge the new collection within the existing users database => to prevent all the databeing overided
   var setWithMerge = docRef.set({
    yes_uid
}, { merge: true });


            $("#itsamatch").show();
           }
       else{
        console.log("no match");
       }


        });

    });

  });

})
    
})



// Rather than removing the child => animate through anime.js
  // Remove the selected div from the back of the ptc matches div

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Declare a new varibale for the last element for animejs 
    var new_element = document.querySelector('#ptc-matches div:last-child')

// Remove the top div out of view of the user
   $("#ptc-matches").children().last().fadeOut(800, function(){
     $("#ptc-matches").children().last().remove();

     var Empty = $("#ptc-matches").children().length === 0;

    if(Empty){
    document.getElementById("ptc-matches").append("You're out of matches, login in later");

    document.getElementById("No").disabled = true;

    document.getElementById("Yes").disabled = true;
  }

   });

// Get the current signed in users uid
   anime({
   targets: new_element,
   translateX: -600,
   easing: 'easeInOutQuart',
   rotate: 180
});


  //$("#ptc-matches").children().last().remove();

   
});



//**************************************** No *********************// 
// When no is selected - run function
  $("#No").click(function(){


  var button_element = document.querySelector('#No');


  anime({
   targets: button_element,
    scale: {
    value: '2',
    duration: 300,
    easing: 'easeInOutSine'
  },
  direction: 'alternate'
});

// Console.log no for debug
    console.log("No");

// Declare to no variable - get the id of the last variable of ptc matches = uid;
    var no = $("#ptc-matches").children().last().attr('id');

// Declare a new varibale for the last element for animejs 
    var element = document.querySelector('#ptc-matches div:last-child')

// Console.log no for debug should print the user id of the match on screen
    console.log(no);
// Remove the top div out of view of the user
   $("#ptc-matches").children().last().fadeOut(800, function(){
     $("#ptc-matches").children().last().remove();

     var Empty = $("#ptc-matches").children().length === 0;

     if(Empty){
     document.getElementById("ptc-matches").append("You're out of matches, come back later");

     document.getElementById("No").disabled = true;

     document.getElementById("Yes").disabled = true;
  }

   });
// Get the current signed in users uid
   anime({
   targets: element,
   translateX: 600,
   easing: 'easeInOutQuart',
   rotate: 180
});





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


      var bio = doc.data().bio;

      console.log(doc.data().profileimg);
      console.log(name);
      console.log(age);
      console.log(bio);

      document.getElementById("pop_photo").src= display_pic;

      document.getElementById("pop_info").append(name + "," + age);

      document.getElementById("bio-content").append(bio);
    }
   }).catch(function(error){
    console.log("Error getting document:", error)
   })
  }

//**************************************** The match field/ container *********************// 
// Instead of getting all the documents within the database of users
// We need to add a male/female option within the profile page => only shows males, females or both 
// We also need to check the database of the user to see whether they have already said yes/no to the user 
// Hide the users that they have already said yes/no to
// Find the current auth user
firebase.auth().onAuthStateChanged((user) => {
// Set the uid of the auth user
  var auth_uid = user.uid;
// Log it to the console
  console.log(auth_uid);


// Get the database from the current auth user => to find their preference
  db.collection("users").doc(auth_uid)

  .get()
// Then run the function for the documents within 
  .then(function(doc){

// Set a variable for the currently auth() users gender preference
  var preference = doc.data().preference;

// Console.log it for debug 
  console.log(preference + "is what this user is interested in");




// Call the users database from firebase and get all of the Users data - will change to allow user to refine data
  db.collection("users").where("gender", "==", preference)

  .get()
  .then(function(querySnapshot) {

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
      //var identifier = document.createElement("div");

     // identifier.setAttribute("value", uid);


      //identifier.setAttribute("id", uid);
      
      //var idcontent = document.createTextNode(uid);

     //identifier.appendChild(idcontent);

// User Content
      var userContent = document.createElement("div");

      userContent.setAttribute("id", "userContent");


      var newContent = document.createTextNode(name + "," + age); 
      
      userContent.appendChild(newContent);


      newDiv.append(userContent);

      newDiv.append(img);


      //newDiv.append(identifier);


      document.getElementById("ptc-matches").append(newDiv)
      
    




         });

        });
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
      <li><a id="My-profile"><img className="profile-icon" src={profile_icon}/></a></li>
      <li><a id="Home"></a></li>
      <li><a id="messages"><img src={messages_icon}/></a></li>
    </ul>
    </div>

       <div id="ptc-matches">
       </div>
    </div>


    <div id="choices">
       <ul>
        <li><button id="Yes"><img src={tick}/></button></li>
        <li><button id="No"><img src={cross}/></button></li>
        </ul>
    </div>

        <div id="messages_pop">
         <p id="messages_close">X</p>
    </div>
    <div id="itsamatch">
        <p id="match-close">X</p>
         <div id="itsamatch-content">
      <h3 id="itsamatch-head">Its a match!</h3>
          <button id="match-message">Message this user</button>
       </div>
    </div>


			<div id="profile_pop">
      <p id="close">X</p>
        <div id="profile_pop_image">
			      <img id="pop_photo" src=""/>
        </div>
            <h3 id="pop_info"></h3>
            <p id="bio-content"></p>

<div id="curve">

      <div id="re-select-gender">
         <ul>
           <li><a href="#" id="males">Male</a></li>
           <li><a href="#" id="females">Female</a></li>
        </ul>
      </div>

      <div id="bio_button">
      <img src={pencil}/>
        <p>Update your Bio</p>
      </div>

       <div id="gender_button">
       <img src={gender}/>
          <p>Gender Preferences</p>
      </div>

      <div id="add-bio">
      <p id="add-bio-close">X</p>
          <input id="bio-input" type="text"/>
          <button id="bio-submit" type="submit">Update Bio</button>
      </div>

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
</div>
			);
	}
}

