//Import React from React 
import React, { Component } from 'react';
//Import firebase from firebase 
import firebase from "firebase";
//Import login stylesheet 
import styles from '../styles/register.css';
//Import react-router elements 
import { Link, Router, Route, browserHistory } from "react-router"; 
//Import form elements from react-bootstrap
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";




export default class Login extends React.Component{













  render(){
    return(
         <div id="image-upload-container">

         <input type="file" id="Filetoupload" name="Filetoupload"/>
         
         <Button
            id="image-upload"
            block
            bsSize="large"
            type="submit"
         >
            Test
          </Button>

        </div>
      );
  }
}