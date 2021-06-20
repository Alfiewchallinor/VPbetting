import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logotopleft from "../master/logotopleft.js/Logotopleft";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory()
  
    async function handleSubmit(e) {
      e.preventDefault();
      if(emailRef.current.value.length < 1 && passwordRef.current.value.length < 1) {
        return setError("Looks like you forgot to fill out the form")
      }

      if(emailRef.current.value.includes("@") !== true) {
        return setError("Please submit a valid email address")
      }
      if(passwordRef.current.value.length < 8) {
        return setError("Please submit a valid password")
      }
          try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        history.push("/")
      } catch {
        setError("This account does not exist");
      }
      setLoading(false);
    }
    return (
      <div className="bodydiv" onContextMenu={(e)=> e.preventDefault()}>
        
        <Logotopleft />
        <div id="formcontainer">
          <div className="formcont formContainerLogin">
            <h2 className="titleca">Login</h2>
  
            <form onSubmit={handleSubmit}>
              <div id="email">
                <label id="thelabels">Email</label>
                <input
                  className="theinput"
                  
                  ref={emailRef}
                  
                />
              </div>
              <div id="password">
                <label id="thelabels">Password</label>
                <input
                  className="theinput"
                  type="password"
                  ref={passwordRef}
                />
              </div>
              
              <button disabled={loading} className="confirmbutton loginButton" type="submit">
                Login
              </button>
            </form>
  
            <div className="alreadyaccount dontHaveAccountText">
              Need an account?
              <Link to="/createAccount" style={{ color: "#2563EB" }}>
                {" "}
                Create Account{" "}
              </Link>
              {error && <div className="errormessageUniversal loginUniversal">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    );
}


