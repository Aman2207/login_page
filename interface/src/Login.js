import './App.css';
import back from './image/background.jpg';

function Login() {

    return (
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
                    <a href="" id="register">Register</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
