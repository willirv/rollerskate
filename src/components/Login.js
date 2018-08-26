import React, { Component } from 'react';
import styles from '../styles/login.css';

import { Link } from 'react-router-dom'






export default class Login extends React.Component{
	render(){
		return(
         <div id="login-form">
			<h4>Login</h4>
      
               <form>
               <div id="Email-bar">
                <input type="text" name="email" placeholder="Email" />
               </div>
               <div id="Password-bar">
                <input type="password" name="password" placeholder="Password"/>
               </div>
               <div id="Login-button">
                <input type="submit" value="Log In" />
              </div>
              <div id="link-bar">
                <a href="">Forgot your password?</a>
               </div>
               </form>
        </div>
			);
	}
}


