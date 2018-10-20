import React, { Component } from 'react';

import firebase from "firebase";

import { Link, browserHistory } from "react-router"; 

import styles from '../styles/welcome.css';

import logo from '../Images/rollerskatelogo.svg';

import box from '../Images/box.svg';

import pinkbox from '../Images/pinkbox.svg';

import line from '../Images/sqiggle.svg';

import yellowline from '../Images/yellowline.svg';


import $ from "jquery";

import anime from 'animejs';



export default class Welcome extends React.Component{
componentDidMount() {
// Declare a variable for the loading bar 
var loading_bar = document.querySelector('#progress-bar');
// Declare a variable for the submit button
var submit_button = document.querySelector('#welcome_button');
// Declare a variable for the sumbit text
var submit_text = document.querySelector('#Continue_text');
// Declare a variable for the timeline for anime.js => as basic timeline
var basicTimeline = anime.timeline({
  autoplay: false
});

// Anime js basic timeline component
basicTimeline 
// Animate the button & text to disappear
.add({
    targets: submit_button, submit_text,
    duration: 700,
    width: 0,
    height: 0,
    opacity: 0,
    easing: "linear"
})
// Animate the loading bar to generate once the button has disappeared
.add({
    targets: loading_bar,
    duration: 2000,
    width: 250,
    easing: "linear",
// When animation is complete
    complete: function(anim) {
// Change the window location to the login page
    window.location = "login";
  }
});



// When the welcome button is clicked => run the basic timeline function and set to play 
$("#welcome_button").click(function(){

basicTimeline.play();



});

}

	render(){
		return(
             <div id="welcome">
             <div id="logo">
               <img src={logo} />
             </div>
             <h3>Rollerskate</h3>
             <div id="caption">
               <p>A new way, to meet and interact</p>
             </div>
             <div id="enter-button">
             <button type="submit" id="welcome_button"><p id="Continue_text">Continue</p></button>
             </div>
             <div id="progress-bar"></div>
             </div>
			);
	}
}
