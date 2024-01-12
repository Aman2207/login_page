import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import back from './image/background.jpg';
import Login from './Login';
import {Routes,Route,useNavigate} from 'react-router-dom';

function App() {
  const [data,setData]=useState("Login")
  const Changer=()=>{

  }
  return (
    <div className="Body">
      <div className="Text">
        <div className="Welcome">Welcome to</div><br />
        <div className="React">React UI</div>
      </div>
      <div className="Container">
        <div className="Login">
          <div id="log">{data}</div>
          <input placeholder="Email ID" type="text" id="mail" />
          <input placeholder="Password" type="password" id="pass" />
          <div className="Partition">
            <div><input type="checkbox" />Remember me</div>
            <div className="left">Forgot Password?</div>
          </div>
          <button id="btn">Login</button>
          <div id="nxt">
            <div id="signup">Don't have an account? </div>
            <a href="" id="register" onClick={Changer}
            >Register</a>
          </div>
        </div>
        <div className="Signup">
          <div></div>
        </div>
      </div>

    </div>


  );
}

export default App;
