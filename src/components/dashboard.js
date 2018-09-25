//Import React from React 
import React, { Component } from 'react';
//Import firebase from firebase 
import firebase from "firebase";
//Import react-router elements 
import { Link, Router, Route, browserHistory } from "react-router"; 
//Import form elements from react-bootstrap
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export default class Dashboard extends React.Component{

checkUser(){
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    window.location = "login";
  }
});
}

	render(){
		return(
			<div onload="checkUser()">
			   <h4> Dashboard </h4>
      </div>
			);
	}
}

