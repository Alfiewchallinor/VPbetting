import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { auth } from "../../../firebase";
import $ from "jquery";
import Stats from "./FortniteComponents/Stats";
var firestore = firebase.firestore();

export default class Fortnite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournamentData: [],
      tournamentLoaded: false,
      tournamentName: "",

      currentCoinCount: "",
      gotCoinAmount: false,

      outrightNameValue: "",
      outrightCoinValue: "",
      outrightErrorMessage: "",
      outrightSuccessMessage: "",

      top100NameValue: "",
      top100CoinValue: "",
      top100ErrorMessage: "",
      top100SuccessMessage: "",

      customNameValue: "",
      customCoinValue: "",
      customPlacement: "",
      customErrorMessage: "",
      customSuccessMessage: "",
    };

    this.cupClicked = this.cupClicked.bind(this);
    this.outrightSubmit = this.outrightSubmit.bind(this);
    this.top100Submit = this.top100Submit.bind(this);
    this.customSubmit = this.customSubmit.bind(this);
    this.updateCoinAmountState = this.updateCoinAmountState.bind(this);
  }

  componentDidMount() {
    fetch("/getFortniteTournamentDataEU", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          tournamentData: json,
          tournamentLoaded: true,
        });
      });
  }
  updateCoinAmountState() {
    const gotCoinAmount = this.state.gotCoinAmount;
    if (gotCoinAmount === true) {
      return;
    }
    if (gotCoinAmount === false) {
      const docRef = firestore.doc(
        "users/" + auth.currentUser.uid + "pointsNumber"
      );
      docRef.get().then((doc) => {
        this.setState({
          currentCoinCount: doc.data().pointsNumber,
          gotCoinAmount: true,
        });
      });
    }
  }
  loadedcomponentDidMount = () => {
    if (this.state.tournamentLoaded === false) {
      return;
    } else {
      const response = this.state.tournamentData;
      $(".tournamentposterClass").css("display", "block");
      //Get the values of the last events in the
      // array (format backwards, e.g "fourth" should be the leftest box)
      const finalarray = this.state.tournamentData.events.length - 1;
      const thirdarray = this.state.tournamentData.events.length - 2;
      const secondarray = this.state.tournamentData.events.length - 3;
      const firstarray = this.state.tournamentData.events.length - 4;
      //1st box
      const firstfinalposterfinal = JSON.stringify(
        response.events[firstarray].poster
      ).replace(/"/g, "");
      document.getElementById("firsttournamentposter").src =
        firstfinalposterfinal;
      const box1linetop = JSON.stringify(
        response.events[firstarray].name_line1
      ).replace(/"/g, "");
      $("#firsttournamentlineone").html(box1linetop);

      const box1linetwo = JSON.stringify(
        response.events[firstarray].name_line2
      ).replace(/"/g, "");
      $("#firsttournamentlinetwo").html(box1linetwo);

      const box1Schedule = JSON.stringify(
        response.events[firstarray].schedule
      ).replace(/"/g, "");
      $("#titleSchedule").html(box1Schedule);
      //2nd box
      const secondfinalposterfinal = JSON.stringify(
        response.events[secondarray].poster
      ).replace(/"/g, "");
      document.getElementById("secondtournamentposter").src =
        secondfinalposterfinal;
      const box2linetop = JSON.stringify(
        response.events[secondarray].name_line1
      ).replace(/"/g, "");
      $("#secondtournamentlineone").html(box2linetop);

      const box2linetwo = JSON.stringify(
        response.events[secondarray].name_line2
      ).replace(/"/g, "");
      $("#secondtournamentlinetwo").html(box2linetwo);

      const box2Schedule = JSON.stringify(
        response.events[secondarray].schedule
      ).replace(/"/g, "");
      $("#titleScheduleSecond").html(box2Schedule);
      //3rd box
      const thirdfinalposterfinal = JSON.stringify(
        response.events[thirdarray].poster
      ).replace(/"/g, "");
      document.getElementById("thirdtournamentposter").src =
        thirdfinalposterfinal;

      const box3linetop = JSON.stringify(
        response.events[thirdarray].name_line1
      ).replace(/"/g, "");
      $("#thirdtournamentlineone").html(box3linetop);

      const box3linetwo = JSON.stringify(
        response.events[thirdarray].name_line2
      ).replace(/"/g, "");
      $("#thirdtournamentlinetwo").html(box3linetwo);

      const box3Schedule = JSON.stringify(
        response.events[thirdarray].schedule
      ).replace(/"/g, "");
      $("#titleScheduleThird").html(box3Schedule);
      //last box
      const fourthfinalposterfinal = JSON.stringify(
        response.events[finalarray].poster
      ).replace(/"/g, "");
      document.getElementById("lasttournamentposter").src =
        fourthfinalposterfinal;

      const box4linetop = JSON.stringify(
        response.events[finalarray].name_line1
      ).replace(/"/g, "");
      $("#fourthtournamentlineone").html(box4linetop);

      const box4linetwo = JSON.stringify(
        response.events[finalarray].name_line2
      ).replace(/"/g, "");
      $("#fourthtournamentlinetwo").html(box4linetwo);

      const box4Schedule = JSON.stringify(
        response.events[finalarray].schedule
      ).replace(/"/g, "");
      $("#titleScheduleFourth").html(box4Schedule);
      //if statements to decrease font size
      //if statements box 1
      if (
        document.getElementById("firsttournamentlineone").innerHTML.length > 10
      ) {
        $("#firsttournamentlineone").css("fontSize", "40px");
      }
      if (
        document.getElementById("firsttournamentlinetwo").innerHTML.length > 10
      ) {
        $("#firsttournamentlinetwo").css("fontSize", "40px");
      }
      //if statements box 2
      if (
        document.getElementById("secondtournamentlineone").innerHTML.length > 10
      ) {
        $("#secondtournamentlineone").css("fontSize", "40px");
      }
      if (
        document.getElementById("secondtournamentlinetwo").innerHTML.length > 10
      ) {
        $("#secondtournamentlinetwo").css("fontSize", "40px");
      }
      //if statements box 3
      if (
        document.getElementById("thirdtournamentlineone").innerHTML.length > 10
      ) {
        $("#thirdtournamentlineone").css("fontSize", "40px");
      }
      if (
        document.getElementById("thirdtournamentlinetwo").innerHTML.length > 10
      ) {
        $("#thirdtournamentlinetwo").css("fontSize", "40px");
      }
      //if statements box 4
      if (
        document.getElementById("fourthtournamentlineone").innerHTML.length > 10
      ) {
        $("#fourthtournamentlineone").css("fontSize", "40px");
      }
      if (
        document.getElementById("fourthtournamentlinetwo").innerHTML.length > 10
      ) {
        $("#fourthtournamentlinetwo").css("fontSize", "40px");
      }
      //if statements for unlikely + 15 character length

      if (
        document.getElementById("firsttournamentlineone").innerHTML.length > 14
      ) {
        $("#firsttournamentlineone").css("fontSize", "26.7px");
      }
      if (
        document.getElementById("firsttournamentlinetwo").innerHTML.length > 14
      ) {
        $("#firsttournamentlinetwo").css("fontSize", "26.7px");
      }
      //if statements box 2
      if (
        document.getElementById("secondtournamentlineone").innerHTML.length > 14
      ) {
        $("#secondtournamentlineone").css("fontSize", "26.7px");
      }
      if (
        document.getElementById("secondtournamentlinetwo").innerHTML.length > 14
      ) {
        $("#secondtournamentlinetwo").css("fontSize", "26.7px");
      }
      //if statements box 3
      if (
        document.getElementById("thirdtournamentlineone").innerHTML.length > 14
      ) {
        $("#thirdtournamentlineone").css("fontSize", "26.7px");
      }
      if (
        document.getElementById("thirdtournamentlinetwo").innerHTML.length > 14
      ) {
        $("#thirdtournamentlinetwo").css("fontSize", "26.7px");
      }
      //if statements box 4
      if (
        document.getElementById("fourthtournamentlineone").innerHTML.length > 14
      ) {
        $("#fourthtournamentlineone").css("fontSize", "26.7px");
      }
      if (
        document.getElementById("fourthtournamentlinetwo").innerHTML.length > 14
      ) {
        $("#fourthtournamentlinetwo").css("fontSize", "26.7px");
      }

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          $("#upcommingtournamentfirst").click(function () {
            $(".clickedTournamentSectionTitle").html(
              box1linetop + " " + box1linetwo
            );
          });
          $("#upcommingtournamentsecond").click(function () {
            $(".clickedTournamentSectionTitle").html(
              box2linetop + " " + box2linetwo
            );
          });
          $("#upcommingtournamentthird").click(function () {
            $(".clickedTournamentSectionTitle").html(
              box3linetop + " " + box3linetwo
            );
          });
          $("#upcommingtournamentfourth").click(function () {
            $(".clickedTournamentSectionTitle").html(
              box4linetop + " " + box4linetwo
            );
          });
        } else {
        }
      });
    }
  };
  cupClicked() {
    const tournamentLoaded = this.state.tournamentLoaded;
    if (!tournamentLoaded) {
      return;
    } else {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          $(
            ".onlyShownOnEventClick, #ifYourBetIsSUCCESSFULOutright, #playerNameLableFortniteOutright, #tooutrightwinTOURNAMENTNAMEOutright, #coinamountOutright"
          ).css("display", "block");
          $(".selectTournament, .imagebackgroundFortniteContainer").css(
            "display",
            "none"
          );
          $(".completebottomLeftSection").css("background", "white");
          $(
            "#inputForFortnieBRBettingSectionOutright, #inputForFortnieBRBettingSectionOutrightSecond"
          ).show();
        }
      });
      this.setState({
        outrightSuccessMessage: "",
        outrightErrorMessage: "",
        top100SuccessMessage: "",
        top100ErrorMessage: "",
        customSuccessMessage: "",
        customErrorMessage: "",
        tournamentName: $(".clickedTournamentSectionTitle").html(),
      });
    }
  }

  outrightNameChange = (e) => {
    this.setState({ outrightNameValue: e.target.value });
  };
  outrightCoinChange = (e) => {
    this.setState({ outrightCoinValue: e.target.value });
  };

  top100NameChange = (e) => {
    this.setState({ top100NameValue: e.target.value });
  };
  top100CoinChange = (e) => {
    this.setState({ top100CoinValue: e.target.value });
  };
  customNameChange = (e) => {
    this.setState({ customNameValue: e.target.value });
  };
  customCoinChange = (e) => {
    this.setState({ customCoinValue: e.target.value });
  };
  customPlacementChange = (e) => {
    this.setState({ customPlacement: e.target.value });
  };

  outrightSubmit(e) {
    e.preventDefault();
    const cupName = this.state.tournamentName;
    const epicName = this.state.outrightNameValue;
    const coinAmount = this.state.outrightCoinValue;
    const accountNumberCoin = this.state.currentCoinCount;
    const pastBet = firestore.doc(
      "users/" +
        auth.currentUser.uid +
        "pointsNumber/FortniteBetsEU/" +
        cupName +
        "OutrightWin"
    );

    pastBet.get().then((pastBetDoc) => {
      if (pastBetDoc.exists) {
        return this.setState({
          outrightErrorMessage:
            "ERROR: YOU HAVE ALREADY BET ON THIS CUP: " + cupName,
            outrightSuccessMessage: "CURRENT BET: " +
            pastBetDoc.data().playerName +
            " TO WIN " +
            cupName + 
            " WITH " + 
            pastBetDoc.data().coinAmount +
            " COIN(s) "
        });
      }
      if (accountNumberCoin < coinAmount) {
        return this.setState({
          outrightErrorMessage: "ERROR: YOU DO NOT HAVE ENOUGH COINS",
        });
      }

      if (coinAmount.length < 1 || epicName.length < 1) {
        return this.setState({
          outrightErrorMessage: "ERROR: FILL IN ALL FIELDS",
        });
      }
      if (coinAmount.includes("-") === true) {
        return this.setState({
          outrightErrorMessage: "ERROR: YOU CAN'T BET - COINS?!?!?",
        });
      }
      if (coinAmount === "0") {
        return this.setState({
          outrightErrorMessage: "ERROR: YOU CAN'T BET 0 COINS?!?!?",
        });
      } else {
        fetch(process.env.REACT_APP_FORTNITE_UID_URL + epicName, {
          method: "GET",
          headers: {
            Authorization: process.env.REACT_APP_FORTNITE_UID_KEY,
          },
        })
          .then((response) => response.json())
          .then((response) => {
            const playerUid = response.account_id;
            if (playerUid === undefined) {
              return this.setState({
                outrightErrorMessage: "ERROR: EPIC ACCOUNT DOES NOT EXIST",
              });
            } else {
              pastBet.set({
                playerUid: playerUid,
                coinAmount: coinAmount,
                playerName: epicName,
              });
              const userCoinAmount = firestore.doc(
                "users/" + auth.currentUser.uid + "pointsNumber"
              );
              userCoinAmount.update({
                pointsNumber: firebase.firestore.FieldValue.increment(
                  -coinAmount
                ),
              });
              this.setState({
                outrightSuccessMessage:
                  "CURRENT BET: " +
                  epicName +
                  " TO WIN " +
                  cupName +
                  " WITH " +
                  coinAmount +
                  " COIN(S), GOOD LUCK!",
                currentCoinCount: this.state.currentCoinCount - coinAmount,
              });
            }
          });
      }
    });
  }
  top100Submit(e) {
    e.preventDefault();
    const cupName = this.state.tournamentName;
    const epicName = this.state.top100NameValue;
    const coinAmount = this.state.top100CoinValue;
    const accountNumberCoin = this.state.currentCoinCount;
    const pastBet = firestore.doc(
      "users/" +
        auth.currentUser.uid +
        "pointsNumber/FortniteBetsEU/" +
        cupName +
        "Top100"
    );
    pastBet.get().then((pastBetDoc) => {
      if (pastBetDoc.exists) {
        return this.setState({
          top100ErrorMessage:
            "ERROR: YOU HAVE ALREADY BET ON THIS CUP: " + cupName,
            top100SuccessMessage : 
            "CURRENT BET: " +
            pastBetDoc.data().playerName +
            " TO PLACE TOP 100 IN " +
            cupName +
            " WITH " +
            pastBetDoc.data().coinAmount +
            " COIN(s) "
        });
      }
      if (accountNumberCoin < coinAmount) {
        return this.setState({
          top100ErrorMessage: "ERROR: YOU DO NOT HAVE ENOUGH COINS",
        });
      }

      if (coinAmount.length < 1 || epicName.length < 1) {
        return this.setState({
          top100ErrorMessage: "ERROR: FILL IN ALL FIELDS",
        });
      }
      if (coinAmount.includes("-") === true) {
        return this.setState({
          top100ErrorMessage: "ERROR: YOU CAN'T BET - COINS?!?!?",
        });
      }
      if (coinAmount === "0") {
        return this.setState({
          top100ErrorMessage: "ERROR: YOU CAN'T BET 0 COINS?!?!?",
        });
      } else {
        fetch(process.env.REACT_APP_FORTNITE_UID_URL + epicName, {
          method: "GET",
          headers: {
            Authorization: process.env.REACT_APP_FORTNITE_UID_KEY,
          },
        })
          .then((response) => response.json())
          .then((response) => {
            const playerUid = response.account_id;
            if (playerUid === undefined) {
              return this.setState({
                top100ErrorMessage: "ERROR: EPIC ACCOUNT DOES NOT EXIST",
              });
            } else {
              pastBet.set({
                playerUid: playerUid,
                coinAmount: coinAmount,
                playerName: epicName,
              });
              const userCoinAmount = firestore.doc(
                "users/" + auth.currentUser.uid + "pointsNumber"
              );
              userCoinAmount.update({
                pointsNumber: firebase.firestore.FieldValue.increment(
                  -coinAmount
                ),
              });
              this.setState({
                top100SuccessMessage:
                  "CURRENT BET: " +
                  epicName +
                  " TO PLACE TOP 100 IN " +
                  cupName +
                  " WITH " +
                  coinAmount +
                  " COIN(S), GOOD LUCK!",
                currentCoinCount: this.state.currentCoinCount - coinAmount,
              });
            }
          });
      }
    });
  }

  customSubmit(e) {
    e.preventDefault();
    const epicName = this.state.customNameValue;
    const coinAmount = this.state.customCoinValue;
    const cupName = this.state.tournamentName;
    const placementCustom = this.state.customPlacement;
    const accountNumberCoin = this.state.currentCoinCount;
    const pastBet = firestore.doc(
      "users/" +
        auth.currentUser.uid +
        "pointsNumber/FortniteBetsEU/" +
        cupName +
        "customPlacement"
    );
    pastBet.get().then((pastBetDoc) => {
      if (pastBetDoc.exists) {
        return this.setState({
          customErrorMessage:
            "ERROR: YOU HAVE ALREADY BET ON THIS CUP: " + cupName,
            customSuccessMessage: "CURRENT BET: "  +
            pastBetDoc.data().playerName + 
            " TO PLACE" +
            pastBetDoc.data().placement +
            " IN " +
            cupName +
            " WITH " +
            coinAmount +
            " COINS "

        });
      };
      if (accountNumberCoin < coinAmount) {
        return this.setState({
          customErrorMessage: "ERROR: YOU DO NOT HAVE ENOUGH COINS",
        });
      }

      if(epicName.length < 1 || coinAmount.length < 1 || placementCustom < 1) {
        return this.setState({
          customErrorMessage:
           "ERROR: FILL IN ALL FIELDS"
        })
      }
      if (coinAmount.includes("-") === true) {
        return this.setState({
          customErrorMessage: "ERROR: YOU CAN'T BET - COINS?!?!?",
        });
      }
      if (coinAmount === "0") {
        return this.setState({
          customErrorMessage: "ERROR: YOU CAN'T BET 0 COINS?!?!?",
        });
      }
      if (placementCustom > 100) {
        return this.setState({
          customErrorMessage: "ERROR: YOU CAN ONLY BET FOR A PLACMENT OF 2-99"
        })
      }
      if (placementCustom === "1") {
        return this.setState({
          customErrorMessage:
            "ERROR: USE 'OUTRIGHT WIN' TO BET FOR FIRST PLACE",
        });
      }
      if (placementCustom === "0") {
        return this.setState({
          customErrorMessage:
            "ERROR: YOU CAN'T BET FOR 0TH PLACE?!?!?",
        });
      }
      else {
        fetch(process.env.REACT_APP_FORTNITE_UID_URL + epicName, {
          method: "GET",
          headers: {
            Authorization: process.env.REACT_APP_FORTNITE_UID_KEY,
          },
        })
          .then((response) => response.json())
          .then((response) => {
            const playerUid = response.account_id;
            if (playerUid === undefined) {
              return this.setState({
                customErrorMessage: "ERROR: EPIC ACCOUNT DOES NOT EXIST",
              });
            } else {
              pastBet.set({
                playerUid: playerUid,
                coinAmount: coinAmount,
                playerName: epicName,
                placement: placementCustom
              });
              const userCoinAmount = firestore.doc(
                "users/" + auth.currentUser.uid + "pointsNumber"
              );
              userCoinAmount.update({
                pointsNumber: firebase.firestore.FieldValue.increment(
                  -coinAmount
                ),
              });
              this.setState({
                customSuccessMessage:
                  "CURRENT BET: " +
                  epicName +
                  " TO PLACE " +
                  placementCustom +
                  " IN " +
                  cupName +
                  " WITH " +
                  coinAmount +
                  " COIN(S), GOOD LUCK!",
                currentCoinCount: this.state.currentCoinCount - coinAmount,
              });
            }
          });
      }
      })
  }

  render() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        $(".selectTournament").html("SELECT A CUP TO BEGIN BETTING");
        $(".pointsNumberDisplay, .minigamesNumberDisplay").css(
          "display",
          "block"
        );
        $(".coiniconForMinigames").css("display", "block");
      } else {
        $(".selectTournament").html("YOU MUST BE LOGGED INTO BET COINS");
        $(".selectTournament").css("color", "red");
        $(
          ".pointsNumberDisplay, .minigamesNumberDisplay, .coiniconForMinigames"
        ).css("display", "none");
      }
    });

    console.log(this.state.currentCoinCount);
    return (
      <div onLoad={this.loadedcomponentDidMount()} className="containerForSports" >
       <Link to="/fortnitena"> <button className="regionButtonFortnite">VISIT NA</button></Link>
        <div className="minigamesNumberDisplay" id="minigamesNumberGet">
          {this.state.currentCoinCount}
        </div>
        <section className="upcommingtounramentssection">
          <div className="upcommingtounramentdiv">
            <div
              className="upcommingTournament"
              id="upcommingtournamentfirst"
              onClick={this.cupClicked}
              onLoad={this.updateCoinAmountState}
            >
              <img
                src=""
                id="firsttournamentposter"
                alt="toplefttournament"
                className="tournamentposterClass"
              />
              <h1 className="tournamenttitle" id="firsttournamentlineone">
                Loading
              </h1>
              <h1
                className="tournamenttitle secondlineposition"
                id="firsttournamentlinetwo"
              >
                ...
              </h1>
              <p className="scheduletitle" id="titleSchedule"></p>
            </div>
            <div
              className="upcommingTournament"
              id="upcommingtournamentsecond"
              onClick={this.cupClicked}
            >
              <img
                src=""
                id="secondtournamentposter"
                alt="toprighttournament"
                className="tournamentposterClass"
              />
              <h1 className="tournamenttitle" id="secondtournamentlineone">
                Loading
              </h1>
              <h1
                className="tournamenttitle secondlineposition"
                id="secondtournamentlinetwo"
              >
                ...
              </h1>
              <p className="scheduletitle" id="titleScheduleSecond"></p>
            </div>
            <div
              className="upcommingTournament"
              id="upcommingtournamentthird"
              onClick={this.cupClicked}
            >
              <img
                src=""
                id="thirdtournamentposter"
                alt="bottomlefttournament"
                className="tournamentposterClass"
              />
              <h1 className="tournamenttitle" id="thirdtournamentlineone">
                Loading
              </h1>
              <h1
                className="tournamenttitle secondlineposition"
                id="thirdtournamentlinetwo"
              >
                ...
              </h1>
              <p className="scheduletitle" id="titleScheduleThird"></p>
            </div>
            <div
              className="upcommingTournament"
              id="upcommingtournamentfourth"
              onClick={this.cupClicked}
            >
              <img
                src=""
                id="lasttournamentposter"
                alt="bottomrighttournament"
                className="tournamentposterClass"
              />
              <h1 className="tournamenttitle" id="fourthtournamentlineone">
                Loading
              </h1>
              <h1
                className="tournamenttitle secondlineposition"
                id="fourthtournamentlinetwo"
              >
                ...
              </h1>
              <p className="scheduletitle" id="titleScheduleFourth"></p>
            </div>
          </div>
        </section>
        <div className="advertiserSectionCont">
        <div className="advertForFortnite"><p className="displayTextIncenterforfnadd">ADS WILL BE DISPLAYED HERE</p></div>
        <div className="advertForFortnite" id="secondaryAdFortnite"><p className="displayTextIncenterforfnadd">ADS WILL BE DISPLAYED HERE</p></div>
        </div>
        <Stats />
        <section className="completebottomLeftSection">
          <h2 className="selectTournament">SELECT A CUP TO BEGIN BETTING</h2>
          <div
            className="imagebackgroundFortniteContainer"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/backgroundeventReal.jpg"
              })`,
            }}
          ></div>
          {/*BETTING SECTION OUTRIGHT*/}
          <section
            className="onlyShownOnEventClick"
            style={{ display: "none" }}
          >
            <p
              className="clickedTournamentSectionTitle"
              id="tournamentTitleFortniteBRg"
            ></p>
            <div style={{ display: "flex" }}>
              <div className="leftsectionFortniteBr">
                <h3 className="sectionFortniteBrTitle">STEP 1</h3>

                <p className="fortniteSectionBrExpalin">
                  Select a type of bet to choose, e.g "To Outright Win".
                </p>
              </div>
              <div className="middesectionFortniteBr">
                <h3 className="sectionFortniteBrTitle">STEP 2</h3>
                <p className="fortniteSectionBrExpalin">
                  Choose the player(s) you expect to place in the certain spot
                  on the leaderboard.
                </p>
              </div>
              <div className="rightsectionFortniteBr">
                <h3 className="sectionFortniteBrTitle">STEP 3</h3>
                <p className="fortniteSectionBrExpalin">
                  Wait for the result, it can take 1-2 day(s) to recieve your
                  winnings, any errors please go to our{" "}
                  <Link to="/">
                    <span style={{ color: "#3B82F6" }}>Customer Support</span>
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="stepdividerFortniteBr"></div>
            <p className="fortniteimportantMessage">
              IMPORTANT: For any team-mode bets you should only select one
              players name. <br />
              IMPORTANT: If any player you would like to bet on has hidden
              characters then you should still add them to the "PLAYER NAME"
            </p>

            <div className="fortniteBRBettingSectionContainer">
              <h3 className="fortniteBRBettingSectionTitle">TO OUTRIGHT WIN</h3>
              <p
                className="ifYourBetIsSUCCESSFUL"
                id="ifYourBetIsSUCCESSFULOutright"
              >
                IF YOUR BET IS SUCCESSFUL YOU WILL RECIEVE A RETURN OF{" "}
                <strong>25X</strong> <br />
                There is only <strong> 1 </strong> bet per cup.
              </p>
              <div style={{ display: "flex" }}>
                <p
                  className="playerNameLableFortnite"
                  id="playerNameLableFortniteOutright"
                >
                  PLAYER NAME
                </p>
                <p
                  className="playerNameLableFortnite secondaryFortniteLable"
                  id="coinamountOutright"
                >
                  COIN AMOUNT
                </p>
              </div>
              <form onSubmit={this.outrightSubmit}>
                <input
                  className="inputForFortnieBRBettingSection"
                  id="inputForFortnieBRBettingSectionOutrightSecond"
                  placeholder="NRG BENJYFISHY"
                  type="name"
                  value={this.state.outrightNameValue}
                  onChange={this.outrightNameChange}
                />
                <input
                  className="inputForFortnieBRBettingSection"
                  id="inputForFortnieBRBettingSectionOutright"
                  type="number"
                  placeholder=""
                  value={this.state.outrightCoinValue}
                  onChange={this.outrightCoinChange}
                />

                <button
                  type="submit"
                  className="tooutrightwinTOURNAMENTNAME"
                  id="tooutrightwinTOURNAMENTNAMEOutright"
                >
                  Confirm to outright win (irreversible)
                </button>
              </form>
              <div className="fortniteBrContainerErrorContainer">
                {this.state.outrightErrorMessage}
              </div>
              <div className="fortniteBrContainerErrorContainer fortniteSuccessMessage">
                {this.state.outrightSuccessMessage}
              </div>
            </div>

            {/*TO PLACE TOP 100 SECTION*/}
            <div className="fortniteBRBettingSectionContainer">
              <h3 className="fortniteBRBettingSectionTitle">
                TO PLACE TOP 100
              </h3>
              <p
                className="ifYourBetIsSUCCESSFUL"
                id="ifYourBetIsSUCCESSFULTopHundred"
              >
                IF YOUR BET IS SUCCESSFUL YOU WILL RECIEVE A RETURN OF{" "}
                <strong>4X</strong> <br />
                There is only <strong> 1 </strong> bet per cup.
              </p>
              <div style={{ display: "flex" }}>
                <p
                  className="playerNameLableFortnite"
                  id="playerNameLableFortniteTopHundred"
                >
                  PLAYER NAME
                </p>
                <p
                  className="playerNameLableFortnite secondaryFortniteLable"
                  id="coinamountTopHundred"
                >
                  COIN AMOUNT
                </p>
              </div>
              <form onSubmit={this.top100Submit}>
                <input
                  className="inputForFortnieBRBettingSection"
                  id="inputForFortnieBRBettingSectionHundred"
                  placeholder="Falcon TaySon 7"
                  type="name"
                  value={this.state.top100NameValue}
                  onChange={this.top100NameChange}
                />
                <input
                  className="inputForFortnieBRBettingSection"
                  id="inputForFortnieBRBettingSectionHundredSecond"
                  type="number"
                  placeholder=""
                  value={this.state.top100CoinValue}
                  onChange={this.top100CoinChange}
                />

                <button
                  type="submit"
                  className="tooutrightwinTOURNAMENTNAME"
                  id="tooplaceTopHundred"
                >
                  Confirm to place top 100 (irreversible)
                </button>
              </form>

              <div className="fortniteBrContainerErrorContainer">
                {this.state.top100ErrorMessage}
              </div>

              <div className="fortniteBrContainerErrorContainer fortniteSuccessMessage">
                {this.state.top100SuccessMessage}
              </div>
            </div>

            {/*TO PLACE __*/}
            {/*TO PLACE __*/}
            {/*TO PLACE __*/}
            <div className="fortniteBRBettingSectionContainer">
              <h3 className="fortniteBRBettingSectionTitle">
                CUSTOM PLACEMENT
              </h3>
              <p
                className="ifYourBetIsSUCCESSFUL"
                id="ifYourBetIsSUCCESSFULCustom"
              >
                IF YOUR BET IS SUCCESSFUL YOU WILL RECIEVE A RETURN OF{" "}
                <strong>30X</strong> <br />
                There is only <strong> 1 </strong> bet per cup. <br />
                You cannot bet for first place, use "TO OUTRIGHT WIN" instead.{" "}
                <br />
                You can <strong>only</strong> bet for a top 100 placement.
              </p>
              <div style={{ display: "flex" }}>
                <p
                  className="playerNameLableFortnite"
                  id="playerNameLableFortniteCustom"
                >
                  PLAYER NAME
                </p>
                <p
                  className="playerNameLableFortnite secondaryFortniteLable"
                  id="coinamountCustom"
                >
                  COIN AMOUNT
                </p>
              </div>
              <form onSubmit={this.customSubmit}>
                <input
                  className="inputForFortnieBRBettingSection"
                  id="inputForFortnieBRBettingSectionCustom"
                  placeholder="Heretics K1nzеll"
                  type="name"
                  value={this.state.customNameValue}
                  onChange={this.customNameChange}
                />
                <input
                  className="inputForFortnieBRBettingSection"
                  id="inputForFortnieBRBettingSectionCustomSecond"
                  type="number"
                  placeholder=""
                  value={this.state.customCoinValue}
                  onChange={this.customCoinChange}
                />
                <p className="placementaddition">PLACEMENT:</p>
                <input
                  className="inputForFortnieBRBettingSection"
                  id="inputForFortnieBRBettingSectionCustomThird"
                  type="number"
                  placeholder="4th"
                  value={this.state.customPlacement}
                  onChange={this.customPlacementChange}
                />

                <button
                  type="submit"
                  className="tooutrightwinTOURNAMENTNAME"
                  id="customplacementsubmitbtn"
                >
                  Confirm custom placement
                </button>
              </form>
              <div className="fortniteBrContainerErrorContainer">
                {this.state.customErrorMessage}
              </div>
              <div className="fortniteBrContainerErrorContainer fortniteSuccessMessage">
                {this.state.customSuccessMessage}
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
