import { Alert } from "bootstrap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function CreateAccount() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const tosConfirmRef = useRef();
  const { createAccount } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Failed to create an account");
    }

    try {
      setError("");
      setLoading(true);
      await createAccount(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Password is not secure enough");
    }
    setLoading(false);
  }
  return (
    <div className="bodydiv">
      <div id="formcontainer">
        <div id="boxhh">
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
              required
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
            {error && <div className="errormessage">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
