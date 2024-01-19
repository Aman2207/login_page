import './App.css';
import { useState } from 'react';
import Login from './Login.js';
import Signup from './Signup.js';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
 const [data,setData]= useState("Login")
 function setAttribute(){
  if(data=="Login")
  return <Login />
  else
  return <Signup />
 }
  return (
    <div className="Body">
      <div className="Text">
        <div className="Welcome">Welcome to
          <button id={data=="Login"?"lgn2":"lgn"} onClick={()=>setData("Login")}>Login</button>
          <button id={data=="Signup"?"sgn2":"sgn"} onClick={()=>setData("Signup")}>Sign-Up</button>
        </div><br />
        <div className="React">React UI</div>
      </div>

      <div className="Container">
      {setAttribute()}
      </div>


    </div>


  );
}

export default App;
