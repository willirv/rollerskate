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
componentDidMount() {

// When a child of the matches container is clicked run a function
$("message_close").click(function(){

// For debug => find the users name based on the value of the div
 //var name = $(this).attr('value');

//var location = $(this).children("#message_container").text();
// Show the message container for this component

$(this).children("#message_container").hide();

//$("#message_container > div", this).show();
// Alert the name for debug
 //alert(name);
 
 //alert(location);
});


}





render(){
return(
<div>
<p> Test test </p>
</div>
      );
  }
}