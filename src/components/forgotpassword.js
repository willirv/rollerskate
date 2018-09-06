import React, { Component } from 'react';
import styles from '../styles/forgot-password.css';
import { Link, Router, Route, browserHistory } from "react-router"; 






export default class Login extends React.Component{
	render(){
		return(
         <div id="password-forget">
            <div id="password-home">
              <Link to={"/"}>HOME</Link>
            </div>
			      <h4> Fook! forgot me password </h4>
        </div>
			);
	}
}