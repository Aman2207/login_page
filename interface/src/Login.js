import './App.css';

function Login() {

    return (
        <div className="Login">
            <div id="log">Login</div>
            <input placeholder="Email ID" type="text" id="mail" />
            <input placeholder="Password" type="password" id="pass" />
            <button id="btn">Login</button>
            <div id="nxt">
                <div id="signup">Don't have an account? </div>
                <a href="" id="register">Register</a>
            </div>
        </div>
    );
}

export default Login;
