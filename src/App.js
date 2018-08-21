import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
           <label>
              Email:
              <input type="text" name="name" />
           </label>
           <label>
              Password:
              <input type="text" name="Password"/>
           </label>
           <input type="submit" value="Submit" />
        </form>
      <input type="submit" value="Register"/>
      </div>
    );
  }
}



export default App;
