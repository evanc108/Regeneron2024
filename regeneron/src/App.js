import './App.css';
import React, { useState } from 'react';
import Feedback from './pages/Feedback';
import Related from './pages/Related';
import related from './related.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Example1 from './pages/Example1';
import Example2 from './pages/Example2';
import Example3 from './pages/Example3';

function App() {
  return (
    <Router>
      <div className="App">
        <div style={{ backgroundColor: "white", width: "100%", padding: "0.2px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
          <h1 style={{ marginLeft: "30px", fontSize: "35px", textAlign: "left" }}>
            <span style={{ color: "black" }}>Proto</span>
            <span style={{ color: "#36d7b7", textDecoration: "underline" }}>Score</span>
          </h1>
          <button style={{ backgroundColor: "#36d7b7", border: "none", color: "white", padding: "10px 30px 10px 30px", borderRadius: "7px", fontSize: "18px", fontWeight: "bold", position: "absolute", top: "25px", right: "30px" }}>Sign In</button>
        </div>

        <Routes>
          <Route path="/" element={<Feedback></Feedback>} exact />
          <Route path="/18234709827134" element={<Example1 />} />
          <Route path="/18234709327134" element={<Example2 />} />
          <Route path="/18234789327134" element={<Example3 />} />
        </Routes>

        
      </div>
    </Router>

  );
}

export default App;
