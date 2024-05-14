import './App.css';
import React, { useState } from 'react';
import Feedback from './pages/Feedback';

function App() {
  return (
    <div className="App">
      <h1 style={{marginBottom: "-30px"}}>ProtoScore</h1>
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
