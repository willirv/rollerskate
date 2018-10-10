import React, { Component } from 'react';
import firebase from "firebase";
import { Link, browserHistory } from "react-router"; 
import styles from '../styles/welcome.css';
import logo from '../Images/rollerskatelogo.svg';
import box from '../Images/box.svg';
import pinkbox from '../Images/pinkbox.svg';
import line from '../Images/sqiggle.svg';
import yellowline from '../Images/yellowline.svg';



export default class Welcome extends React.Component{
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
             <button type="submit"><Link to={"login"}>Continue</Link></button>
             </div>
             </div>
			);
	}
}
