import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Import Login / Register components 
import Login from './components/Login.js';
import Register from './components/Register.js';


const Main = () => (
	  <main>
<Switch>
  <Route exact path='/' component={Login}/>;
  <Route path='/register' component={Register}/>
</Switch>
  </main>
  )