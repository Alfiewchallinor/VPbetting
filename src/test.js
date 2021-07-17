import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { auth } from "./firebase";
import $ from "jquery";
import Stats from "./components/pages/sports/FortniteComponents/Stats"
var firestore = firebase.firestore();

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournamentData: [],
      tournamentLoaded: false,
      tournamentName: '',
      outrightSuccessMessage: '',
      outrightErrorMessage: '',
      top100SuccessMessage: '',
      top100ErrorMessage: '',
      customSuccessMessage: '',
      customErrorMessage: '',
    };

    this.cupClicked = this.cupClicked.bind(this)
  }

  componentDidMount() {
    fetch("https://fortniteapi.io/v1/events/list?lang=en&region=EU", {
      method: "GET",
      headers: {
        Authorization: process.env.REACT_APP_UPCOMMING_TOURNAMENT_KEY,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          tournamentData: json,
          tournamentLoaded: true,
        });
      });
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
            $(".clickedTournamentSectionTitle").html(box1linetop + " " + box1linetwo);
          });
          $("#upcommingtournamentsecond").click(function () {
            $(".clickedTournamentSectionTitle").html(box2linetop + " " + box2linetwo);
          });
          $("#upcommingtournamentthird").click(function () {
            $(".clickedTournamentSectionTitle").html(box3linetop + " " + box3linetwo);
          });
          $("#upcommingtournamentfourth").click(function () {
            $(".clickedTournamentSectionTitle").html(box4linetop + " " + box4linetwo);
          });
        } else {
        }
      });
    }
  };
  cupClicked() {
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
    this.setState({
      outrightSuccessMessage: '',
      outrightErrorMessage: '',
      top100SuccessMessage: '',
      top100ErrorMessage: '',
      customSuccessMessage: '',
      customErrorMessage: '',
      tournamentName: $(".clickedTournamentSectionTitle").html(),
    })
  }

  render() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        $(".selectTournament").html("SELECT A CUP TO BEGIN BETTING");
      } else {
        $(".selectTournament").html("YOU MUST BE LOGGED INTO BET COINS");
        $(".selectTournament").css("color", "red");
      }
    });
    console.log(this.state.tournamentName)
    return (
      <div onLoad={this.loadedcomponentDidMount()}>
        <div className="stats" id="stats"></div>
        <section className="upcommingtounramentssection">
          <div className="upcommingtounramentdiv">
            <div
              className="upcommingTournament"
              id="upcommingtournamentfirst"
              onClick={this.cupClicked}
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
        <Stats />
      </div>
    );
  }
}