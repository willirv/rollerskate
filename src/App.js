import React, { Component } from 'react';
import navbar from './global/navbar.js';
import Login from './components/Login.js';




export default class App extends React.Component{
	render(){
		return(
			<div>
			   <navbar/>
		       <Login/>
		    </div>
			);
	}
}

