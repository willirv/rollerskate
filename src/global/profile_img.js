//Import React from React 
import React, { Component } from 'react';
//Import firebase from firebase 
import firebase from "firebase";
//Import react-router elements 
import { Link, Router, Route, browserHistory } from "react-router"; 
//Import form elements from react-bootstrap
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export default class Dashboard extends React.Component{

componentDidMount() {
if(firebase.auth().currentUser !== null){
//For debug console log the user id of the new user
console.log("user id" + firebase.auth().currentUser.uid)
//Declare a variable for the new users 
var uid = firebase.auth().currentUser.uid;

   }

}

	render(){
		return(
		<div id="Profile_img">
           
        </div>
			);
	}
}

