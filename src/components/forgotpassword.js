import React, { Component } from 'react';
import styles from '../styles/forgot-password.css';
import { Link, Router, Route, browserHistory } from "react-router"; 






export default class Login extends React.Component{
	render(){
		return(
         <div id="password-forget">
            <div id="password-home">
              <Link to={"/login"}> &larr; back </Link>
              <Link to={"/login"}>HOME</Link>
            </div>
          <div id="password-content">
			      <h4>Insert forgot password form</h4>
			</div>
        </div>
			);
	}
}