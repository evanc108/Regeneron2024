import './App.css';
import React, { useState } from 'react';
import Feedback from './pages/Feedback';

function App() {
  return (
    <div className="App">
      <nav style={{ backgroundColor: "white", height: "50px" }}>
        {/* Add your navigation bar content here */}
      </nav>
      <h1 style={{ marginBottom: "-20px", marginLeft: "30px", fontSize: "50px", textAlign: "left" }}>
        <span style={{ color: "black" }}>Proto</span>
        <span style={{ color: "red", textDecoration: "underline" }}>Score</span>
      </h1>
      {/* Rest of your code */}
      <Feedback></Feedback>
    </div>
  );
}

export default App;
