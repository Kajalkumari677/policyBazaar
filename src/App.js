
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import  Termlife from "./pages/LifeInsurance.jsx";
import MaxLifeCheckout from './pages/MaxLifeCheckout';
// import CarouselContainer from './components/Carousel/CarouselContainer';
import {Routes, Route} from "react-router-dom"

 


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path={"/"} element={<Termlife/>}></Route>
        <Route  path={"/Checkout"} element={<MaxLifeCheckout/>}></Route>
      </Routes>
      
     
     
    </div>
  );
}

export default App;
