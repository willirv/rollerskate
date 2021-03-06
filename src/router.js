import React, { Component } from 'react';
// Import Render from react dom
import {render} from "react-dom";

// Import Router, Route, BrowserHistory from react router
import {Router, Route, browserHistory } from "react-router"; 

//********************** Import Login and Register Components
import home from "./components/welcome";
import register from "./components/Register";
import login from "./components/Login";
import dashboard from "./components/dashboard";
import upload from "./components/upload";
import profileimg from "./global/profile_img";
import preference from "./components/preference.js";


//********************** Set Route paths for components and render Home component /
// Set display as /login and /register etc. in renderer 
export default class App extends React.Component{
	render(){
		return(
			  <Router history={browserHistory}>
			    <Route path={"/"} component={home} />
			    <Route path={"login"} component={login} />
			    <Route path={"register"} component={register} />
			    <Route path={"dashboard"} component={dashboard} />
			    <Route path={"upload"} component={upload} />
			    <Route path={"profileimg"} component={profileimg} />
			    <Route path={"preference"} component={preference} />

			  </Router>
			);
	}
}
