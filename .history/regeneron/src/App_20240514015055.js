import './App.css';
import React, { useState } from 'react';
import Feedback from './pages/Feedback';


function App() {
  return (
    <div className="App" style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}>
      <div style={{backgroundColor: "white", width: "120%", padding: "0.5px", marginTop:"-10px", marginLeft:"-10px", border:"1px solid gray"}}>
        <h1 style={{ marginLeft: "30px", fontSize: "40px", textAlign: "left"}}>
          <span style={{color: "black"}}>Proto</span>
          <span style={{color: "red", textDecoration: "underline"}}>Score</span>
        </h1>
      </div>
      
      
      {/* <input value={inputValue} onChange={handleChange}></input>
      <button onClick={sendRequest}>Click me</button>
      <div>
        <p>Physical Burden: {burden.physical}</p>
        <p>Logistical Burden: {burden.logistical}</p>
        <p>Financial: {burden.financial}</p>
        <p>Psychological Burden: {burden.psychological}</p>
      </div> */}
      <Feedback></Feedback>
    </div>
  );
}

export default App;
