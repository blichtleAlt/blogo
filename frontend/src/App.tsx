import React from 'react';
import './App.css';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [getMessage, setGetMessage] =  useState<any>();

  useEffect(()=>{
    console.log("trying")
    axios.get('http://127.0.0.1:8000/posts/').then((response: React.SetStateAction<{}>) => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch((error: any) => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Blogo</p>
        <div>{(getMessage) != null && (getMessage.status) === 200 ? 
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}</div>
      </header>
      <button><a href="/no" className="button">Go to Blog Home</a>
</button> 
    </div>
  );
}

export default App;

