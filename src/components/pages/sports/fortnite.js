import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SportsHeader from "../../master/sportsheader";
import firebase from "firebase";
import { auth } from "../../../firebase";
import $ from "jquery";
var firestore = firebase.firestore();

//Start of functipn page
export default function Fortnite() {
  //Logged in or out betting section
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $(".selectTournament").html("SELECT A CUP TO BEGIN BETTING");
    } else {
      $(".selectTournament").html("YOU MUST BE LOGGED INTO BET COINS");
      $(".selectTournament").css("color", "red");
    }
  });
  fetch("https://fortniteapi.io/v1/events/window?windowId=S17_FNCS_SoloFinals_EU_Event1", {
    method: "GET",
    headers: {
      Authorization: process.env.REACT_APP_UPCOMMING_TOURNAMENT_KEY,
    },
  }).then((res) => res.json())
  .then(function(response){
    console.log(JSON.stringify(response))
  })
  

  //fetch tournament data (upcomming 4)
  fetch("https://fortniteapi.io/v1/events/list?lang=en&region=EU", {
    method: "GET",
    headers: {
      Authorization: process.env.REACT_APP_UPCOMMING_TOURNAMENT_KEY,
    },
  })
    .then((res) => res.json())
    .then(function (response) {
      $(".tournamentposterClass").css("display", "block");
      //Get the values of the last events in the
      // array (format backwards, e.g "fourth" should be the leftest box)
      const finalarray = response.events.length - 1;
      const thirdarray = response.events.length - 2;
      const secondarray = response.events.length - 3;
      const firstarray = response.events.length - 4;
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

      //const's for event listener display betting section
      const upcommingtournamentfirst = document.querySelector(
        "#upcommingtournamentfirst"
      );
      const upcommingtournamentsecond = document.querySelector(
        "#upcommingtournamentsecond"
      );
      const upcommingtournamentthird = document.querySelector(
        "#upcommingtournamentthird"
      );
      const upcommingtournamentfourth = document.querySelector(
        "#upcommingtournamentfourth"
      );

      //add box's event listener to display betting section

      //box1
      upcommingtournamentfirst.addEventListener("click", (e) => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            $(".onlyShownOnEventClick").css("display", "block");
            $(".selectTournament, .imagebackgroundFortniteContainer").css(
              "display",
              "none"
            );
            $(".completebottomLeftSection").css("background", "white");
            $(".clickedTournamentSectionTitle").html(
              box1linetop + " " + box1linetwo
            );
            console.log("hello123445");
            sectionLoadFortniteBetting();
            sectionLoadFortniteBettingTopHundred();
            sectionLoadFortniteBettingCustomPlacement();
          } else {
          }
        });
      });
      //box2
      upcommingtournamentsecond.addEventListener("click", (e) => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log("clicked left-Right");
            $(".selectTournament, .imagebackgroundFortniteContainer").css(
              "display",
              "none"
            );
            $(".completebottomLeftSection").css("background", "white");
            $(".onlyShownOnEventClick").css("display", "block");
            $(".clickedTournamentSectionTitle").html(
              box2linetop + " " + box2linetwo
            );
            sectionLoadFortniteBetting();
            sectionLoadFortniteBettingTopHundred();
            sectionLoadFortniteBettingCustomPlacement();
          } else {
          }
        });
      });
      //box3
      upcommingtournamentthird.addEventListener("click", (e) => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log("clicked left-Right");
            $(".selectTournament, .imagebackgroundFortniteContainer").css(
              "display",
              "none"
            );
            $(".completebottomLeftSection").css("background", "white");
            $(".onlyShownOnEventClick").css("display", "block");
            $(".clickedTournamentSectionTitle").html(
              box3linetop + " " + box3linetwo
            );
            sectionLoadFortniteBetting();
            sectionLoadFortniteBettingTopHundred();
            sectionLoadFortniteBettingCustomPlacement();
          } else {
          }
        });
      });
      upcommingtournamentfourth.addEventListener("click", (e) => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log("clicked left-Right");
            $(".selectTournament, .imagebackgroundFortniteContainer").css(
              "display",
              "none"
            );
            $(".completebottomLeftSection").css("background", "white");
            $(".onlyShownOnEventClick").css("display", "block");
            $(".clickedTournamentSectionTitle").html(
              box4linetop + " " + box4linetwo
            );
            sectionLoadFortniteBetting();
            sectionLoadFortniteBettingTopHundred();
            sectionLoadFortniteBettingCustomPlacement();
          } else {
          }
        });
      });
    });
  const usernameRef = useRef();
  //search player stats function
  function clickedsearch(e) {
    e.preventDefault();
    //fetch epic ID
    fetch(process.env.REACT_APP_FORTNITE_UID_URL + usernameRef.current.value, {
      method: "GET",
      headers: {
        Authorization: process.env.REACT_APP_FORTNITE_UID_KEY,
      },
    })
      .then((res) => res.json())
      .then(function (response) {
        const fnaccountuidwith = JSON.stringify(response);
        const fnaccountuid = fnaccountuidwith.replace('"', "");
        const finalizeduidfortnite = fnaccountuid.replace('"', "");
        //fetch the stats with the uid
        fetch(process.env.REACT_APP_FORTNITE_STATS_URL + finalizeduidfortnite, {
          method: "GET",
          headers: {
            "x-api-key": process.env.REACT_APP_FORTNITE_STATS_KEY,
          },
        })
          .then((res) => res.json())
          .then(function (response) {
            // begin displaying the data on the card
            $(".playerstatssection").css("display", "flex");
            $(".removestat").css("display", "block");
            const accountnamewith = JSON.stringify(response.data.account.name);
            const finalizedaccountname = accountnamewith.replace(/"/g, "");
            document.getElementById("accountName").innerHTML =
              finalizedaccountname;

            const overallwinswith = JSON.stringify(
              response.data.stats.all.overall.wins
            );
            const finalizedoverallwins = overallwinswith.replace(/"/g, "");
            document.getElementById("overallwins").innerHTML =
              finalizedoverallwins;

            const overallwinpercentagewith =
              JSON.stringify(response.data.stats.all.overall.winRate) + "%";
            const finalizedoverallwinpercentage =
              overallwinpercentagewith.replace(/"/g, "");
            document.getElementById("overallwinpercentage").innerHTML =
              finalizedoverallwinpercentage;

            const overallkdswith = JSON.stringify(
              response.data.stats.all.overall.kd
            ).replace(/"/g, "");
            document.getElementById("overallkd").innerHTML = overallkdswith;

            const overallkdmswith = JSON.stringify(
              response.data.stats.all.overall.killsPerMin
            ).replace(/"/g, "");
            document.getElementById("overallkpm").innerHTML = overallkdmswith;

            const overallmatchnumber = JSON.stringify(
              response.data.stats.all.overall.matches
            ).replace(/"/g, "");
            document.getElementById("overallmatchnumber").innerHTML =
              overallmatchnumber;

            const overallkillnumber = JSON.stringify(
              response.data.stats.all.overall.kills
            ).replace(/"/g, "");
            document.getElementById("overallkillnumber").innerHTML =
              overallkillnumber;

            const overalldeathnumber = JSON.stringify(
              response.data.stats.all.overall.deaths
            ).replace(/"/g, "");
            document.getElementById("overalldeathnumber").innerHTML =
              overalldeathnumber;
            // SOLO DATA
            const soloWinAmount = JSON.stringify(
              response.data.stats.all.solo.wins
            ).replace(/"/g, "");
            document.getElementById("soloWinAmount").innerHTML = soloWinAmount;

            const soloWinPercentage = JSON.stringify(
              response.data.stats.all.solo.winRate
            ).replace(/"/g, "");
            document.getElementById("soloWinPercentage").innerHTML =
              soloWinPercentage + "%";

            const soloKillAmount = JSON.stringify(
              response.data.stats.all.solo.kills
            ).replace(/"/g, "");
            document.getElementById("soloKillAmount").innerHTML =
              soloKillAmount;

            const soloDeathAmount = JSON.stringify(
              response.data.stats.all.solo.deaths
            ).replace(/"/g, "");
            document.getElementById("soloDeathAmount").innerHTML =
              soloDeathAmount;

            const soloRatio = JSON.stringify(
              response.data.stats.all.solo.kd
            ).replace(/"/g, "");
            document.getElementById("soloRatio").innerHTML = soloRatio;
            //DUO DATA
            const duoWinAmount = JSON.stringify(
              response.data.stats.all.duo.wins
            ).replace(/"/g, "");
            document.getElementById("duoWinAmount").innerHTML = duoWinAmount;

            const duoWinPercentage = JSON.stringify(
              response.data.stats.all.duo.winRate
            ).replace(/"/g, "");
            document.getElementById("duoWinPercentage").innerHTML =
              duoWinPercentage + "%";

            const duoKillAmount = JSON.stringify(
              response.data.stats.all.duo.kills
            ).replace(/"/g, "");
            document.getElementById("duoKillAmount").innerHTML = duoKillAmount;

            const duoDeathAmount = JSON.stringify(
              response.data.stats.all.duo.deaths
            ).replace(/"/g, "");
            document.getElementById("duoDeathAmount").innerHTML =
              duoDeathAmount;

            const duoRatio = JSON.stringify(
              response.data.stats.all.duo.kd
            ).replace(/"/g, "");
            document.getElementById("duoRatio").innerHTML = duoRatio;
            //SQUAD DATA
            const squadWinAmount = JSON.stringify(
              response.data.stats.all.squad.wins
            ).replace(/"/g, "");
            document.getElementById("squadWinAmount").innerHTML =
              squadWinAmount;

            const squadWinPercentage = JSON.stringify(
              response.data.stats.all.squad.winRate
            ).replace(/"/g, "");
            document.getElementById("squadWinPercentage").innerHTML =
              squadWinPercentage + "%";

            const squadKillAmount = JSON.stringify(
              response.data.stats.all.squad.kills
            ).replace(/"/g, "");
            document.getElementById("squadKillAmount").innerHTML =
              squadKillAmount;

            const squadDeathAmount = JSON.stringify(
              response.data.stats.all.squad.deaths
            ).replace(/"/g, "");
            document.getElementById("squadDeathAmount").innerHTML =
              squadDeathAmount;

            const squadRatio = JSON.stringify(
              response.data.stats.all.squad.kd
            ).replace(/"/g, "");
            document.getElementById("squadRatio").innerHTML = squadRatio;
          });
      });
  }
  //function to close the card
  function closestatmenu() {
    $(".playerstatssection").css("display", "none");
    $(".removestat").css("display", "none");
  }

  //fortnitebettingsectionOURIGHT WIN
  const [error, setError] = useState();
  const outrightwinCoinRef = useRef();
  const outrightwinNameRef = useRef();

  //function of submit of outright section fortnite betting
  function handleOutrightSubmit(e) {
    e.preventDefault();
    const coinAmount = outrightwinCoinRef.current.value;
    const epicName = outrightwinNameRef.current.value;

    //error section
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const pointOfficialNumber = firestore.doc(
          "users/" + auth.currentUser.uid + "pointsNumber"
        );
        pointOfficialNumber.get().then((doc) => {
          if (doc.data().pointsNumber < coinAmount) {
            return setError(
              "ERROR: YOU DO NOT HAVE ENOUGH COINS, TRY PLAYING MINIGAMES"
            );
          }
          if (coinAmount.length < 1 || epicName.length < 1) {
            return setError("ERROR: FILL IN ALL FIELDS");
          }
          if (coinAmount.includes("-") === true) {
            return setError("ERROR: COIN AMOUNT MUST NOT HAVE - OR +");
          }
          if (coinAmount === "0") {
            return setError("YOU CAN'T BET 0 COINS?!?!?");
          } else {
            //find the users UID
            fetch(process.env.REACT_APP_FORTNITE_UID_URL + epicName, {
              method: "GET",
              headers: {
                Authorization: process.env.REACT_APP_FORTNITE_UID_KEY,
              },
            })
              .then((res) => res.json())
              .then(function (response) {
                //more errors
                if (response.account_id === undefined) {
                  setError("ERROR: INVALID EPIC ACCOUNT NAME");
                } else {
                  const cupname = document.querySelector(
                    ".clickedTournamentSectionTitle"
                  ).innerHTML;
                  //find/create the firebase doc
                  const betsDB = firestore.doc(
                    "users/" +
                      auth.currentUser.uid +
                      "pointsNumber/bets/" +
                      cupname +
                      "OutrightWin"
                  );
                  const stringifyeduid = JSON.stringify(
                    response.account_id
                  ).replace(/"/g, "");

                  //set the data in the firebase doc
                  betsDB
                    .set({
                      playerUid: stringifyeduid,
                      coinAmount: coinAmount,
                      playerName: epicName,
                      betplaced: true,
                    })
                    .then(function () {
                      pointOfficialNumber
                        //take away the bet placed
                        .update({
                          pointsNumber: firebase.firestore.FieldValue.increment(
                            -coinAmount
                          ),
                        });
                    })
                    // call the success message function
                    .then(function () {
                      alreadybetfunction();
                    })
                    .catch((error) => {
                      setError(
                        "An error occurred on our end, please try again."
                      );
                    });
                }
              });
          }
        });
      } else {
        //Nothing will happen
      }
    });
  }

  function sectionLoadFortniteBetting() {
    const cupname = document.querySelector(
      ".clickedTournamentSectionTitle"
    ).innerHTML;
    const outrightCupBetChecker = firestore.doc(
      "users/" +
        auth.currentUser.uid +
        "pointsNumber/bets/" +
        cupname +
        "OutrightWin"
    );

    outrightCupBetChecker.get().then((doc) => {
      if (doc.exists) {
        if (doc.data().betplaced == true) {
          alreadybetfunction();
          $(".toourightwinErrorCont").html("");
        }
      } else {
        $(
          "#ifYourBetIsSUCCESSFULOutright, #playerNameLableFortniteOutright, #tooutrightwinTOURNAMENTNAMEOutright, #coinamountOutright"
        ).css("display", "block");
        $(
          "#inputForFortnieBRBettingSectionOutright, #inputForFortnieBRBettingSectionOutrightSecond"
        ).show();
      }
    });
  }
  //success already bet message
  function alreadybetfunction() {
    const cupname = document.querySelector(
      ".clickedTournamentSectionTitle"
    ).innerHTML;
    $(
      "#ifYourBetIsSUCCESSFULOutright, #playerNameLableFortniteOutright, #tooutrightwinTOURNAMENTNAMEOutright, #coinamountOutright"
    ).css("display", "none");
    $(
      "#inputForFortnieBRBettingSectionOutright, #inputForFortnieBRBettingSectionOutrightSecond"
    ).hide();
    //find the data from firebase
    const getBetData = firestore.doc(
      "users/" +
        auth.currentUser.uid +
        "pointsNumber/bets/" +
        cupname +
        "OutrightWin"
    );
    getBetData.get().then((doc) => {
      if (doc.exists) {
        const coinData = JSON.stringify(doc.data().coinAmount);
        const playerName = JSON.stringify(doc.data().playerName);
        //fetch the Epic Account Name
        const fortnitemessageSuccessContainereal = document.querySelector(
          "#fortnitemessageSuccessContainereal"
        );
        fortnitemessageSuccessContainereal.innerHTML =
          "BET SUCCESSFULL: " +
          playerName +
          " to win " +
          cupname +
          " with " +
          coinData +
          " coin(s) ";
      }
    });
  }
  //TOP 100 SECTION
  //TOP 100 SECTION
  //TOP 100 SECTION
  //TOP 100 SECTION
  const [toponehundrederror, settoponehundrederror] = useState();
  const topOneHundredNameRef = useRef();
  const topOneHundredCoinRef = useRef();

  function handleTop100Submit(e) {
    e.preventDefault();
    const coinTopHundredAmount = topOneHundredCoinRef.current.value;
    const nameTopOneHundred = topOneHundredNameRef.current.value;

    //error section
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const pointOfficialNumber = firestore.doc(
          "users/" + auth.currentUser.uid + "pointsNumber"
        );
        pointOfficialNumber.get().then((doc) => {
          if (doc.data().pointsNumber < coinTopHundredAmount) {
            return settoponehundrederror(
              "ERROR: YOU DO NOT HAVE ENOUGH COINS, TRY PLAYING MINIGAMES"
            );
          }
          if (coinTopHundredAmount.length < 1 || nameTopOneHundred.length < 1) {
            return settoponehundrederror("ERROR: FILL IN ALL FIELDS");
          }
          if (coinTopHundredAmount.includes("-") === true) {
            return settoponehundrederror(
              "ERROR: COIN AMOUNT MUST NOT HAVE - OR +"
            );
          }
          if (coinTopHundredAmount === "0") {
            return settoponehundrederror("YOU CANT BET 0 COINS ?!?!?");
          } else {
            //find the users UID
            fetch(process.env.REACT_APP_FORTNITE_UID_URL + nameTopOneHundred, {
              method: "GET",
              headers: {
                Authorization: process.env.REACT_APP_FORTNITE_UID_KEY,
              },
            })
              .then((res) => res.json())
              .then(function (response) {
                //more errors
                if (response.account_id === undefined) {
                  settoponehundrederror("ERROR: INVALID EPIC ACCOUNT NAME");
                } else {
                  const cupname = document.querySelector(
                    ".clickedTournamentSectionTitle"
                  ).innerHTML;
                  //find/create the firebase doc
                  const betsDB = firestore.doc(
                    "users/" +
                      auth.currentUser.uid +
                      "pointsNumber/bets/" +
                      cupname +
                      "PlaceTop100"
                  );
                  const stringifyeduid = JSON.stringify(
                    response.account_id
                  ).replace(/"/g, "");

                  //set the data in the firebase doc
                  betsDB
                    .set({
                      playerUid: stringifyeduid,
                      coinAmount: coinTopHundredAmount,
                      playerName: nameTopOneHundred,
                      betplaced: true,
                    })
                    .then(function () {
                      //take away the bet placed
                      pointOfficialNumber.update({
                        pointsNumber: firebase.firestore.FieldValue.increment(
                          -coinTopHundredAmount
                        ),
                      });
                    })
                    // call the success message function
                    .then(function () {
                      alreadybetfunctionTopHundred();
                    })
                    .catch((error) => {
                      settoponehundrederror(
                        "An error occurred on our end, please try again."
                      );
                    });
                }
              });
          }
        });
      } else {
        //Nothing will happen
      }
    });
  }
  function sectionLoadFortniteBettingTopHundred() {
    const cupname = document.querySelector(
      ".clickedTournamentSectionTitle"
    ).innerHTML;
    const outrightCupBetChecker = firestore.doc(
      "users/" +
        auth.currentUser.uid +
        "pointsNumber/bets/" +
        cupname +
        "PlaceTop100"
    );

    outrightCupBetChecker.get().then((doc) => {
      if (doc.exists) {
        if (doc.data().betplaced == true) {
          alreadybetfunctionTopHundred();
          $("#toponehundrederrorHTML").html("");
        }
      } else {
        $(
          "#playerNameLableFortniteTopHundred, #coinamountTopHundred, #tooplaceTopHundred, #ifYourBetIsSUCCESSFULTopHundred"
        ).css("display", "block");
        $(
          "#inputForFortnieBRBettingSectionHundred, #inputForFortnieBRBettingSectionHundredSecond"
        ).show();
      }
    });
  }
  function alreadybetfunctionTopHundred() {
    const cupname = document.querySelector(
      ".clickedTournamentSectionTitle"
    ).innerHTML;
    $(
      "#playerNameLableFortniteTopHundred, #coinamountTopHundred, #tooplaceTopHundred, #ifYourBetIsSUCCESSFULTopHundred"
    ).css("display", "none");
    $(
      "#inputForFortnieBRBettingSectionHundred, #inputForFortnieBRBettingSectionHundredSecond"
    ).hide();
    //find the data from firebase
    const getBetData = firestore.doc(
      "users/" +
        auth.currentUser.uid +
        "pointsNumber/bets/" +
        cupname +
        "PlaceTop100"
    );
    getBetData.get().then((doc) => {
      if (doc.exists) {
        //fetch the Epic Account Name
        getBetData.get().then((doc) => {
          if (doc.exists) {
            const coinData = JSON.stringify(doc.data().coinAmount);
            const playerName = JSON.stringify(doc.data().playerName);
            //fetch the Epic Account Name
            const fortnitemessageSuccessContainereal = document.querySelector(
              "#successMessageTopOneHundred"
            );
            fortnitemessageSuccessContainereal.innerHTML =
              "BET SUCCESSFULL: " +
              playerName +
              " to place top 100 in" +
              cupname +
              " with " +
              coinData +
              " coin(s) ";
          }
        });
      }
    });
  }

  //CUSTOM BET PLACMENT
  //CUSTOM BET PLACEMENT
  //CUSTOM BET PLACEMENT
  //CUSTOM BET PLACEMENT
  const [customplaceError, setcustomplaceError] = useState();
  const customPlaceNameRef = useRef();
  const customPlaceAmountRef = useRef();
  const customPlacePositionRef = useRef();

  function customPlacementHandleSubmit(e) {
    e.preventDefault();
    const nameCustom = customPlaceNameRef.current.value;
    const coinCustomAmount = customPlaceAmountRef.current.value;
    const placementCustom = customPlacePositionRef.current.value;

    //error section
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const pointOfficialNumber = firestore.doc(
          "users/" + auth.currentUser.uid + "pointsNumber"
        );
        pointOfficialNumber.get().then((doc) => {
          if (doc.data().pointsNumber < coinCustomAmount) {
            return setcustomplaceError(
              "ERROR: YOU DO NOT HAVE ENOUGH COINS, TRY PLAYING MINIGAMES"
            );
          }
          if (
            coinCustomAmount.length < 1 ||
            nameCustom.length < 1 ||
            placementCustom.length < 1
          ) {
            return setcustomplaceError("ERROR: FILL IN ALL FIELDS.");
          }
          if (coinCustomAmount.includes("-") === true) {
            return setcustomplaceError(
              "ERROR: COIN AMOUNT MUST NOT HAVE - OR +"
            );
          }
          if (coinCustomAmount === "0") {
            return setcustomplaceError("YOU CANT BET 0 COINS ?!?!?");
          }
          if (placementCustom === "1") {
            return setcustomplaceError(
              "USE 'TO OUTRIGHT WIN' TO BET FOR FIRST PLACE."
            );
          }
          if (placementCustom > 100) {
            return setcustomplaceError(
              "YOU CAN ONLY BET FOR A TOP 100 PLACEMENT"
            );
          } else {
            //find the users UID
            fetch(process.env.REACT_APP_FORTNITE_UID_URL + nameCustom, {
              method: "GET",
              headers: {
                Authorization: process.env.REACT_APP_FORTNITE_UID_KEY,
              },
            })
              .then((res) => res.json())
              .then(function (response) {
                //more errors
                if (response.account_id === undefined) {
                  setcustomplaceError("ERROR: INVALID EPIC ACCOUNT NAME");
                } else {
                  const cupname = document.querySelector(
                    ".clickedTournamentSectionTitle"
                  ).innerHTML;
                  //find/create the firebase doc
                  const betsDB = firestore.doc(
                    "users/" +
                      auth.currentUser.uid +
                      "pointsNumber/bets/" +
                      cupname +
                      "CustomPlacement"
                  );
                  const stringifyeduid = JSON.stringify(
                    response.account_id
                  ).replace(/"/g, "");

                  //set the data in the firebase doc
                  betsDB
                    .set({
                      playerUid: stringifyeduid,
                      coinAmount: coinCustomAmount,
                      playerName: nameCustom,
                      placement: placementCustom,
                      betplaced: true,
                    })
                    .then(function () {
                      //take away the bet placed
                      pointOfficialNumber.update({
                        pointsNumber: firebase.firestore.FieldValue.increment(
                          -coinCustomAmount
                        ),
                      });
                    })
                    // call the success message function
                    .then(function () {
                      alreadybetfunctionCustomPlacement();
                    })
                    .catch((error) => {
                      setcustomplaceError(
                        "An error occurred on our end, please try again."
                      );
                    });
                }
              });
          }
        });
      } else {
        //Nothing will happen
      }
    });
  }
  function sectionLoadFortniteBettingCustomPlacement() {
    const cupname = document.querySelector(
      ".clickedTournamentSectionTitle"
    ).innerHTML;
    const outrightCupBetChecker = firestore.doc(
      "users/" +
        auth.currentUser.uid +
        "pointsNumber/bets/" +
        cupname +
        "CustomPlacement"
    );

    outrightCupBetChecker.get().then((doc) => {
      if (doc.exists) {
        if (doc.data().betplaced == true) {
          alreadybetfunctionCustomPlacement();
          $("#customplacementErrorHTML").html("");
        }
      } else {
        $(
          "#playerNameLableFortniteCustom, #coinamountCustom, #customplacementsubmitbtn, #ifYourBetIsSUCCESSFULCustom, .placementaddition"
        ).css("display", "block");
        $(
          "#inputForFortnieBRBettingSectionCustom, #inputForFortnieBRBettingSectionCustomSecond, #inputForFortnieBRBettingSectionCustomThird"
        ).show();
      }
    });
  }
  function alreadybetfunctionCustomPlacement() {
    const cupname = document.querySelector(
      ".clickedTournamentSectionTitle"
    ).innerHTML;
    $(
      "#playerNameLableFortniteCustom, #coinamountCustom, #customplacementsubmitbtn, #ifYourBetIsSUCCESSFULCustom, .placementaddition"
    ).css("display", "none");
    $(
      "#inputForFortnieBRBettingSectionCustom, #inputForFortnieBRBettingSectionCustomSecond, #inputForFortnieBRBettingSectionCustomThird"
    ).hide();
    //find the data from firebase
    const getBetData = firestore.doc(
      "users/" +
        auth.currentUser.uid +
        "pointsNumber/bets/" +
        cupname +
        "CustomPlacement"
    );
    getBetData.get().then((doc) => {
      if (doc.exists) {
        const coinData = JSON.stringify(doc.data().coinAmount);
        const placement = JSON.stringify(doc.data().placement);
        const playerName = JSON.stringify(doc.data().playerName);
        //fetch the Epic Account Name
        const fortnitemessageSuccessContainereal = document.querySelector(
          "#successMessageCustom"
        );
        fortnitemessageSuccessContainereal.innerHTML =
          "BET SUCCESSFULL: " +
          playerName +
          " to place " +
          placement +
          " in " +
          cupname +
          " with " +
          coinData +
          " coin(s) ";
      }
    });
  }
  return (
    <div>
      <SportsHeader />
      <div className="stats" id="stats"></div>
      <section className="upcommingtounramentssection">
        <div className="upcommingtounramentdiv">
          <div className="upcommingTournament" id="upcommingtournamentfirst">
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
          <div className="upcommingTournament" id="upcommingtournamentsecond">
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
          <div className="upcommingTournament" id="upcommingtournamentthird">
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
          <div className="upcommingTournament" id="upcommingtournamentfourth">
            <img
              src=""
              id="lasttournamentposter"
              alt="bottomrighttournament"
              className="tournamentposterClass"
            />
            <h1 className="tournamenttitle" id="fourthtournamentlineone">
              Loading...
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
      <section className="findaPlayer">
        <form className="formforsearch" onSubmit={clickedsearch}>
          <input
            className="searchforPlayer"
            placeholder="FIND PLAYER"
            ref={usernameRef}
          />
          <div className="rightside">
            <button
              className="searchbutton"
              style={{ position: "relative" }}
              type="submit"
            >
              <h2 className="searchforPlayerLabel">SEARCH</h2>
            </button>{" "}
          </div>{" "}
        </form>
      </section>
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
        <section className="onlyShownOnEventClick" style={{ display: "none" }}>
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
                Choose the player(s) you expect to place in the certain spot on
                the leaderboard.
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
            IMPORTANT: For any team-mode bets you should only select one players
            name. <br />
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
            <form onSubmit={handleOutrightSubmit}>
              <input
                className="inputForFortnieBRBettingSection"
                id="inputForFortnieBRBettingSectionOutrightSecond"
                placeholder="NRG BENJYFISHY"
                type="name"
                ref={outrightwinNameRef}
              />
              <input
                className="inputForFortnieBRBettingSection"
                id="inputForFortnieBRBettingSectionOutright"
                type="number"
                placeholder=""
                ref={outrightwinCoinRef}
              />

              <button
                type="submit"
                className="tooutrightwinTOURNAMENTNAME"
                id="tooutrightwinTOURNAMENTNAMEOutright"
              >
                Confirm to outright win (irreversible)
              </button>
            </form>
            {error && (
              <div
                className="fortniteBrContainerErrorContainer"
                id="toourightwinErrorCont"
              >
                {error}
              </div>
            )}
            <div
              className="fortniteBrContainerErrorContainer fortniteSuccessMessage"
              id="fortnitemessageSuccessContainereal"
            ></div>
          </div>

          {/*TO PLACE TOP 100 SECTION*/}
          {/*TO PLACE TOP 100 SECTION*/}
          {/*TO PLACE TOP 100 SECTION*/}
          <div className="fortniteBRBettingSectionContainer">
            <h3 className="fortniteBRBettingSectionTitle">TO PLACE TOP 100</h3>
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
            <form onSubmit={handleTop100Submit}>
              <input
                className="inputForFortnieBRBettingSection"
                id="inputForFortnieBRBettingSectionHundred"
                placeholder="Falcon TaySon 7"
                type="name"
                ref={topOneHundredNameRef}
              />
              <input
                className="inputForFortnieBRBettingSection"
                id="inputForFortnieBRBettingSectionHundredSecond"
                type="number"
                placeholder=""
                ref={topOneHundredCoinRef}
              />

              <button
                type="submit"
                className="tooutrightwinTOURNAMENTNAME"
                id="tooplaceTopHundred"
              >
                Confirm to place top 100 (irreversible)
              </button>
            </form>
            {toponehundrederror && (
              <div
                className="fortniteBrContainerErrorContainer"
                id="toponehundrederrorHTML"
              >
                {toponehundrederror}
              </div>
            )}
            <div
              className="fortniteBrContainerErrorContainer fortniteSuccessMessage"
              id="successMessageTopOneHundred"
            ></div>
          </div>

          {/*TO PLACE __*/}
          {/*TO PLACE __*/}
          {/*TO PLACE __*/}
          <div className="fortniteBRBettingSectionContainer">
            <h3 className="fortniteBRBettingSectionTitle">CUSTOM PLACEMENT</h3>
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
            <form onSubmit={customPlacementHandleSubmit}>
              <input
                className="inputForFortnieBRBettingSection"
                id="inputForFortnieBRBettingSectionCustom"
                placeholder="Heretics K1nzеll"
                type="name"
                ref={customPlaceNameRef}
              />
              <input
                className="inputForFortnieBRBettingSection"
                id="inputForFortnieBRBettingSectionCustomSecond"
                type="number"
                placeholder=""
                ref={customPlaceAmountRef}
              />
              <p className="placementaddition">PLACEMENT:</p>
              <input
                className="inputForFortnieBRBettingSection"
                id="inputForFortnieBRBettingSectionCustomThird"
                type="number"
                placeholder="4th"
                ref={customPlacePositionRef}
              />

              <button
                type="submit"
                className="tooutrightwinTOURNAMENTNAME"
                id="customplacementsubmitbtn"
              >
                Confirm custom placement
              </button>
            </form>
            {customplaceError && (
              <div
                className="fortniteBrContainerErrorContainer"
                id="customplacementErrorHTML"
              >
                {customplaceError}
              </div>
            )}
            <div
              className="fortniteBrContainerErrorContainer fortniteSuccessMessage"
              id="successMessageCustom"
            ></div>
          </div>
        </section>
      </section>
      <section
        className="playerstatssection"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/fortniteimage.jpg"
          })`,
          display: "none",
        }}
      >
        <section className="outsideBorder"></section>
        <div className="overallbox">
          <div className="toptitlecontainer">
            <h1 className="overallheaderh1">OVERALL STATS</h1>
          </div>
          <h1 className="accountName" id="accountName">
            Loading...
          </h1>
          <section className="winswinpercentkdkpmcontainer">
            <div className="sectionLeftLeftUpper" id="overallwins"></div>
            <div
              className="sectionLeftRightUpper"
              id="overallwinpercentage"
            ></div>
            <div className="sectionRightLeftUpper" id="overallkd"></div>
            <div className="sectionRightRightUpper" id="overallkpm"></div>
          </section>
          <section className="winswinpercentkdkpmcontainersecond">
            <div className="sectionLeftLeft">WINS</div>
            <div className="sectionLeftRight">WIN %</div>
            <div className="sectionRightLeft">K/D</div>
            <div className="sectionRightRight">KPM</div>
          </section>
          <section className="winswinpercentkdkpmcontainerthird">
            <div
              className="sectionLeftLeftUpper threecolumnsizing"
              id="overallmatchnumber"
            ></div>
            <div
              className="sectionLeftRightUpper threecolumnsizing middlePositionchanger"
              id="overallkillnumber"
            ></div>
            <div
              className="sectionRightLeftUpper threecolumnsizing"
              id="overalldeathnumber"
            ></div>
          </section>
          <section className="winswinpercentkdkpmcontainerfourth">
            <div className="sectionLeftLeftBelow matchespositioner">
              MATCHES
            </div>
            <div className="sectionLeftRightBelow middlePositionchanger secondarymiddlerchanger">
              KILLS
            </div>
            <div className="sectionRightLeftBelow deathsPositioner">DEATHS</div>
          </section>
        </div>
        <div className="overallRightSection">
          <section className="sectionForGameMode">
            <section className="toptitlecontainer soloblue">
              <h1 className="overallheaderh1">SOLOS</h1>
            </section>
            <section className="titlestats" style={{ display: "flex" }}>
              <div className="sectionforstatvalues" id="soloWinAmount"></div>
              <div
                className="sectionforstatvalues"
                id="soloWinPercentage"
              ></div>
              <div className="sectionforstatvalues" id="soloKillAmount"></div>
              <div className="sectionforstatvalues" id="soloDeathAmount"></div>
              <div className="sectionforstatvalues" id="soloRatio"></div>
            </section>

            <section className="titlestats" style={{ display: "flex" }}>
              <div className="sectionforstatvalues sectionforstattitles bluecolor">
                WINS
              </div>
              <div className="sectionforstatvalues sectionforstattitles bluecolor">
                WIN %
              </div>
              <div className="sectionforstatvalues sectionforstattitles bluecolor">
                {" "}
                KILLS
              </div>
              <div className="sectionforstatvalues sectionforstattitles bluecolor deathpositioner">
                DEATHS{" "}
              </div>
              <div className="sectionforstatvalues sectionforstattitles bluecolor kdpositioner">
                K/D
              </div>
            </section>
          </section>
          <section className="sectionForGameMode">
            <section className="toptitlecontainer duoorange">
              <h1 className="overallheaderh1">DUOS</h1>
            </section>
            <section className="titlestats" style={{ display: "flex" }}>
              <div className="sectionforstatvalues" id="duoWinAmount"></div>
              <div className="sectionforstatvalues" id="duoWinPercentage"></div>
              <div className="sectionforstatvalues" id="duoKillAmount"></div>
              <div className="sectionforstatvalues" id="duoDeathAmount"></div>
              <div className="sectionforstatvalues" id="duoRatio"></div>
            </section>

            <section className="titlestats" style={{ display: "flex" }}>
              <div className="sectionforstatvalues sectionforstattitles orangecolor">
                WINS
              </div>
              <div className="sectionforstatvalues sectionforstattitles orangecolor">
                WIN %
              </div>
              <div className="sectionforstatvalues sectionforstattitles orangecolor">
                {" "}
                KILLS
              </div>
              <div className="sectionforstatvalues sectionforstattitles orangecolor deathpositioner">
                DEATHS{" "}
              </div>
              <div className="sectionforstatvalues sectionforstattitles orangecolor kdpositioner">
                K/D
              </div>
            </section>
          </section>
          <section className="sectionForGameMode">
            <section className="toptitlecontainer squadpurple">
              <h1 className="overallheaderh1">SQUADS</h1>
            </section>
            <section className="titlestats" style={{ display: "flex" }}>
              <div className="sectionforstatvalues" id="squadWinAmount"></div>
              <div
                className="sectionforstatvalues"
                id="squadWinPercentage"
              ></div>
              <div className="sectionforstatvalues" id="squadKillAmount"></div>
              <div className="sectionforstatvalues" id="squadDeathAmount"></div>
              <div className="sectionforstatvalues" id="squadRatio"></div>
            </section>

            <section className="titlestats" style={{ display: "flex" }}>
              <div className="sectionforstatvalues sectionforstattitles purplecolor">
                WINS
              </div>
              <div className="sectionforstatvalues sectionforstattitles purplecolor">
                WIN %
              </div>
              <div className="sectionforstatvalues sectionforstattitles purplecolor">
                {" "}
                KILLS
              </div>
              <div className="sectionforstatvalues sectionforstattitles purplecolor deathpositioner">
                DEATHS{" "}
              </div>
              <div className="sectionforstatvalues sectionforstattitles purplecolor kdpositioner">
                K/D
              </div>
            </section>
          </section>
        </div>
      </section>
      <div
        className="removestat"
        style={{ display: "none" }}
        onClick={closestatmenu}
      ></div>
    </div>
  );
}
