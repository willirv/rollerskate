import React, { Component } from 'react';
import { Link, browserHistory } from "react-router"; 
import styles from '../styles/welcome.css';


export default class Welcome extends React.Component{
	render(){
		return(
             <div id="welcome">
             <h3>Rollerskate</h3>
               <p>Test</p>
             <button type="submit"><Link to={"login"}>Continue</Link></button>
             </div>
			);
	}
}
