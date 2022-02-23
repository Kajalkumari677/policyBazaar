import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import  Termlife from "./pages/LifeInsurance.jsx";
import MaxLifeCheckout from './pages/MaxLifeCheckout';

function App() {
  return (
    <div className="App">
      {/* <h1>hello</h1> */}
          <Termlife />
      <br/>
      <br/>
      <div>
            <MaxLifeCheckout />
      </div>
      
     
     
    </div>
  );
}

export default App;
