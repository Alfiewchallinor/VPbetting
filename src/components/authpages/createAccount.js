import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logotopleft from "../master/logotopleft.js/Logotopleft";
import $ from "jquery";
import firebase from "firebase";
import { auth } from "../../firebase";
var firestore = firebase.firestore();

export default function CreateAccount() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const tosConfirmRef = useRef();
  const { createAccount } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const tosButton = () => {
    const tosconfirmButton = document.querySelector(".tosverify");
    if (tosconfirmButton.checked === true) {
      $(".tosverify").css("background", "url('../images/checkbox.jpg')");
      $(".tosverify").css("background-size", "100%");
    } else {
      $(".tosverify").css("background", "transparent");
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const tosconfirmButton = document.querySelector(".tosverify");

    if (
      emailRef.current.value.length < 1 &&
      passwordRef.current.value < 1 &&
      passwordConfirmRef.current.value < 1 &&
      (tosconfirmButton.checked !== true) === true
    ) {
      return setError("Looks like you forgot to fill out the form");
    }
    if (emailRef.current.value.length < 1) {
      return setError("Please submit a valid email address");
    }
    if (emailRef.current.value.includes("@") !== true) {
      return setError("Please submit a valid email address");
    }
    if (
      passwordRef.current.value.length < 1 ||
      passwordConfirmRef.current.value.length < 1
    ) {
      return setError("Please submit a password");
    }
    if (
      passwordRef.current.value.length < 8 ||
      passwordConfirmRef.current.value.length < 8
    ) {
      return setError("Password is not secure enough");
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords don't match");
    }

    if (tosconfirmButton.checked !== true) {
      return setError("Please agree to the TOS & Privacy Policy");
    }

    try {
      setError("");
      setLoading(true);
      await createAccount(emailRef.current.value, passwordRef.current.value);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const docRef = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber")
          docRef.set({
            pointsNumber: 25
          }).then(function () {
            history.push("/usernameSelect")
          }).catch(function(error){
            console.log("error! end of the world incomming:", error)
          })
        } 
      })
        
    } catch {
      setError("Email has already been taken");
    }
    
    setLoading(false);
  }
  
  return (
    <div className="bodydiv" onContextMenu={(e) => e.preventDefault()}>
      <Logotopleft />
      <div id="formcontainer">
        <div className="formcont">
          <h2 className="titleca">Create Account</h2>

          <form onSubmit={handleSubmit}>
            <div id="email">
              <label id="thelabels">Email</label>
              <input className="theinput" ref={emailRef} />
            </div>
            <div id="password">
              <label id="thelabels">Password</label>
              <input
                className="theinput"
                type="password"
                ref={passwordRef}
                id="passwordOne"
              />
            </div>
            <div id="password-confirm">
              <label id="thelabels">Confirm Password</label>
              <input
                className="theinput"
                type="password"
                ref={passwordConfirmRef}
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
              <br /> and agree to the{" "}
              <em>
                <Link to="/termsOfService" style={{ color: "#3B82F6" }}>
                  {" "}
                  Terms of Use
                </Link>{" "}
              </em>
              and{" "}
              <em>
                <Link to="/Privacypolicy" style={{ color: "#3B82F6" }}>
                  {" "}
                  Privacy Policy<span style={{ color: "black" }}>.</span>{" "}
                </Link>
              </em>
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
            {error && <div className="errormessagePasswordOne"></div>}
            {error && <div className="errormessagePasswordRepeat"></div>}
            {error && <div className="termsUnverified"></div>}
          </div>
        </div>
      </div>
    </div>
  );
}
