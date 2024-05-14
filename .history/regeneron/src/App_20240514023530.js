import './App.css';
import React, { useState } from 'react';
import Feedback from './pages/Feedback';


function App() {
  return (
    <div className="App">
      <div style={{backgroundColor: "white", width: "100%", padding: "0.2px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
        <h1 style={{ marginLeft: "30px", fontSize: "35px", textAlign: "left"}}>
          <span style={{color: "black"}}>Proto</span>
          <span style={{color: "#36d7b7", textDecoration: "underline"}}>Score</span>
        </h1>
        <button style={{float: "right", marginRight: "30px", marginTop: "-50px", backgroundColor:"#36d7b7", border:"none", color:"white", padding:"10px 20px 10px 20px"}}>Login</button>
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
