import './App.css';

function Signup() {

    return (
        <div className="Signup">
          <div id="sign">Sign Up</div>
          <div className="Name">
            <input placeholder="First Name" type="text" id="Fname" />
            <input placeholder="Last Name" type="text" id="Lname" />
          </div>
          <div className="Sline2">
            <select id="Gender" placeholder="Gender">
              <option>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input placeholder="Date of Birth" type="date" id="dob" />
          </div>
          <input placeholder="Email ID" type="text" id="email" />
          <input placeholder="Password" type="password" id="pass1" />
          <input placeholder="Confirm Password" type="password" id="pass2" />
          <button id="sbtn">Sign Up</button>
          <div id="nxt">
            <div id="signup">Already have an account? </div>
            <a href="" id="signin">Login here</a>
          </div>
        </div>
        
    );
}

export default Signup;
