import './App.css';
import { useState, useEffect } from 'react';
import Login from './Login.js';
import Signup from './Signup.js';
import ChatBot from './ChatBot.js';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [data, setData] = useState("Login");
  const [doc, setDoc] = useState("");
  const [message, setMessage] = useState('');

  useEffect(() => {
    const showtimer = setTimeout(() => {
      setMessage("Hi, I'm your Virtual Assistant. Reach me for any help." )
    }, 4500);

    const closetimer = setTimeout(() => {
      setMessage("" )
    }, 11000);

    return () => {
      clearTimeout(showtimer);
      clearTimeout(closetimer);
    }
  }, []);

  function setAttribute() {
    if (data == "Login")
      return <Login />
    else
      return <Signup />
  }

  function setPage() {
    if (doc == "Page")
      return <ChatBot />
  }

  return (
    <div className="Body">
      <div className="Text">
        <div className="Welcome">Welcome to
          <button id={data == "Login" ? "lgn" : "lgn2"} onClick={() => setData("Login")}>Login</button>
          <button id={data == "Signup" ? "sgn" : "sgn2"} onClick={() => setData("Signup")}>Sign-Up</button>
        </div><br />
        <div className="React">React UI</div>
      </div>

      <div className="Container">
        {setAttribute()}
      </div>

      <div class="bot">
        <div id='botpic' onClick={() => setDoc("Page")}>
          <div id='eye1'></div>
        </div>
        <div className='msgbox'>
          <div id='botwrite'>{message}</div>
          <div id="triangle-left"></div>
        </div>
        <div className='chat-container'>
        {setPage()}
        </div>

      </div>

    </div>


  );
}

export default App;
