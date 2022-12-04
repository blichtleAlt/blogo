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
        <p>Blogo</p>
        <div>{(getMessage) != null && (getMessage.status) === 200 ? 
          <div>       
            {(getMessage.data.posts != null && getMessage.data.posts.length !== 0) ?

             getMessage.data.posts.map(function(post: any, idx: React.Key | null | undefined){return (<li key={idx}>{post.text}</li>) }) : <h3>No Posts</h3>}
          </div>
          :
          <h3>LOADING</h3>}</div>
      </header>
    </div>
  );
}

export default App;

