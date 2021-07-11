import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import firebase from "firebase"
import { auth } from "../../firebase";

var firestore = firebase.firestore();

function SportsHeader() {
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $(".pointsNumberDisplay, .minigamesNumberDisplay").css("display", "block");
      $(".coiniconForMinigames").css("display", "block");
      const docRef = firestore.doc(
        "users/" + auth.currentUser.uid + "pointsNumber"
      );
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            document.getElementById("minigamesNumberGet").innerHTML = JSON.stringify(
              doc.data().pointsNumber
            );
            
          } else {
          }
        })
    } else {
      $(".pointsNumberDisplay, .minigamesNumberDisplay").css("display", "none");
      $(".coiniconForMinigames").css("display", "none");
    }
  });
  

 
    return (
      <div className="sportsPagesNoMediaQuery">
        <style>{"body { background-color: #18242c; }"}</style>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
        <div  id="sectionreal">
          <img id="fulluiForSports" src="../images/newsb.jpg" alt="background" />
          <div id="sidebarl" className="sidebarl">
            <section className="topsecg">
              <div className="toplogos">
                <img
                  className="logobar"
                  src="../images/Logodesign2white.png"
                  alt="logo"
                />
                <div className="seperatork" />
                <div className="seperatork" />
                <Link to="/">
                  {" "}
                  <div className="middleer">
                    <button type="button" className="homeredbtn">
                      <ion-icon name="home-outline" />
                    </button>
                  </div>
                </Link>
                <div
                  className="toprcloser"
                  id="toprcloser"
                >
                  {" "}
                  <button type="button" className="shortenbtn homeredbtn">
                    <ion-icon name="chevron-back" />
                  </button>
                </div>
              </div>
              <Link to="/myaccount">
                {" "}
                <div id="youra">
                  <p className=" reposya">YOUR ACCOUNT</p>
                  <div className="accountyou">
                    <ion-icon name="person-outline" />
                  </div>
                </div>
              </Link>
            </section>
            <section id="sectionwithscrol" className="sectionwithscrol">
              <div id="minigs">
                <div className="accountyou controller">
                  <ion-icon name="game-controller-outline" />
                </div>
                <p id="minigtitle">MINIGAMES</p>
                <li>
                  <Link to="/circleshooter">
                    <div className="contfors">
                      <p className="miniilinks">CIRCLE SHOOTER</p>
                    </div>{" "}
                  </Link>
                  <Link to="/snake">
                    <div className="contforssecond">
                      <p className="miniilinks">SNAKE</p>
                    </div>{" "}
                  </Link>
                  <Link to="/tictactoe">
                    <div className="contforssecond">
                      <p className="miniilinks">TIC-TAC-TOE</p>
                    </div>
                  </Link>
                  <Link to="/tictactoe4x4">
                    <div className="contforssecond">
                      <p className="miniilinks">TIC-TAC-TOE 4X4</p>
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="contforssecond">
                      <p className="miniilinks">TYPE RACER</p>
                    </div>
                  </Link>
                </li>
              </div>
              <div id="esportsi">
                <div className="accountyou controller">
                  <ion-icon name="trophy-outline" />
                </div>
                <p id="minigtitle">ESPORTS</p>
                <li>
                  <Link to="/circleshooter">
                    <div className="contfors">
                      <p className="miniilinks">FORTNITE EU</p>
                    </div>{" "}
                  </Link>
                  <Link to="/">
                    <div className="contforssecond">
                      <p className="miniilinks">FORTNITE NA</p>
                    </div>{" "}
                  </Link>
                  <Link to="/">
                    <div className="contforssecond">
                      <p className="miniilinks">VALORANT</p>
                    </div>{" "}
                  </Link>
                  <Link to="/">
                    <div className="contforssecond">
                      <p className="miniilinks">LEAGUE OF LEGENDS</p>
                    </div>
                  </Link>
                </li>
              </div>
              <div id="sportsi">
                <div className="accountyou controller">
                  <ion-icon
                    name="football-outline"
                    className="accountyou controller"
                  />
                </div>
                <p id="minigtitle">SPORTS</p>
                <li>
                  <Link to="/circleshooter">
                    <div className="contfors">
                      <p className="miniilinks">CRICKET</p>
                    </div>{" "}
                  </Link>
                  <Link to="/">
                    <div className="contforssecond">
                      <p className="miniilinks">FOOTBALL</p>
                    </div>{" "}
                  </Link>
                  <Link to="/">
                    <div className="contforssecond">
                      <p className="miniilinks">FORMULA 1</p>
                    </div>{" "}
                  </Link>
                  <Link to="/">
                    <div className="contforssecond">
                      <p className="miniilinks">RUGBY</p>
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="contforssecond">
                      <p className="miniilinks">TENNIS</p>
                    </div>
                  </Link>
                </li>
              </div>
            </section>
            <div className="lineuu" />
            <div className="lineuul" />
            <div className="lineuub" />
            <div className="lineuua" />
            <section id="bottomsec">
              <div className="seperatorka" />
              <div className="seperatorka" />
              <Link to="https://www.twitter.com">
                {" "}
                <div id="leftbox">
                  <div className="bottombtni">
                    <ion-icon name="logo-twitter" />
                  </div>{" "}
                </div>
              </Link>
              <Link to="https://www.youtube.com">
                <div id="middlebox">
                  <div className="bottombtni">
                    <ion-icon name="logo-youtube" />
                  </div>
                </div>{" "}
              </Link>
              <Link to="https://www.instagram.com">
                {" "}
                <div id="rightbox">
                  <div className="bottombtni">
                    <ion-icon name="logo-instagram" />
                  </div>
                </div>
              </Link>
              <Link to="/">
                {" "}
                <div className="abovebox ">
                  <p className="feedbackj">FEEDBACK</p>
                  <div className="accountyou topperfixer">
                    {" "}
                    <ion-icon name="chatbubbles-outline" />
                  </div>{" "}
                </div>
              </Link>
            </section>
          </div>
          <Link to="/">
            {" "}
            <div
              className="accountyouhiden"
              id="accountyouhiden"
              style={{ display: "none" }}
            >
              <ion-icon name="person-outline" />
            </div>
          </Link>
          <Link to="/">
            {" "}
            <div
              className="feedbackhiden"
              id="feedbackhiden"
              style={{ display: "none" }}
            >
              {" "}
              <ion-icon name="chatbubbles-outline" />
            </div>
          </Link>
          <div
            className="bringbackbtn"
            id="bringbackbtn"
            style={{ display: "none" }}
          >
            <ion-icon
              name="chevron-forward-outline"
            />
          </div>
        </div>
        <div className="minigamesNumberDisplay" id="minigamesNumberGet"></div>
        <img src="../images/coin.png" className="coiniconForMinigames" alt="coinsicon"/>
      </div>
    );
  }

export default SportsHeader;
