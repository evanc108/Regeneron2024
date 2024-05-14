import './App.css';
import React, { useState } from 'react';
import Feedback from './pages/Feedback';


function App() {
  return (
    <div className="App">
      <div style={{backgroundColor: "white", width: "100%", }}>
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
