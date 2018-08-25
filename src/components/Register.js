import React, { Component } from 'react';


export default class Regoform extends React.Component{
	render(){
		return(
			<div>
			   <h4> Register </h4>
                <form>
                  <input type="text" name="name" placeholder="Name" />
                  <input type="text" name="age" placeholder="Age" />
                  <input type="text" name="email" placeholder="Email" />
                  <input type="password" name="password" placeholder="password"/>
                  <input type="password" name="password" placeholder="Re - confirm password"/>
                <input type="submit" value="Register" />
               </form>
             </div>
			);
	}
}

