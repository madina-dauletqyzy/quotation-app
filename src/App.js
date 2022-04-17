import React, { useEffect, useState } from 'react';
import './App.css';
import { BsTwitter } from 'react-icons/bs';
import { ImQuotesLeft } from 'react-icons/im' 
function App() {
  const [quote, setQuote] = useState({})
  const colors = [ "#D18CE0","#92BA92","#BB6464","#7897AB","#F55353","#827397" ]
  useEffect(()=>{
    getQuote();
  }, [])

  const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  
  const getQuote = async () => {
    const api = await fetch(url);
    const response = await api.json(); 
    let randomNumber = Math.floor(Math.random() * response.quotes.length);
    setQuote(response.quotes[randomNumber]);
    document.documentElement.style.setProperty('--main-color', colors[Math.floor(Math.random() * colors.length)])
  }

  return (
    <div className="container">
    <div className="quote-box" id = "quote-box">
      <ImQuotesLeft className="quoteMark"/>
      <p id="text"> {quote.quote}</p>
      <p id="author">©{quote.author}</p>
      <div className="btnsWrapper">
        <a id="tweet-quote" 
          className="twitter-share-button" 
          href={`https://twitter.com/intent/tweet?text=${quote.quote}`}
          target="_blank"
          rel="noreferrer">
          <BsTwitter /></a>
        <button className="quoteBtn" id="new-quote" onClick={getQuote}>New quote</button>
      </div>
  </div>
  </div>
  );
}

export default App;
