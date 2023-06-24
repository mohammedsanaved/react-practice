import './App.css';
import { useState } from 'react';

export default function App() {
  const [qoute, setQoute] = useState();
  async function getQoute() {
    const res = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '72b538699fmshe460fa2dc279765p1acdd9jsn98b77f788ec8',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      },
    });
    const data = await res.json();
    setQoute(data.content);
  }
  return (
    <div className='App'>
      <div className='container'>
        <h1>"{qoute}"</h1>
      </div>
      <button onClick={getQoute}>Get Some New Qoutes</button>
    </div>
  );
}
