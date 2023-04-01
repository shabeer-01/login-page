import React, { useState } from "react";
import "./login_page.css";
import Logo from '../images/netflix_logo.png';

function NetflixLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState({
    email: '',
    password: ''
  });

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/; // for 10 digit phone number
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (email == '') {
      setError(prevState => ({ ...prevState, email: 'Please Enter Email or Phone Number' }));
      hasError = true;
    } else if (!emailRegex.test(email) && !phoneRegex.test(email)) {
      setError((prevState) => ({
        ...prevState,
        email: "Please enter a valid email address or phone number",
      }));
      hasError = true;
    } else {
      setError((prevState) => ({ ...prevState, email: "" }));
    }
    
    if (password == '') {
      setError(prevState => ({ ...prevState, password: 'Please enter your password' }));
      hasError = true;
    }else if(password.length < 8){
      setError(prevState => ({ ...prevState, password: 'password must have atleast 8 character' }));
      hasError = true;

    }else if(!passwordRegex.test(password)){
      setError(prevState => ({ ...prevState, password: 'password must have numbers one special character upper case and a lower case' }));
      hasError = true;
    } else {
      setError(prevState => ({ ...prevState, password: ''}));
    }

    if(!hasError){window.swal({
        title: "Login Successfully!",
        // text: "This is a SweetAlert dialog.",
        icon: "success",
        button: "Done!",
      });
    }
  };
  
  return (
    <div>
      <nav className="logo">
        <a href="#">
          <img src={Logo} width="200px" alt="Netflix logo" />
        </a>
      </nav>
      <form onSubmit={handleSubmit}>
        <div className="header">
          <h1>Sign In</h1>
        </div>
        <div className="input">
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            className="form-control"
            placeholder="Email or phone number"
            aria-describedby="helpId"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        {error.email ? <p className="error">{error.email}</p> : null}

        <div className="input">
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {error.password ? <p className="error"> {error.password}</p> : null}

        <div className="signin">
          <button type="submit">Sign In</button>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              name=""
              id=""
              value="checkedValue"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <a href="">Need help?</a>
        </div>
        <div className="new">
          <p>
            New to Netflix? <a href="">Sign up now</a>
          </p>
        </div>
        <div className="footer">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
            <a href="">Learn more</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default NetflixLoginPage;
