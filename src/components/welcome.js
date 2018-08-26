import React, { Component } from 'react';
import { Link } from "react-router"; 

export default class App extends React.Component{
	render(){
		return(
             <div>
             <h3>Welcome</h3>
             <Link to={"login"}>Test</Link>
             </div>
			);
	}
}
