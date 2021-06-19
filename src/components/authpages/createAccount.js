
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logotopleft from "../master/logotopleft.js/Logotopleft";
import $ from "jquery"


export default function CreateAccount() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const tosConfirmRef = useRef();
  const { createAccount } = useAuth();
  const [error, setError] = useState("");
  const [passwordMatch, setErrorpwd] = useState("");
  const [loading, setLoading] = useState(false);
  
  const tosButton = () => {
    
    const tosconfirmButton = document.querySelector(".tosverify") 
    if(tosconfirmButton.checked ===true) {
      $(".tosverify").css("background", "url('../images/checkbox.jpg')");
      $(".tosverify").css("background-size", "100%" )
    } else {
      $(".tosverify").css("background", "transparent");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords don't match");
    }
    if(passwordRef.current.value.length < 8 || passwordConfirmRef.current.value.length < 8) {
      return setError("Password is not secure enough")
    }
    const tosconfirmButton = document.querySelector(".tosverify")
    if(tosconfirmButton.checked !== true) {
      return setError("Please agree to the TOS & Privacy Policy")
    }
    

    try {
      setError("");
      setLoading(true);
      await createAccount(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Email has already been taken");
    }
    setLoading(false);
  }
  return (
    <div className="bodydiv" onContextMenu={(e)=> e.preventDefault()}>
      
      <Logotopleft />
      <div id="formcontainer">
        <div className="formcont">
          <h2 className="titleca">Create Account</h2>

          <form onSubmit={handleSubmit}>
            <div id="email">
              <label id="thelabels">Email</label>
              <input
                className="theinput"
                type="email"
                ref={emailRef}
                required
              />
            </div>
            <div id="password">
              <label id="thelabels">Password</label>
              <input
                className="theinput"
                type="password"
                ref={passwordRef}
                required
                id="passwordOne"
              />
            </div>
            <div id="password-confirm">
              <label id="thelabels">Confirm Password</label>
              <input
                className="theinput"
                type="password"
                ref={passwordConfirmRef}
                required
              />
            </div>
            <input
              className="tosverify"
              type="checkbox"
              ref={tosConfirmRef}
              onClick={tosButton}
            /> 
            <p className="tosinstruction">
              By creating a VPbetting account, I understand
              <br /> and agree to the <em>
              <Link to="/termsOfService" style={{ color: "#3B82F6" }}>
                {" "}
                Terms of Use
              </Link>{" "}</em>
              and{" "}<em>
              <Link to="/termsOfService" style={{ color: "#3B82F6" }}>
                {" "}
                Privacy Policy<span style={{color: "black"}}>.</span>{" "}
              </Link></em>
            </p>
            <button disabled={loading} className="confirmbutton" type="submit">
              Create Account
            </button>
          </form>

          <div className="alreadyaccount">
            Already have an account?
            <Link to="/login" style={{ color: "#2563EB" }}>
              {" "}
              Login{" "}
            </Link>
            {error && <div className="errormessageUniversal">{error}</div>}
            {error && <div className="errormessageEmail"></div>}
            {error &&<div className="errormessagePasswordOne"></div>}
            {error &&<div className="errormessagePasswordRepeat"></div>}
            {error &&<div className="termsUnverified"></div>}
            
          </div>
        </div>
      </div>
    </div>
  );
}
