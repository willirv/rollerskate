//Import React from React 
import React, { Component } from 'react';
//Import firebase from firebase 
import firebase from "firebase";
//Import login stylesheet 
import styles from '../styles/register.css';
//Import react-router elements 
import { Link, Router, Route, browserHistory } from "react-router"; 
//Import form elements from react-bootstrap
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class Register extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name:"",
      Age:"",
      email:"",
      password:""
  }

}

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div id="register-content">
        <div id="register-home">
            <Link to={"/"}> &larr; back </Link>
            <Link to={"/login"}>HOME</Link>
        </div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} id="Name" />
        </label>
        <label>
          Age:
          <input type="text" value={this.state.value} onChange={this.handleChange} id="age" />
        </label>
        <label>
          Email:
          <input type="text" value={this.state.value} onChange={this.handleChange} id="email" />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.value} onChange={this.handleChange} id="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    );
  }
}
