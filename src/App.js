
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import  Termlife from "./pages/LifeInsurance.jsx";
import MaxLifeCheckout from './pages/MaxLifeCheckout';
import MaxLifeCheckout_upgrade from './pages/MaxLifeCheckout_upgrade';
import MaxLifeCheckout_AddOnRider from './pages/MaxLifeCheckout_AddOnRider';
// import CarouselContainer from './components/Carousel/CarouselContainer';
import {Routes, Route} from "react-router-dom"

 


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path={"/"} element={<Termlife/>}></Route>
        <Route  path={"/Checkout"} element={<MaxLifeCheckout/>}></Route>
        <Route  path={"/Checkout/upgradePlan"} element={<MaxLifeCheckout_upgrade/>}></Route>
        <Route  path={"/Checkout/upgradePlan/AddOnRider"} element={<MaxLifeCheckout_AddOnRider/>}></Route>
      </Routes>
      
     
     
    </div>
  );
}

export default App;
