import React, { Component } from 'react';
import Larrow from '../Images/left.svg';
import Rarrow from '../Images/right.svg';

export default class navbar extends React.Component{
	render(){
		return(
	   <div>
          <img src={Larrow} alt="Left-arrow"/>
          <img src={Rarrow} alt="Right-arrow"/>
      </div>
	   );
	}
}

