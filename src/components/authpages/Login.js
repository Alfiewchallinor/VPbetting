import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logotopleft from "../master/logotopleft.js/Logotopleft";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { createAccount } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  
    async function handleSubmit(e) {
      e.preventDefault();
          try {
        setError("");
        setLoading(true);
        await createAccount(emailRef.current.value, passwordRef.current.value);
      } catch {
        setError("Failed to create an account");
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
              {error && <div className="errormessage">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    );
}


