import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from "firebase";
import { auth } from "../../../firebase";
import $ from "jquery";
var jp = require("jsonpath")
var firestore = firebase.firestore();


export default class Football extends Component {
  constructor(props) {
    super(props)
    this.state = {
      matchesData: [],
      matchesDataLoaded: false,
      tournamentOverallName: '',

      currentCoinCount: '',

      team1: '',
      team2: '',

      matchTitle: '',
      matchId: '',
      officialTeam1: '',
      officialTeam2: '',

      outrightFootballTeamName: '',
      outrightFootballCoinAmount: '',
      outrightErrorMessage: '',
      outrightSuccessMessage: '',

      drawFootballCoinAmount: '',
      drawErrorMessage: '',
      drawSuccessMessage: '',

      firstScoreFootballTeamName: '',
      firstScoreFootballCoinAmount: '',
      firstScoreErrorMessage: '',
      firstScoreSuccessMessage: '',
      
      desc1: 'LOADING...',
      desc2: 'LOADING...',
      desc3: 'LOADING...',
      desc4: 'LOADING...',
      desc5: 'LOADING...',
      desc6: 'LOADING...',
      desc7: 'LOADING...',
      desc8: 'LOADING...',
      desc9: 'LOADING...',
      desc10: 'LOADING...',

      teams1: '',
      teams2: '',
      teams3: '',
      teams4: '',
      teams5: '',
      teams6: '',
      teams7: '',
      teams8: '',
      teams9: '',
      teams10: '',

      time1: '',
      time2: '',
      time3: '',
      time4: '',
      time5: '',
      time6: '',
      time7: '',
      time8: '',
      time9: '',
      time10: '',
    }
    this.displayMatchesData = this.displayMatchesData.bind(this);
    this.displayCoinData = this.displayCoinData.bind(this);
    this.onMatchClick = this.onMatchClick.bind(this);
    this.showBottomSection = this.showBottomSection.bind(this);

    this.handleoutrightNameChange = this.handleoutrightNameChange.bind(this);
    this.handleoutrightCoinChange = this.handleoutrightCoinChange.bind(this);
    this.handleFootballOutrightSubmit = this.handleFootballOutrightSubmit.bind(this);

    this.drawCoinChange = this.drawCoinChange.bind(this);
    this.handleFootballdrawSubmit = this.handleFootballdrawSubmit.bind(this);

    this.handlefirstScoreNameChange = this.handlefirstScoreNameChange.bind(this);
    this.handlefirstScoreCoinChange = this.handlefirstScoreCoinChange.bind(this);
    this.handlefirstScoreSubmit = this.handlefirstScoreSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED&matchday=1", {
      method: "GET",
      headers: {
        "X-Auth-Token": "a6affcc783b64e789071f6f66d3ba93d"
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          matchesData: json.matches,
          matchesDataLoaded: true,
          tournamentOverallName: json.competition.name + " matchday: " + json.filters.matchday
        })
      }).then(() => {
        this.displayCoinData();
        this.displayMatchesData();
      })
  }
  displayCoinData() {
    const currentCoinCountFirestoreDoc = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber");
    currentCoinCountFirestoreDoc.get().then((doc) => {
      this.setState({
        currentCoinCount: doc.data().pointsNumber
      });
    });
  }
  displayMatchesData() {
    const matchRef = this.state.matchesData

    const initialTime1 = (matchRef[0].utcDate).slice(5, 16);
    const secondTime1 = initialTime1.replace("T", " ");

    const initialTime2 = (matchRef[1].utcDate).slice(5, 16);
    const secondTime2 = initialTime2.replace("T", " ");

    const initialTime3 = (matchRef[2].utcDate).slice(5, 16);
    const secondTime3 = initialTime3.replace("T", " ");

    const initialTime4 = (matchRef[3].utcDate).slice(5, 16);
    const secondTime4 = initialTime4.replace("T", " ");

    const initialTime5 = (matchRef[4].utcDate).slice(5, 16);
    const secondTime5 = initialTime5.replace("T", " ");

    const initialTime6 = (matchRef[5].utcDate).slice(5, 16);
    const secondTime6 = initialTime6.replace("T", " ");

    const initialTime7 = (matchRef[6].utcDate).slice(5, 16);
    const secondTime7 = initialTime7.replace("T", " ");

    const initialTime8 = (matchRef[7].utcDate).slice(5, 16);
    const secondTime8 = initialTime8.replace("T", " ");

    const initialTime9 = (matchRef[8].utcDate).slice(5, 16);
    const secondTime9 = initialTime9.replace("T", " ");

    const initialTime10 = (matchRef[9].utcDate).slice(5, 16);
    const secondTime10 = initialTime10.replace("T", " ");

    this.setState({
      desc1: '',
      desc2: '',
      desc3: '',
      desc4: '',
      desc5: '',
      desc6: '',
      desc7: '',
      desc8: '',
      desc9: '',
      desc10: '',

      teams1: matchRef[0].homeTeam.name + " VS " + matchRef[0].awayTeam.name,
      time1: "Scheduled At: " + secondTime1.replace("-", "/") + " GMT",

      teams2: matchRef[1].homeTeam.name + " VS " + matchRef[1].awayTeam.name,
      time2: "Scheduled At: " + secondTime2.replace("-", "/") + " GMT",

      teams3: matchRef[2].homeTeam.name + " VS " + matchRef[2].awayTeam.name,
      time3: "Scheduled At: " + secondTime3.replace("-", "/") + " GMT",

      teams4: matchRef[3].homeTeam.name + " VS " + matchRef[3].awayTeam.name,
      time4: "Scheduled At: " + secondTime4.replace("-", "/") + " GMT",

      teams5: matchRef[4].homeTeam.name + " VS " + matchRef[4].awayTeam.name,
      time5: "Scheduled At: " + secondTime5.replace("-", "/") + " GMT",

      teams6: matchRef[5].homeTeam.name + " VS " + matchRef[5].awayTeam.name,
      time6: "Scheduled At: " + secondTime6.replace("-", "/") + " GMT",

      teams7: matchRef[6].homeTeam.name + " VS " + matchRef[6].awayTeam.name,
      time7: "Scheduled At: " + secondTime7.replace("-", "/") + " GMT",

      teams8: matchRef[7].homeTeam.name + " VS " + matchRef[7].awayTeam.name,
      time8: "Scheduled At: " + secondTime8.replace("-", "/") + " GMT",

      teams9: matchRef[8].homeTeam.name + " VS " + matchRef[8].awayTeam.name,
      time9: "Scheduled At: " + secondTime9.replace("-", "/") + " GMT",

      teams10: matchRef[9].homeTeam.name + " VS " + matchRef[9].awayTeam.name,
      time10: "Scheduled At: " + secondTime10.replace("-", "/") + " GMT",
    })
    this.onMatchClick()
  }
  onMatchClick() {
    const matchRef = this.state.matchesData;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        $("#matchOne").click(() => {
          this.showBottomSection()
          this.setState({
            matchId: matchRef[0].id,
            matchTitle: this.state.teams1,
            officialTeam1: matchRef[0].homeTeam.name,
            officialTeam2: matchRef[0].awayTeam.name,
          })
        })
        $("#matchTwo").click(() => {
          this.showBottomSection()
          this.setState({
            matchId: matchRef[1].id,
            matchTitle: this.state.teams2,
            officialTeam1: matchRef[1].homeTeam.name,
            officialTeam2: matchRef[1].awayTeam.name,
          })
        })
        $("#matchThree").click(() => {
          this.showBottomSection()
          this.setState({
            matchId: matchRef[2].id,
            matchTitle: this.state.teams3,
            officialTeam1: matchRef[2].homeTeam.name,
            officialTeam2: matchRef[2].awayTeam.name,
          })
        })
        $("#matchFour").click(() => {
          this.showBottomSection()
          this.setState({
            matchId: matchRef[3].id,
            matchTitle: this.state.teams4,
            officialTeam1: matchRef[3].homeTeam.name,
            officialTeam2: matchRef[3].awayTeam.name,
          })
        })
        $("#matchFive").click(() => {
          this.showBottomSection()
          this.setState({
            matchId: matchRef[4].id,
            matchTitle: this.state.teams5,
            officialTeam1: matchRef[4].homeTeam.name,
            officialTeam2: matchRef[4].awayTeam.name,
          })
        })
        $("#matchSix").click(() => {
          this.showBottomSection()
          this.setState({
            matchId: matchRef[5].id,
            matchTitle: this.state.teams6,
            officialTeam1: matchRef[5].homeTeam.name,
            officialTeam2: matchRef[5].awayTeam.name,
          })
        })
        $("#matchSeven").click(() => {
          this.showBottomSection()
          this.setState({
            matchId: matchRef[6].id,
            matchTitle: this.state.teams7,
            officialTeam1: matchRef[6].homeTeam.name,
            officialTeam2: matchRef[6].awayTeam.name,
          })
        })
        $("#matchEight").click(() => {
          this.showBottomSection()
          this.setState({
            matchId: matchRef[7].id,
            matchTitle: this.state.teams8,
            officialTeam1: matchRef[7].homeTeam.name,
            officialTeam2: matchRef[7].awayTeam.name,
          })
        })
        $("#matchNine").click(() => {
          this.showBottomSection()
          this.setState({
            matchId: matchRef[8].id,
            matchTitle: this.state.teams9,
            officialTeam1: matchRef[8].homeTeam.name,
            officialTeam2: matchRef[8].awayTeam.name,
          })
        })
        $("#matchTen").click(() => {
          this.showBottomSection()
          this.setState({
            matchId: matchRef[9].id,
            matchTitle: this.state.teams10,
            officialTeam1: matchRef[9].homeTeam.name,
            officialTeam2: matchRef[9].awayTeam.name,
          })
        })
      }
    });
  };
  showBottomSection() {
    $(".imagebackgroundValorantContainer").css("display", "none");
    $(".leagueBettingSectionAfter").css("display", "block");
    this.setState({
      outrightErrorMessage: '',
      outrightSuccessMessage: '',
    })
  }
  handleoutrightNameChange(e) {
    this.setState({ outrightFootballTeamName: e.target.value })
  }
  handleoutrightCoinChange(e) {
    this.setState({ outrightFootballCoinAmount: e.target.value })
  }

  handleFootballOutrightSubmit(e) {
    const officialTeam1 = this.state.officialTeam1;
    const officialTeam2 = this.state.officialTeam2;
    const teamName = this.state.outrightFootballTeamName;
    const coinAmount = this.state.outrightFootballCoinAmount;
    const matchId = this.state.matchId
    e.preventDefault();
    const pastBet = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber/FootballBets/" + matchId + "OutrightWin");
    pastBet.get().then((doc) => {
      if (doc.exists) {
        return this.setState({ outrightErrorMessage: "ERROR: YOU HAVE ALREADY BET ON THIS MATCH:  " + doc.data().ToWin + " TO WIN WITH " + doc.data().coinAmount + " COIN(S) " })
      }
      if (coinAmount > this.state.currentCoinCount) {
        return this.setState({ outrightErrorMessage: "ERROR: YOU DO NOT HAVE ENOUGH COINS" })
      }
      if (coinAmount.includes("-")) {
        return this.setState({ outrightErrorMessage: "ERROR: YOU CANNOT BET - COINS?!?!?" })
      }
      if (teamName !== officialTeam1 && teamName !== officialTeam2) {
        return this.setState({ outrightErrorMessage: "ERROR: YOU CAN ONLY BET FOR " + officialTeam1 + " OR " + officialTeam2 + " (capital letters included)" })
      }
      if (coinAmount === "0") {
        return this.setState({ outrightErrorMessage: "ERROR: YOU CAN'T BET 0 COINS?!?!?" })
      } else {
        pastBet.set({
          ToWin: teamName,
          MatchId: matchId,
          coinAmount: coinAmount
        }).then(() => {
          const pointNumber = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber");
          pointNumber.update({
            pointsNumber: firebase.firestore.FieldValue.increment(-coinAmount)
          })
        }).then(() => {
          this.setState({
            outrightErrorMessage: '',
            outrightSuccessMessage: "BET ADDED: " + teamName + " TO WIN IN " + this.state.matchTitle + " WITH " + coinAmount + " COIN(s)",
            currentCoinCount: this.state.currentCoinCount - coinAmount
          })
        })
      }
    })
  }

  handlefirstScoreNameChange(e) {
    return this.setState({ firstScoreFootballTeamName: e.target.value })
  }
  handlefirstScoreCoinChange(e) {
    return this.setState({ firstScoreFootballCoinAmount: e.target.value })
  }

  handlefirstScoreSubmit(e) {
    e.preventDefault();
    
    const officialTeam1 = this.state.officialTeam1;
    const officialTeam2 = this.state.officialTeam2;
    const teamName = this.state.firstScoreFootballTeamName;
    const coinAmount = this.state.firstScoreFootballCoinAmount;
    const matchId = this.state.matchId;
    const pastBet = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber/FootballBets/" + matchId + "scoreFirst");
    pastBet.get().then((doc) => {
      if(doc.exists) {
        return this.setState({ firstScoreErrorMessage: 'ERROR: YOU HAVE ALREADY BET FOR THIS MATCH: ' + doc.data().scoreFirst + " TO SCORE FIRST" })
      }
      if (coinAmount > this.state.currentCoinCount) {
        return this.setState({ firstScoreErrorMessage: "ERROR: YOU DO NOT HAVE ENOUGH COINS" })
      }
      if (coinAmount.includes("-")) {
        return this.setState({ firstScoreErrorMessage: "ERROR: YOU CANNOT BET - COINS?!?!?" })
      }
      if (teamName !== officialTeam1 && teamName !== officialTeam2) {
        return this.setState({ firstScoreErrorMessage: "ERROR: YOU CAN ONLY BET FOR " + officialTeam1 + " OR " + officialTeam2 + " (capital letters included)" })
      }
      if (coinAmount === "0") {
        return this.setState({ firstScoreErrorMessage: "ERROR: YOU CAN'T BET 0 COINS?!?!?" })
      }
      else {
        pastBet.set({
          matchId: matchId,
          scoreFirst: teamName,
          coinAmount: coinAmount
        }).then(()=> {
          const pointNumber = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber");
          pointNumber.update({
            pointsNumber: firebase.firestore.FieldValue.increment(-coinAmount)
          })
        }).then(()=> {
          return this.setState({ firstScoreSuccessMessage: 'BET SUCCESSFUL: "' + teamName + '" TO SCORE FIRST',
          firstScoreErrorMessage: ''
        })
        })
      }
      })
  }

  drawCoinChange(e) {
    this.setState({ drawFootballCoinAmount: e.target.value })
  }

  handleFootballdrawSubmit(e) {
    const matchId = this.state.matchId
    const coinAmount = this.state.drawFootballCoinAmount
    e.preventDefault()
    console.log("clicked " + this.state.drawFootballCoinAmount)
    const pastBet = firestore.doc('users/' + auth.currentUser.uid + "pointsNumber/FootballBets/" + matchId + "draw")
    pastBet.get().then((doc)=> {
      if(doc.exists) {
        return this.setState({ drawErrorMessage: 'ERROR: YOU HAVE ALREADY BET FOR THIS MATCH TO DRAW:' })
      }
      if(this.state.currentCoinCount < coinAmount) {
        return this.setState({ drawErrorMessage: 'ERROR: YOU DO NOT HAVE ENOUGH COINS' })
      }
      if(coinAmount.includes('-')) {
        return this.setState({ drawErrorMessage: "ERROR: YOU CANNOT BET - COINS?!?!?" })
      }
      if(coinAmount === '0') {
        return this.setState({ drawErrorMessage: "ERROR: YOU CAN'T BET 0 COINS?!?!?" })
      }
      else {
        pastBet.set({
          coinAmount: coinAmount,
          matchId: matchId
        })
        .then(() => {
          const pointNumber = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber");
          pointNumber.update({
            pointsNumber: firebase.firestore.FieldValue.increment(-coinAmount)
          })
        }).then(()=> {
          return this.setState({ drawSuccessMessage: 'BET SUCCESSFUL: "' + this.state.matchTitle + '" TO DRAW!',
          drawErrorMessage: ''
        })
        })
      }
    })
  }

  render() {
    return (
      <div className="containerForSports">
        <div className="minigamesNumberDisplay" id="minigamesNumberGet">
          {this.state.currentCoinCount}
        </div>
        <div className="tournamentName" style={{ 'whiteSpace': 'nowrap' }}>{this.state.tournamentOverallName}</div>
        <section className="valorantupcommingtounramentssection">
          <div className="upcommingeventsWrapper" >
            <div style={{ display: "flex" }}>
              <div className="eventMatchValorant eventLoL" id="matchOne"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
                    })`, backgroundPosition: "88%, 60%"
                }}
              >
                <p className="valorantMatchDescShort" id="descriptionOne" style={{ color: 'black' }}>{this.state.desc1}</p>
                <p className="valorantMatchTeams" id="teamsOne" style={{ color: 'black' }}>{this.state.teams1}</p>
                <p className="valorantMatchTeams" id="timeOne" style={{ color: 'black' }}>{this.state.time1}</p>
              </div>
              <div
                className="dividerValorantUpcomingTournament"
                style={{ width: "1%" }}
              ></div>
              <div className="eventMatchValorant eventLoL" id="matchTwo"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
                    })`, backgroundPosition: "right"
                }}
              >
                <p className="valorantMatchDescShort" id="descriptionTwo" style={{ color: 'black' }}>{this.state.desc2}</p>
                <p className="valorantMatchTeams" id="teamsTwo" style={{ color: 'black' }}>{this.state.teams2}</p>
                <p className="valorantMatchTeams" id="timeTwo" style={{ color: 'black' }}>{this.state.time2}</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="eventMatchValorant eventLoL" id="matchThree"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
                    })`, backgroundPosition: "top-right"
                }}
              >
                <p className="valorantMatchDescShort" id="descriptionThree" style={{ color: 'black' }}>{this.state.desc3}</p>
                <p className="valorantMatchTeams" id="teamsThree" style={{ color: 'black' }}>{this.state.teams3}</p>
                <p className="valorantMatchTeams" id="timeThree" style={{ color: 'black' }}>{this.state.time3}</p>
              </div>
              <div
                className="dividerValorantUpcomingTournament"
                style={{ width: "1%" }}
              ></div>
              <div className="eventMatchValorant eventLoL" id="matchFour"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
                    })`, backgroundPosition: "99%"
                }}>
                <p className="valorantMatchDescShort" id="descriptionFour" style={{ color: 'black' }}>{this.state.desc4}</p>
                <p className="valorantMatchTeams" id="teamsFour" style={{ color: 'black' }}>{this.state.teams4}</p>
                <p className="valorantMatchTeams" id="timeFour" style={{ color: 'black' }}>{this.state.time4}</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="eventMatchValorant eventLoL" id="matchFive"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
                    })`, backgroundPosition: "right"
                }}
              >
                <p className="valorantMatchDescShort" id="descriptionFive" style={{ color: 'black' }}>{this.state.desc5}</p>
                <p className="valorantMatchTeams" id="teamsFive" style={{ color: 'black' }}>{this.state.teams5}</p>
                <p className="valorantMatchTeams" id="timeFive" style={{ color: 'black' }}>{this.state.time5}</p>

              </div>
              <div
                className="dividerValorantUpcomingTournament"
                style={{ width: "1%" }}
              ></div>
              <div className="eventMatchValorant eventLoL" id="matchSix"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
                    })`, backgroundPosition: "left"
                }}>
                <p className="valorantMatchDescShort" id="descriptionSix" style={{ color: 'black' }}>{this.state.desc6}</p>
                <p className="valorantMatchTeams" id="teamsSix" style={{ color: 'black' }}>{this.state.teams6}</p>
                <p className="valorantMatchTeams" id="timeSix" style={{ color: 'black' }}>{this.state.time6}</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="eventMatchValorant eventLoL" id="matchSeven"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
                    })`, backgroundPosition: "top-right"
                }}
              >
                <p className="valorantMatchDescShort" id="descriptionSeven" style={{ color: 'black' }}>{this.state.desc7}</p>
                <p className="valorantMatchTeams" id="teamsSeven" style={{ color: 'black' }}>{this.state.teams7}</p>
                <p className="valorantMatchTeams" id="timeSeven" style={{ color: 'black' }}>{this.state.time7}</p>
              </div>
              <div
                className="dividerValorantUpcomingTournament"
                style={{ width: "1%" }}
              ></div>
              <div className="eventMatchValorant eventLoL" id="matchEight"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
                    })`, backgroundPosition: "top-right"
                }}
              >
                <p className="valorantMatchDescShort" id="descriptionEight" style={{ color: 'black' }}>{this.state.desc8}</p>
                <p className="valorantMatchTeams" id="teamsEight" style={{ color: 'black' }}>{this.state.teams8}</p>
                <p className="valorantMatchTeams" id="timeEight" style={{ color: 'black' }}>{this.state.time8}</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="eventMatchValorant eventLoL" id="matchNine"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
                    })`, backgroundPosition: "top-right"
                }}
              >
                <p className="valorantMatchDescShort" id="descriptionNine" style={{ color: 'black' }}>{this.state.desc9}</p>
                <p className="valorantMatchTeams" id="teamsNine" style={{ color: 'black' }}>{this.state.teams9}</p>
                <p className="valorantMatchTeams" id="timeNine" style={{ color: 'black' }}>{this.state.time9}</p>
              </div>
              <div
                className="dividerValorantUpcomingTournament"
                style={{ width: "1%" }}
              ></div>
              <div className="eventMatchValorant eventLoL" id="matchTen"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
                    })`, backgroundPosition: "top-right"
                }}
              >
                <p className="valorantMatchDescShort" id="descriptionTen" style={{ color: 'black' }}>{this.state.desc10}</p>
                <p className="valorantMatchTeams" id="teamsTen" style={{ color: 'black' }}>{this.state.teams10}</p>
                <p className="valorantMatchTeams" id="timeTen" style={{ color: 'black' }}>{this.state.time10}</p>
              </div>
            </div>

          </div>
        </section>
        <div className="ValorantadvertSection">
          <div className="advertForFortnite valorantadd"><p className="displayTextIncenterforfnadd">ADS WILL BE DISPLAYED HERE</p></div>
          <div className="advertForFortnite" id="secondaryAdFortnite"><p className="displayTextIncenterforfnadd">ADS WILL BE DISPLAYED HERE</p></div>
        </div>

        <section className="bottomsectionContainer">
          <div style={{ marginLeft: "40px", marginRight: "40px" }}>
            <div className="valorantBettingSectionMargin">
              <div className="valorantBettingSection">
                <div
                  className="imagebackgroundValorantContainer"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/valorantplayers.jpg"
                      })`,
                  }}
                >
                  <p className="selectTournament"></p>

                </div>
                <div style={{ "display": "none" }} className="leagueBettingSectionAfter">
                  <p className="valorantBettingSectionTournamentTitle">
                    {this.state.matchTitle}
                  </p>
                  <div style={{ display: "flex" }}>
                    <div className="leftsectionFortniteBr leftsectionLeague" style={{ borderRightColor: '#00e600' }}>
                      <h3 className="sectionFortniteBrTitle leagueColour" style={{ color: '#00e600' }}>STEP 1</h3>

                      <p className="fortniteSectionBrExpalin">
                        Select a type of bet to choose, e.g "To Outright Win".
                      </p>
                    </div>
                    <div className="middesectionFortniteBr middlesectionLeague" style={{ borderLeftColor: '#00e600', borderRightColor: '#00e600' }}>
                      <h3 className="sectionFortniteBrTitle leagueColour" style={{ color: '#00e600' }}>STEP 2</h3>
                      <p className="fortniteSectionBrExpalin">
                        Fill in the infomation on the certain bet section and submit.
                      </p>
                    </div>
                    <div className="rightsectionFortniteBr rightsectionLeague" style={{ borderLeftColor: '#00e600' }}>
                      <h3 className="sectionFortniteBrTitle leagueColour" style={{ color: '#00e600' }}>STEP 3</h3>
                      <p className="fortniteSectionBrExpalin">
                        Wait for the result, it can take 1-2 day(s) to recieve your
                        winnings, any errors please go to our{" "}
                        <Link to="/support">
                          <span style={{ color: "#00e600'" }}>Customer Support</span>
                        </Link>.
                      </p>
                    </div>
                  </div>
                  <div className="stepdividerValorant footballColor" style={{ background: '#00e600' }}></div>

                  <div className="fortniteBRBettingSectionContainer LeagueReDContFxer" style={{ borderColor: '#00e600' }}>
                    <h3 className="fortniteBRBettingSectionTitle">TO OUTRIGHT WIN</h3>
                    <p
                      className="ifYourBetIsSUCCESSFUL leagueColour"
                      id="ifYourBetIsSUCCESSFULOutright"
                      style={{ color: '#00e600' }}
                    >
                      IF YOUR BET IS SUCCESSFUL YOU WILL RECIEVE A RETURN OF{" "}
                      <strong>2X</strong> <br />
                      There is only <strong> 1 </strong> bet per match.
                    </p>
                    <div style={{ display: "flex" }}>
                      <p
                        className="playerNameLableFortnite"
                        id="playerNameLableFortniteOutright"
                      >
                        TEAM NAME
                      </p>
                      <p
                        className="playerNameLableFortnite secondaryFortniteLable"
                        id="coinamountOutright"
                      >
                        COIN AMOUNT
                      </p>
                    </div>
                    <form onSubmit={this.handleFootballOutrightSubmit}>
                      <input
                        className="inputForFortnieBRBettingSection footballbettingSectionInput"
                        id="inputForFortnieBRBettingSectionOutrightSecond"
                        placeholder="Team name here"
                        type="name"
                        value={this.state.outrightFootballTeamName}
                        onChange={this.handleoutrightNameChange}
                      />
                      <input
                        className="inputForFortnieBRBettingSection footballbettingSectionInput"
                        id="inputForFortnieBRBettingSectionOutright"
                        type="number"
                        placeholder=""
                        value={this.state.outrightFootballCoinAmount}
                        onChange={this.handleoutrightCoinChange}
                      />

                      <button
                        type="submit"
                        className="tooutrightwinTOURNAMENTNAME"
                        id="tooutrightwinTOURNAMENTNAMEOutright"
                      >
                        Confirm to outright win (irreversible)
                      </button>
                    </form>

                    <div
                      className="fortniteBrContainerErrorContainer"
                      id="toourightwinErrorCont"
                    >{this.state.outrightErrorMessage}
                    </div>
                    <div
                      className="fortniteBrContainerErrorContainer fortniteSuccessMessage"
                      id="fortnitemessageSuccessContainereal"
                    >{this.state.outrightSuccessMessage}</div>

                  </div>

                  <div className="fortniteBRBettingSectionContainer LeagueReDContFxer" style={{ borderColor: '#00e600' }}>
                    <h3 className="fortniteBRBettingSectionTitle">TO SCORE FIRST</h3>
                    <p
                      className="ifYourBetIsSUCCESSFUL leagueColour"
                      id="ifYourBetIsSUCCESSFULOutright"
                      style={{ color: '#00e600' }}
                    >
                      IF YOUR BET IS SUCCESSFUL YOU WILL RECIEVE A RETURN OF{" "}
                      <strong>2X</strong> <br />
                      There is only <strong> 1 </strong> bet per match.
                    </p>
                    <div style={{ display: "flex" }}>
                      <p
                        className="playerNameLableFortnite"
                        id="playerNameLableFortniteOutright"
                      >
                        TEAM NAME
                      </p>
                      <p
                        className="playerNameLableFortnite secondaryFortniteLable"
                        id="coinamountOutright"
                      >
                        COIN AMOUNT
                      </p>
                    </div>
                    <form onSubmit={this.handlefirstScoreSubmit}>
                      <input
                        className="inputForFortnieBRBettingSection footballbettingSectionInput"
                        id="inputForFortnieBRBettingSectionOutrightSecond"
                        placeholder="Team name here"
                        type="name"
                        value={this.state.firstScoreFootballTeamName}
                        onChange={this.handlefirstScoreNameChange}
                      />
                      <input
                        className="inputForFortnieBRBettingSection footballbettingSectionInput"
                        id="inputForFortnieBRBettingSectionOutright"
                        type="number"
                        placeholder=""
                        value={this.state.firstScoreFootballCoinAmount}
                        onChange={this.handlefirstScoreCoinChange}
                      />

                      <button
                        type="submit"
                        className="tooutrightwinTOURNAMENTNAME"
                        id="tooutrightwinTOURNAMENTNAMEOutright"
                      >
                        Confirm to outright score first (irreversible)
                      </button>
                    </form>

                    <div
                      className="fortniteBrContainerErrorContainer"
                      id="toourightwinErrorCont"
                    >{this.state.firstScoreErrorMessage}
                    </div>
                    <div
                      className="fortniteBrContainerErrorContainer fortniteSuccessMessage"
                      id="fortnitemessageSuccessContainereal"
                    >{this.state.firstScoreSuccessMessage}</div>

                  </div>

                  <div className="fortniteBRBettingSectionContainer LeagueReDContFxer" style={{ borderColor: '#00e600' }}>
                    <h3 className="fortniteBRBettingSectionTitle">TO OUTRIGHT DRAW</h3>
                    <p
                      className="ifYourBetIsSUCCESSFUL leagueColour"
                      id="ifYourBetIsSUCCESSFULOutright"
                      style={{ color: '#00e600' }}
                    >
                      IF YOUR BET IS SUCCESSFUL YOU WILL RECIEVE A RETURN OF{" "}
                      <strong>1.4X</strong> <br />
                      There is only <strong> 1 </strong> bet per match.
                    </p>
                    <div style={{ display: "flex" }}>
                      <p
                        className="playerNameLableFortnite secondaryFortniteLable playlableFb"
                        id="coinamountOutright"
                      >
                        COIN AMOUNT
                      </p>
                    </div>
                    <form onSubmit={this.handleFootballdrawSubmit}>
                      <input
                        className="inputForFortnieBRBettingSection footballbettingSectionInput"
                        id="inputForFortnieBRBettingSectionOutright"
                        type="number"
                        placeholder=""
                        value={this.state.drawFootballCoinAmount}
                        onChange={this.drawCoinChange}
                      />

                      <button
                        type="submit"
                        className="tooutrightwinTOURNAMENTNAME"
                        id="tooutrightwinTOURNAMENTNAMEOutright"
                      >
                        Confirm to outright draw (irreversible)
                      </button>
                    </form>

                    <div
                      className="fortniteBrContainerErrorContainer"
                      id="toourightwinErrorCont"
                    >{this.state.drawErrorMessage}
                    </div>
                    <div
                      className="fortniteBrContainerErrorContainer fortniteSuccessMessage"
                      id="fortnitemessageSuccessContainereal"
                    >{this.state.drawSuccessMessage}</div>

                    </div>
                  <div className="fixBottomVaLORANTBEt"></div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <div className="makeacoolbottom"></div>
      </div>
      
    )
  }
}

