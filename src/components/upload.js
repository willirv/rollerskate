//Import React from React 
import React, { Component } from 'react';
//Import firebase from firebase 
import firebase from "firebase";
//Import upload stylesheet 
import styles from '../styles/upload.css';
//Import react-router elements 
import { Link, Router, Route, browserHistory } from "react-router"; 
//Import form elements from react-bootstrap
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export default class upload extends React.Component{
// On component mount
componentDidMount() {

// Declare the input variable 
   var input = document.querySelector('input');

// Declare the preview variable 
   var preview = document.querySelector('.preview');

// Add a listener for the input field
   input.addEventListener('change', updateImageDisplay);

// Create a function for the update image display -- For previewing the first child of uploaded image =
   function updateImageDisplay() {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

// Set a varibale for the current files - the inputted files
  var curFiles = input.files;

// When there is currently no files uploaded - append placeholder text
  if(curFiles.length === 0) {
    var para = document.createElement('p');
    para.textContent = 'Pls upload a photo';
    preview.appendChild(para);
  } 

// If an image is uploaded - create an unordered list with the image
   // Replace the appended paragraph with the file name, size 
  else {
// Create list where file will be appended
    var list = document.createElement('ol');
//
    preview.appendChild(list);
// Count the number of uploaded images and make an entry for each one
    for(var i = 0; i < curFiles.length; i++) {
      var listItem = document.createElement('li');
   // Check whether the file type is correct 
      if(validFileType(curFiles[i])) {
        var image = document.createElement('img');
        image.src = window.URL.createObjectURL(curFiles[i]);

        listItem.appendChild(image);

      } else {
        console.log("upload error");
      }

      list.appendChild(listItem);
    }
  }
}

// delcaccepted file types 
var fileTypes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png'
]

function validFileType(file) {
  for(var i = 0; i < fileTypes.length; i++) {
    if(file.type === fileTypes[i]) {
      return true;
    }
  }

  return false;
}

}


render(){
return(
<div id="upload-form">
<form method="post" encType="multipart/form-data">
  <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple/>
  
  <div className="preview">
    <p>Upload a profile picture to get started!</p>
  </div>


    <button>Submit</button>
</form>
</div>
			);
	}
}