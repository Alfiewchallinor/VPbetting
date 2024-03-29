import React, { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import LogotopleftWhite from "../master/logotopleft.js/LogotopleftWhite";
import $ from "jquery";
import firebase from "firebase";
import { auth } from "../../firebase";

export default function MyAccount() {
  const emailRef = useRef();
  const usernameRef = useRef();
  const { updateEmail } = useAuth();
  const history = useHistory();
  const [error, setError] = useState("");

  

  const wouldYouLikeToDelete = () => {
    $("#areyouSureContainer").css("display", "block");
  };
  const doNotDeleteAccount = () => {
    $("#areyouSureContainer").css("display", "none");
  };
  function handleLogout(e) {
    const auth = firebase.auth();
    e.preventDefault();
    auth.signOut().then(function () {
      history.push("/");
    });
  }

  const showIdFunction = () => {
    $("#hiddentextclicker, #hiddentext").css("display", "none");
    $(".makeAbsolute2, #otherhiddentextclicker").css("display", "block");
  };
  const hideIdFunction = () => {
    $("#hiddentextclicker, #hiddentext").css("display", "block");
    $(".makeAbsolute2, #otherhiddentextclicker").css("display", "none");
  };

  const iHaveDeletedAccount = () => {
    const user = firebase.auth().currentUser;

    user
      .delete()
      .then(() => {
        history.push("/");
      })
  };

  const updateinfo = () => {
    $("#updateinfo").css("display", "block");
    $(
      "#updateprofileBtn, #defaultLogoicon, #circle, #file.changepicturebutton, #currentuserPhone, #currentUsersEmail, #toHideUserId, #toHideUsersRealid, #hiddentextclicker, #otherhiddentextclicker, #hiddentext, #defaultLogo"
    ).css("display", "none");
  };

  const cancelUpdatesFunction = () => {
    window.location.reload();
  };
  function resetpasswordEmail () {

    firebase.auth().sendPasswordResetEmail(currentUser.email)
    .then(()=> {
      
    }).catch((error)=> {
      var errorCode = error.code;
    var errorMessage = error.message;
    
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (emailRef.current.value.length > 1) {
      const promises = [];
      setError("");
      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value));
      }

      Promise.all(promises)
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          setError("Failed to update account info");
        });
    }
    if (usernameRef.current.value.length > 1) {
      firebase
        .auth()
        .currentUser.updateProfile({
          displayName: document.getElementById("usernameInput").value,
        })
        .then(function (value) {
          window.location.reload();
        });
    }
  }
  const { currentUser } = useAuth();
  return (
    <div>
      <LogotopleftWhite />
      <div className="completeprofilecontainer">
        <div id="formcontainer">
          <div className="profileContainer">
            <section id="myaccountwrapper">
              <div id="bottomTopSection">
                <ol>
                  <li>
                    {" "}
                    <h3 className="titleca profilePositionOne">EMAIL</h3>
                  </li>
                  <li>
                    {" "}
                    <h3 className="titleca profilePositionOne">USERNAME</h3>
                  </li>
                  <li>
                    {" "}
                    <h3
                      className="titleca profilePositionOne"
                      id="toHideUserId"
                    >
                      USER ID
                    </h3>
                  </li>
                </ol>
                <ol>
                  <li>
                    {" "}
                    <h3
                      className="titleca profilePositionTwo"
                      id="currentUsersEmail"
                    >
                      {currentUser.email}
                    </h3>
                  </li>
                  <li>
                    {" "}
                    <h3
                      className="titleca profilePositionTwo"
                      id="currentuserPhone"
                    >
                      {currentUser.displayName}
                    </h3>
                  </li>
                  <li>
                    {" "}
                    <h3
                      className="titleca profilePositionTwo makeAbsolute2"
                      id="toHideUsersRealid"
                      style={{ display: "none" }}
                    >
                      {currentUser.uid}
                    </h3>
                  </li>
                </ol>
                <p className="hiddentext" id="hiddentext">
                  *********{" "}
                </p>
                <p
                  className="hiddentext"
                  id="hiddentextclicker"
                  onClick={showIdFunction}
                >
                  SHOW{" "}
                </p>
                <p
                  className="hiddentext"
                  id="otherhiddentextclicker"
                  onClick={hideIdFunction}
                  style={{ display: "none" }}
                >
                  HIDE{" "}
                </p>
                <button id="updateprofileBtn" onClick={updateinfo}>
                  UPDATE PROFILE
                </button>
              </div>
            </section>
            <div id="lineDividerMyAccount"></div>
            <section id="sectionbelow" className="sectionbelow">
              <p className="changepassword">Password</p>
              <button id="updatepasswordBtn"
               onClick={resetpasswordEmail}
              >RESET PASSWORD</button>
              <p className="passwordInstruction">
                Upon resetting your Password you will recieve an email which
                will have further instructions given.
              </p>
              <p
                className="passwordInstructionForMobile"
                style={{ display: "none" }}
              >
                Upon resetting your Password you will recieve an email <br />{" "}
                which will have further instructions given.
              </p>
            </section>
            <button className="deleteaccountBtn" onClick={wouldYouLikeToDelete}>
              DELETE ACCOUNT
            </button>
            <button className="logoutaccountBtn" onClick={handleLogout}>
              LOGOUT
            </button>
            <div id="makescroll"></div>
            <div id="areyouSureContainer" style={{ display: "none" }}>
              <p className="textsure">
                DELETE MY ACCOUNT
                <br />
              </p>
              <p className="deleteaccountextraInfo">
               You must have recently re-logged into your account. All your account infomation, progress and other infomation will
                be <span>permanently</span> deleted.(You cannot reverse this
                process).{" "}
              </p>
              <button className="confirmDelete" onClick={iHaveDeletedAccount}>
                YES, DELETE ACCOUNT
              </button>
              <button className="confirmDont" onClick={doNotDeleteAccount}>
                DON'T DELETE ACCOUNT
              </button>
            </div>
            <div id="updateinfo" style={{ display: "none" }}>
              <form onSubmit={handleSubmit}>
                <input
                  className="inputUpdate"
                  ref={emailRef}
                  placeholder={currentUser.email}
                />
                <input
                  className="inputUpdate phoneUpdated"
                  type="name"
                  ref={usernameRef}
                  placeholder="Update your username"
                  id="usernameInput"
                />
                <button type="submit" className="confirmUpdates">
                  CONFIRM UPDATES
                </button>
              </form>
              <button
                className="confirmUpdates cancelUpdates"
                onClick={cancelUpdatesFunction}
              >
                CANCEL UPDATES
              </button>
              <p className="importantMessageForRecentlySignIn">
                IMPORTANT: YOU MUST HAVE RECENTLY <u>RE-SIGNED</u> INTO YOUR
                ACCOUNT OTHERWISE AN ERROR WILL OCCOUR WHEN CONFIRMING YOUR
                CHANGES (we will fix this soon).
              </p>
            </div>
            {error && <div className="errorMessageOnUpdate">{error}</div>}
          </div>
        </div>
      </div>
      <div id="othercontainer"></div>

      <p></p>
    </div>
  );
}
