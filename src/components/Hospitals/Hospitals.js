import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login/Login';

class Hospitals extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Login></Login>
        </div>
      </BrowserRouter>
    );
  }
}

export default Hospitals;