import './App.css';
import { handleExtraction } from './openAIServices';
import React, { useState } from 'react';

function App() {
  const [burden, setBurden] = useState({});
  const [inputValue, setInputValue] = useState('');

  const sendRequest = async () => {
    const response = await handleExtraction(inputValue); // Pass inputValue as the protocol
    setBurden(response);
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="App">
      <input value={inputValue} onChange={handleChange}></input>
      <button onClick={sendRequest}>Click me</button>
      <div>
        <p>Physical Burden: {burden.physical}</p>
        <p>Logistical Burden: {burden.logistical}</p>
        <p>Financial: {burden.financial}</p>
        <p>Psychological Burden: {burden.psychological}</p>
      </div>
    </div>
  );
}

export default App;
