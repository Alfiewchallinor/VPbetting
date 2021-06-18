import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class MinigamesHeader extends React.Component {
  slider = () => {
    $(".toprcloser, .middleer").animate({ left: "-182px" }, 450);
    $(
      ".lineuua, .lineuub, .accountyou, .topperfixer, .lineuu, .lineuul, .logobar,  .reposya, .feedbackj, controller"
    ).animate({ left: "-265px" }, 450);
    $(".sectionwithscrol, .sidebarl, .topsecg, #bottomsec").animate(
      { left: "-266px" },
      450
    );
    $(
      ".seperatork:nth-child(2), .seperatorka:nth-child(2), .seperatorka, .seperatork"
    ).hide();
    $("#fullui").animate({ left: "-175px" }, 450);
    $(".shortenbtn").animate({ left: "175px" }, 450);
    $("#leftbox").animate({ left: "-5px" }, 450);
    $(".homeredbtn").hide();
    $("#middlebox").animate({ left: "-182px" }, 450);
    $("#rightbox").animate({ left: "-99px" }, 450);
    $("#accountyouhiden, .bringbackbtn, .feedbackhiden").show(449);
  };
  backwardfunction = () => {
    $(".toprcloser, .middleer").animate({ left: "83px" }, 450);
    $(
      ".lineuua, .lineuub, .accountyou, .topperfixer,.lineuu, .lineuul, .logobar,  .reposya, .feedbackj, controller"
    ).animate({ left: "0px" }, 450);
    $(".sectionwithscrol, .sidebarl, .topsecg, #bottomsec").animate(
      { left: "-1px" },
      450
    );
    $(
      ".seperatork:nth-child(2), .seperatorka:nth-child(2), .seperatorka, .seperatork"
    ).show(448);
    $("#fullui").animate({ left: "0px" }, 450);
    $(".shortenbtn").animate({ left: "175px" }, 450);
    $("#leftbox").animate({ left: "0px" }, 450);
    $(".homeredbtn").show(440);
    $("#middlebox").animate({ left: "83px" }, 450);
    $("#rightbox").animate({ left: "166px" }, 450);
    $("#accountyouhiden, .bringbackbtn, .feedbackhiden").hide();
  };
  slidera = () => {
    $(".toprclosera, .middleera").animate({ left: "-182px" }, 450);
    $(
      ".lineuuaa, .lineuuba, .accountyoua, .topperfixera, .lineuuab, .lineuula, .logobara,  .reposyaa, .feedbackja, controllera"
    ).animate({ left: "-265px" }, 450);
    $(".sectionwithscrola, .sidebarla, .topsecga, #bottomseca").animate(
      { left: "-266px" },
      450
    );
    $(
      ".seperatorkab:nth-child(2), .seperatorkaa:nth-child(2), .seperatorkaa, .seperatorkab"
    ).hide();
    $("#fulluia").animate({ left: "-175px" }, 450);
    $(".shortenbtna").animate({ left: "175px" }, 450);
    $("#leftboxa").animate({ left: "-5px" }, 450);
    $(".homeredbtna").hide();
    $("#middleboxa").animate({ left: "-182px" }, 450);
    $("#rightboxa").animate({ left: "-99px" }, 450);
    $("#accountyouhidena, .bringbackbtna, .feedbackhidena").show(449);
  };
  backwardfunctiona = () => {
    $(".toprclosera, .middleera").animate({ left: "83px" }, 450);
    $(
      ".lineuuaa, .lineuuba, .accountyoua, .topperfixera,.lineuuab, .lineuula, .logobara,  .reposyaa, .feedbackja, controllera"
    ).animate({ left: "0px" }, 450);
    $(".sectionwithscrola, .sidebarla, .topsecga, #bottomseca").animate(
      { left: "-1px" },
      450
    );
    $(
      ".seperatorkab:nth-child(2), .seperatorkaa:nth-child(2), .seperatorkaa, .seperatorkab"
    ).show(448);
    $("#fulluia").animate({ left: "0px" }, 450);
    $(".shortenbtna").animate({ left: "175px" }, 450);
    $("#leftboxa").animate({ left: "0px" }, 450);
    $(".homeredbtna").show(440);
    $("#middleboxa").animate({ left: "83px" }, 450);
    $("#rightboxa").animate({ left: "166px" }, 450);
    $("#accountyouhidena, .bringbackbtna, .feedbackhidena").hide();
  };

  onminiload = () => {
    $(
      ".shortenbtna, .seperatorkab:nth-child(2), .seperatorkaa:nth-child(2), .seperatorkaa, .seperatorkab"
    ).hide();
  };

  render() {
    return (
      <div>
        <style>{"body { background-color: #18242c; }"}</style>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
        <div className="sectionscreen" id="sectionreal">
          <img id="fullui" src="../images/newsb.jpg" alt="background" />
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
                  onClick={this.slider}
                >
                  {" "}
                  <button type="button" className="shortenbtn homeredbtn">
                    <ion-icon name="chevron-back" />
                  </button>
                </div>
              </div>
              <Link to="/">
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
                  <Link to="/circleShooter">
                    <div className="contfors">
                      <p className="miniilinks">CIRCLE SHOOTER</p>
                    </div>{" "}
                  </Link>
                  <Link to="/snake">
                    <div className="contforssecond">
                      <p className="miniilinks">SNAKE</p>
                    </div>{" "}
                  </Link>
                  <Link to="/tic-tac-toe">
                    <div className="contforssecond">
                      <p className="miniilinks">TIC-TAC-TOE</p>
                    </div>
                  </Link>
                  <Link to="/tic-tac-toe-4x4">
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
                  <Link to="../minigames/circle-shooter-medium.html">
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
                  <Link to="../minigames/circle-shooter-medium.html">
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
              onClick={this.backwardfunction}
            />
          </div>
        </div>

        <div
          className="sectionhidden"
          style={{ display: "none" }}
          onLoad={this.onminiload}
        >
          <img id="fulluia" src="../images/newsb.jpg" alt="background" />
          <div id="sidebarla" className="sidebarla">
            <section className="topsecga">
              <div className="toplogosa">
                <img
                  className="logobara"
                  src="../images/Logodesign2white.png"
                  alt="logo"
                />
                <div className="seperatorkab" />
                <div className="seperatorkab" />
                <Link to="/">
                  {" "}
                  <div className="middleera">
                    <button type="button" className="homeredbtna">
                      <ion-icon name="home-outline" />
                    </button>
                  </div>
                </Link>
                <div
                  className="toprclosera"
                  id="toprclosera"
                  onClick={this.slidera}
                >
                  {" "}
                  <button type="button" className="shortenbtna homeredbtna">
                    <ion-icon name="chevron-back" />
                  </button>
                </div>
              </div>
              <Link to="/">
                {" "}
                <div id="youraa">
                  <p className=" reposyaa">YOUR ACCOUNT</p>
                  <div className="accountyoua">
                    <ion-icon name="person-outline" />
                  </div>
                </div>
              </Link>
            </section>
            <section id="sectionwithscrola" className="sectionwithscrola">
              <div id="minigs">
                <div className="accountyoua controllera">
                  <ion-icon name="game-controller-outline" />
                </div>
                <p id="minigtitle">MINIGAMES</p>
                <li>
                  <Link to="/circleShooter">
                    <div className="contforsa">
                      <p className="miniilinksa">CIRCLE SHOOTER</p>
                    </div>{" "}
                  </Link>
                  <Link to="/snake">
                    <div className="contforsseconda">
                      <p className="miniilinksa">SNAKE</p>
                    </div>{" "}
                  </Link>
                  <Link to="/tic-tac-toe">
                    <div className="contforsseconda">
                      <p className="miniilinksa">TIC-TAC-TOE</p>
                    </div>
                  </Link>
                  <Link to="/tic-tac-toe-4x4">
                    <div className="contforsseconda">
                      <p className="miniilinksa">TIC-TAC-TOE 4X4</p>
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="contforsseconda">
                      <p className="miniilinksa">TYPE RACER</p>
                    </div>
                  </Link>
                </li>
              </div>
              <div id="esportsi">
                <div className="accountyoua controllera">
                  <ion-icon name="trophy-outline" />
                </div>
                <p id="minigtitlea">ESPORTS</p>
                <li>
                  <Link to="../minigames/circle-shooter-medium.html">
                    <div className="contforsa">
                      <p className="miniilinksa">FORTNITE EU</p>
                    </div>{" "}
                  </Link>
                  <Link to="/">
                    <div className="contforsseconda">
                      <p className="miniilinksa">FORTNITE NA</p>
                    </div>{" "}
                  </Link>
                  <Link to="/">
                    <div className="contforsseconda">
                      <p className="miniilinksa">VALORANT</p>
                    </div>{" "}
                  </Link>
                  <Link to="/">
                    <div className="contforsseconda">
                      <p className="miniilinksa">LEAGUE OF LEGENDS</p>
                    </div>
                  </Link>
                </li>
              </div>
              <div id="sportsi">
                <div className="accountyoua controllera">
                  <ion-icon
                    name="football-outline"
                    className="accountyoua controllera"
                  />
                </div>
                <p id="minigtitlea">SPORTS</p>
                <li>
                  <Link to="../minigames/circle-shooter-medium.html">
                    <div className="contforsa">
                      <p className="miniilinksa">CRICKET</p>
                    </div>{" "}
                  </Link>
                  <Link to="/">
                    <div className="contforsseconda">
                      <p className="miniilinksa">FOOTBALL</p>
                    </div>{" "}
                  </Link>
                  <Link to="/">
                    <div className="contforsseconda">
                      <p className="miniilinksa">FORMULA 1</p>
                    </div>{" "}
                  </Link>
                  <Link to="/">
                    <div className="contforsseconda">
                      <p className="miniilinksa">RUGBY</p>
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="contforsseconda">
                      <p className="miniilinksa">TENNIS</p>
                    </div>
                  </Link>
                </li>
              </div>
            </section>
            <div className="lineuuab" />
            <div className="lineuula" />
            <div className="lineuuba" />
            <div className="lineuuaa" />
            <section id="bottomseca">
              <div className="seperatorkaa" />
              <div className="seperatorkaa" />
              <Link to="https://www.twitter.com">
                {" "}
                <div id="leftboxa">
                  <div className="bottombtnia">
                    <ion-icon name="logo-twitter" />
                  </div>{" "}
                </div>
              </Link>
              <Link to="https://www.youtube.com">
                <div id="middleboxa">
                  <div className="bottombtnia">
                    <ion-icon name="logo-youtube" />
                  </div>
                </div>{" "}
              </Link>
              <Link to="https://www.instagram.com">
                {" "}
                <div id="rightboxa">
                  <div className="bottombtnia">
                    <ion-icon name="logo-instagram" />
                  </div>
                </div>
              </Link>
              <Link to="/">
                {" "}
                <div className="aboveboxa ">
                  <p className="feedbackja">FEEDBACK</p>
                  <div className="accountyoua topperfixera">
                    {" "}
                    <ion-icon name="chatbubbles-outline" />
                  </div>{" "}
                </div>
              </Link>
            </section>
          </div>
          <Link to="/">
            {" "}
            <div className="accountyouhidena" id="accountyouhidena">
              <ion-icon name="person-outline" />
            </div>
          </Link>
          <Link to="/">
            {" "}
            <div className="feedbackhidena" id="feedbackhidena">
              {" "}
              <ion-icon name="chatbubbles-outline" />
            </div>
          </Link>
          <div className="bringbackbtna" id="bringbackbtna">
            <ion-icon
              name="chevron-forward-outline"
              onClick={this.backwardfunctiona}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default MinigamesHeader;
