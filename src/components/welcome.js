import React, { Component } from 'react';
import firebase from "firebase";
import { Link, browserHistory } from "react-router"; 
import styles from '../styles/welcome.css';



export default class Welcome extends React.Component{
	render(){
		return(
             <div id="welcome">
             <h3>Rollerskate</h3>
               <p>Are you ready to meet people?</p>
             <button type="submit"><Link to={"login"}>Continue</Link></button>
             </div>
			);
	}
}
