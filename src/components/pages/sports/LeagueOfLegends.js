import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from "firebase";
import { auth } from "../../../firebase";
import $ from "jquery";
var jp = require("jsonpath")
var firestore = firebase.firestore();


export default class LeagueOfLegends extends Component {
    constructor(props) {
    super(props)
        this.state = {
            tournamentDataLoaded: false,
            tournamentData: [],
            tournamentOverallName: '',
            matchesLength: '',

            currentCoinCount: '',
            gotCoinAmount: false,

            matchTitle: '',
            matchId: '',
            team1: '',
            team2: '',

            teamBetId:'',

            outrightTeamName: '',
            outrightCoinAmount: '',

            outrightErrorMessage: '',
            outrightSuccessMessage: '',
 
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

            team1: '',
            team2: ''

        }
        this.setCardsData = this.setCardsData.bind(this);
        this.displayCoinCurrentAmount = this.displayCoinCurrentAmount.bind(this);
        this.displayBettingSection = this.displayBettingSection.bind(this);
        this.handleoutrightNameChange = this.handleoutrightNameChange.bind(this);
        this.handleoutrightCoinChange =this.handleoutrightCoinChange.bind(this);
        this.handleLeagueOutrightSubmit = this.handleLeagueOutrightSubmit.bind(this);
    }
    componentDidMount() {
        ///getLeagueTournamentData for production
        fetch("/getLeagueTournamentData", {
            method: "GET",
        }).then(res => res.json())
        .then(json => {
            this.setState({
                tournamentDataLoaded: true,
                tournamentData: json[0].matches,
                teamsData: json[0].teams,
                matchesLength: json[0].matches.length,
                tournamentOverallName: 'Current Event: '+json[0].league.name
            })
        }).then(()=> {
            this.setCardsData()
            this.displayCoinCurrentAmount()
        })
        
    }
    displayCoinCurrentAmount() {
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
    setCardsData () {

        if(this.state.tournamentDataLoaded === false) {
            return;
        }
        if(this.state.tournamentDataLoaded === true) {
            const matchesLength = this.state.matchesLength;
            const data = this.state.tournamentData

            if(matchesLength <10) {
                $("#matchTen").css("display", "none")
            }
            if(matchesLength <9) {
                $("#matchNine").css("display", "none")
            }
            if(matchesLength <8) {
                $("#matchEight").css("display", "none")
            }
            if(matchesLength <7) {
                $("#matchSeven").css("display", "none")
            }
            if(matchesLength <6) {
                $("#matchSix").css("display", "none")
            }
            if(matchesLength <5) {
                $("#matchFive").css("display", "none")
            }
            if(matchesLength <4) {
                $("#matchFour").css("display", "none")
            }
            if(matchesLength <3) {
                $("#matchThree").css("display", "none")
            }
            if(matchesLength <2) {
                $("#matchTwo").css("display", "none")
            }
            if(matchesLength <1) {
                $("#matchOne").css("display", "none")
            }
            if(matchesLength > 0) {
            const Line1 = (data[0].name).split(':')[0];
            const Line2 = (data[0].name).split(': ')[1];
            const time1 = (data[0].scheduled_at)
            const time2 =  time1.slice(5,16);
          const time3 = time2.replace("T", " ")
          const finalisedTime = "Scheduled At: " + time3.replace("-", "/") +" GMT" 
          this.setState({
            desc1: Line1,
            teams1: Line2,
            time1: finalisedTime
          })
        }

        if(matchesLength > 1) {
            const Line1 = (data[1].name).split(':')[0];
            const Line2 = (data[1].name).split(': ')[1];
            const time1 = (data[1].scheduled_at)
            const time2 =  time1.slice(5,16);
          const time3 = time2.replace("T", " ")
          const finalisedTime = "Scheduled At: " + time3.replace("-", "/") +" GMT" 
          this.setState({
            desc2: Line1,
            teams2: Line2,
            time2: finalisedTime
          })
        }

        if(matchesLength > 2) {
            const Line1 = (data[2].name).split(':')[0];
            const Line2 = (data[2].name).split(': ')[1];
            const time1 = (data[2].scheduled_at)
            const time2 =  time1.slice(5,16);
          const time3 = time2.replace("T", " ")
          const finalisedTime = "Scheduled At: " + time3.replace("-", "/") +" GMT" 
          this.setState({
            desc3: Line1,
            teams3: Line2,
            time3: finalisedTime
          })
        }

        if(matchesLength > 3) {
            const Line1 = (data[3].name).split(':')[0];
            const Line2 = (data[3].name).split(': ')[1];
            const time1 = (data[3].scheduled_at)
            const time2 =  time1.slice(5,16);
          const time3 = time2.replace("T", " ")
          const finalisedTime = "Scheduled At: " + time3.replace("-", "/") +" GMT" 
          this.setState({
            desc4: Line1,
            teams4: Line2,
            time4: finalisedTime
          })
        }

        if(matchesLength > 4) {
            const Line1 = (data[4].name).split(':')[0];
            const Line2 = (data[4].name).split(': ')[1];
            const time1 = (data[4].scheduled_at)
            const time2 =  time1.slice(5,16);
          const time3 = time2.replace("T", " ")
          const finalisedTime = "Scheduled At: " + time3.replace("-", "/") +" GMT" 
          this.setState({
            desc5: Line1,
            teams5: Line2,
            time5: finalisedTime
          })
        }
        if(matchesLength > 5) {
            const Line1 = (data[5].name).split(':')[0];
            const Line2 = (data[5].name).split(': ')[1];
            const time1 = (data[5].scheduled_at)
            const time2 =  time1.slice(5,16);
          const time3 = time2.replace("T", " ")
          const finalisedTime = "Scheduled At: " + time3.replace("-", "/") +" GMT" 
          this.setState({
            desc6: Line1,
            teams6: Line2,
            time6: finalisedTime
          })
        }
        if(matchesLength > 6) {
            const Line1 = (data[6].name).split(':')[0];
            const Line2 = (data[6].name).split(': ')[1];
            const time1 = (data[6].scheduled_at)
            const time2 =  time1.slice(5,16);
          const time3 = time2.replace("T", " ")
          const finalisedTime = "Scheduled At: " + time3.replace("-", "/") +" GMT" 
          this.setState({
            desc7: Line1,
            teams7: Line2,
            time7: finalisedTime
          })
        }
        if(matchesLength > 7) {
            const Line1 = (data[7].name).split(':')[0];
            const Line2 = (data[7].name).split(': ')[1];
            const time1 = (data[7].scheduled_at)
            const time2 =  time1.slice(5,16);
          const time3 = time2.replace("T", " ")
          const finalisedTime = "Scheduled At: " + time3.replace("-", "/") +" GMT" 
          this.setState({
            desc8: Line1,
            teams8: Line2,
            time8: finalisedTime
          })
        }
        if(matchesLength > 8) {
            const Line1 = (data[8].name).split(':')[0];
            const Line2 = (data[8].name).split(': ')[1];
            const time1 = (data[8].scheduled_at)
            const time2 =  time1.slice(5,16);
          const time3 = time2.replace("T", " ")
          const finalisedTime = "Scheduled At: " + time3.replace("-", "/") +" GMT" 
          this.setState({
            desc9: Line1,
            teams9: Line2,
            time9: finalisedTime
          })
        }
        if(matchesLength > 9) {
            const Line1 = (data[9].name).split(':')[0];
            const Line2 = (data[9].name).split(': ')[1];
            const time1 = (data[9].scheduled_at)
            const time2 =  time1.slice(5,16);
          const time3 = time2.replace("T", " ")
          const finalisedTime = "Scheduled At: " + time3.replace("-", "/") +" GMT" 
          this.setState({
            desc10: Line1,
            teams10: Line2,
            time10: finalisedTime
          })
        }
            firebase.auth().onAuthStateChanged((user) => {
                if(user) {
                    $("#matchOne").click(() => {
                        if((this.state.teams1).includes("TBD")) {
                            return;
                        } else {
                            this.setState({
                              matchTitle: this.state.teams1 ,
                              matchId: this.state.tournamentData[0].id,
                              team1: (this.state.teams1).split(' vs ')[0],
                              team2: (this.state.teams1).split(' vs ')[1]
                            })
                            this.displayBettingSection();
                        }
                    })
                    $("#matchTwo").click(() => {
                        if((this.state.teams2).includes("TBD")) {
                            return console.log("dont show box") 
                        } else {
                          this.setState({
                            matchTitle: this.state.teams2 ,
                            matchId: this.state.tournamentData[1].id,
                            team1: (this.state.teams2).split(' vs ')[0],
                            team2: (this.state.teams2).split(' vs ')[1]
                          })
                          this.displayBettingSection();
                        }
                    })
                    $("#matchThree").click(() => {
                        if((this.state.teams3).includes("TBD")) {
                            return console.log("dont show box") 
                        } else {
                          this.setState({
                            matchTitle: this.state.teams3 ,
                            matchId: this.state.tournamentData[2].id,
                            team1: (this.state.teams3).split(' vs ')[0],
                            team2: (this.state.teams3).split(' vs ')[1]
                          })
                          this.displayBettingSection();
                        }
                    })
                    $("#matchFour").click(() => {
                        if((this.state.teams4).includes("TBD")) {
                            return console.log("dont show box")
                        } else {
                          this.setState({
                            matchTitle: this.state.teams4 ,
                            matchId: this.state.tournamentData[3].id,
                            team1: (this.state.teams4).split(' vs ')[0],
                            team2: (this.state.teams4).split(' vs ')[1]
                          })
                          this.displayBettingSection();
                        }
                    })
                    $("#matchFive").click(() => {
                        if((this.state.teams5).includes("TBD")) {
                            return console.log("dont show box") 
                        } else {
                          this.setState({
                            matchTitle: this.state.teams5 ,
                            matchId: this.state.tournamentData[4].id,
                            team1: (this.state.teams5).split(' vs ')[0],
                            team2: (this.state.teams5).split(' vs ')[1]
                          })
                          this.displayBettingSection();
                        }
                    })
                    $("#matchSix").click(() => {
                        if((this.state.teams6).includes("TBD")) {
                            return console.log("dont show box") 
                        } else {
                          this.setState({
                            matchTitle: this.state.teams6 ,
                            matchId: this.state.tournamentData[5].id,
                            team1: (this.state.teams6).split(' vs ')[0],
                            team2: (this.state.teams6).split(' vs ')[1]
                          })
                          this.displayBettingSection();
                        }
                    })
                    $("#matchSeven").click(() => {
                        if((this.state.teams7).includes("TBD")) {
                            return console.log("dont show box") 
                        } else {
                          this.setState({
                            matchTitle: this.state.teams7 ,
                            matchId: this.state.tournamentData[6].id,
                            team1: (this.state.teams7).split(' vs ')[0],
                            team2: (this.state.teams7).split(' vs ')[1]
                          })
                          this.displayBettingSection();
                        }
                    })
                    $("#matchEight").click(() => {
                        if((this.state.teams8).includes("TBD")) {
                            return console.log("dont show box") 
                        } else {
                          this.setState({
                            matchTitle: this.state.teams8 ,
                            matchId: this.state.tournamentData[7].id,
                            team1: (this.state.teams8).split(' vs ')[0],
                            team2: (this.state.teams8).split(' vs ')[1]
                          })
                          this.displayBettingSection();
                        }
                    })
                    $("#matchNine").click(() => {
                        if((this.state.teams9).includes("TBD")) {
                            return console.log("dont show box") 
                        } else {
                          this.setState({
                            matchTitle: this.state.teams9 ,
                            matchId: this.state.tournamentData[8].id,
                            team1: (this.state.teams9).split(' vs ')[0],
                            team2: (this.state.teams9).split(' vs ')[1]
                          })
                          this.displayBettingSection();
                        }
                    })
                    $("#matchTen").click(() => {
                        if((this.state.teams10).includes("TBD")) {
                            return console.log("dont show box") 
                        } else {
                          this.setState({
                            matchTitle: this.state.teams10 ,
                            matchId: this.state.tournamentData[9].id,
                            team1: (this.state.teams10).split(' vs ')[0],
                            team2: (this.state.teams10).split(' vs ')[1]
                          })
                          this.displayBettingSection();
                        }
                    })
                }
            })
        }
    }
    displayBettingSection() {
      $(".imagebackgroundValorantContainer").css("display", "none");
      $(".leagueBettingSectionAfter").css("display", "block");
      this.setState({
        outrightErrorMessage: '',
        outrightSuccessMessage: '',
      })
    }

    handleoutrightNameChange(e) {
      this.setState({outrightTeamName: e.target.value})
    }
    handleoutrightCoinChange(e) {
      this.setState({outrightCoinAmount: e.target.value})
    }

    handleLeagueOutrightSubmit(e) {
      e.preventDefault();
      const matchId = this.state.matchId
      const teamName = this.state.outrightTeamName;
      const coinAmount = this.state.outrightCoinAmount;
      const LoLTeamName1 =this.state.team1;
      const LoLTeamName2 = this.state.team2;
      const pastBet = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber/LoLBets/" +matchId +"OutrightWin" );
      pastBet.get().then((doc) => {
        if(doc.exists) {
          return this.setState({outrightErrorMessage: "ERROR: YOU HAVE ALREADY BET ON THIS MATCH:  " + doc.data().ToWin + " TO WIN WITH " + doc.data().coinAmount + " COIN(S) "})
        }
        if(teamName.length < 1 || coinAmount.length < 1) {
          return this.setState({outrightErrorMessage: "ERROR: FILL IN All FIELDS"})
        }
        if(coinAmount > this.state.currentCoinCount) {
          return this.setState({outrightErrorMessage: "ERROR: YOU DO NOT HAVE ENOUGH COINS"})
        }
        if(coinAmount.includes("-")) {
          return this.setState({outrightErrorMessage: "ERROR: YOU CANNOT BET - COINS?!?!?"})
        }
        if(teamName !== LoLTeamName1 && teamName !== LoLTeamName2) {
          return this.setState({outrightErrorMessage: "ERROR: YOU CAN ONLY BET FOR " + LoLTeamName1 + " OR " + LoLTeamName2 + " (capital letters included)"})
        }
        if(coinAmount === "0" ) {
          return this.setState({outrightErrorMessage: "ERROR: YOU CAN'T BET 0 COINS?!?!?"})
        } else {
            const response = this.state.teamsData;
            const jsonTeamacronym = jp.query(response, '$[*].acronym')
            const positionOfTeam = jsonTeamacronym.indexOf(teamName)
            
            if(positionOfTeam === -1) {
              const jsonTeamNames = jp.query(response, '$[*].name')
              const indexIng = jsonTeamNames.indexOf(teamName)
              this.setState({teamBetId: response[indexIng].id})
            } else {
            this.setState({teamBetId: response[positionOfTeam].id})
            }
            pastBet.set({
              ToWin: teamName,
              ToWinId: this.state.teamBetId,
              MatchId: matchId,
              coinAmount: coinAmount,
            }).then(()=> {
              const pointNumber = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber");
              pointNumber.update({
                pointsNumber: firebase.firestore.FieldValue.increment(-coinAmount)
              })
            }).then(()=> {
              this.setState({
                outrightErrorMessage: '',
                outrightSuccessMessage: "BET ADDED: " + teamName +" TO WIN IN " + this.state.matchTitle + " WITH " + coinAmount + " COIN(s)",
                currentCoinCount: this.state.currentCoinCount - coinAmount
              })
            })
        }
      })
    }

    

    render() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          $(".selectTournament").html("SELECT A MATCH TO BEGIN BETTING");
        } else {
          $(".selectTournament").html("YOU MUST BE LOGGED INTO BET COINS");
          $(".selectTournament").css("color", "red");
        }
      });
        return (
            <div className="containerForSports">
                <div className="minigamesNumberDisplay" id="minigamesNumberGet">
            {this.state.currentCoinCount}
                </div>
                <div className="tournamentName">{this.state.tournamentOverallName}</div>
                <section className="valorantupcommingtounramentssection">
      <div className="upcommingeventsWrapper" >
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant eventLoL" id="matchOne"
            style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/lolbg.jpg"
                })`, backgroundPosition: "88%, 60%"
              }}
          >
            <p className="valorantMatchDescShort" id="descriptionOne">{this.state.desc1}</p>
            <p className="valorantMatchTeams" id="teamsOne">{this.state.teams1}</p>
            <p className="valorantMatchTeams" id="timeOne">{this.state.time1}</p>
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant eventLoL" id="matchTwo"
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/lolbg.jpg"
            })`, backgroundPosition: "right"
          }}>
          <p className="valorantMatchDescShort" id="descriptionTwo">{this.state.desc2}</p>
          <p className="valorantMatchTeams" id="teamsTwo">{this.state.teams2}</p>
          <p className="valorantMatchTeams" id="timeTwo">{this.state.time2}</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant eventLoL" id="matchThree" 
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/lolbg.jpg"
            })`, backgroundPosition: "top-right"
          }}>
          <p className="valorantMatchDescShort" id="descriptionThree">{this.state.desc3}</p>
          <p className="valorantMatchTeams" id="teamsThree">{this.state.teams3}</p>
          <p className="valorantMatchTeams" id="timeThree">{this.state.time3}</p>
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant eventLoL" id="matchFour" 
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/lolbg.jpg"
            })`, backgroundPosition: "6%"
          }}>
          <p className="valorantMatchDescShort" id="descriptionFour">{this.state.desc4}</p>
          <p className="valorantMatchTeams" id="teamsFour">{this.state.teams4}</p>
          <p className="valorantMatchTeams" id="timeFour">{this.state.time4}</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant eventLoL" id="matchFive"
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/lolbg.jpg"
            })`, backgroundPosition: "99%"
          }}>
          <p className="valorantMatchDescShort" id="descriptionFive">{this.state.desc5}</p>
          <p className="valorantMatchTeams" id="teamsFive">{this.state.teams5}</p>
          <p className="valorantMatchTeams" id="timeFive">{this.state.time5}</p>
          
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant eventLoL" id="matchSix"
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/lolbg.jpg"
            })`, backgroundPosition: "right"
          }}>
          <p className="valorantMatchDescShort" id="descriptionSix">{this.state.desc6}</p>
          <p className="valorantMatchTeams" id="teamsSix">{this.state.teams6}</p>
          <p className="valorantMatchTeams" id="timeSix">{this.state.time6}</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant eventLoL" id="matchSeven" 
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/lolbg.jpg"
            })`, backgroundPosition: "left"
          }}>
          <p className="valorantMatchDescShort" id="descriptionSeven">{this.state.desc7}</p>
          <p className="valorantMatchTeams" id="teamsSeven">{this.state.teams7}</p>
          <p className="valorantMatchTeams" id="timeSeven">{this.state.time7}</p>
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant eventLoL" id="matchEight" 
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/lolbg.jpg"
            })`,
          }}>
          <p className="valorantMatchDescShort" id="descriptionEight">{this.state.desc8}</p>
          <p className="valorantMatchTeams" id="teamsEight">{this.state.teams8}</p>
          <p className="valorantMatchTeams" id="timeEight">{this.state.time8}</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant eventLoL" id="matchNine" 
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/lolbg.jpg"
            })`,
          }}>
          <p className="valorantMatchDescShort" id="descriptionNine">{this.state.desc9}</p>
          <p className="valorantMatchTeams" id="teamsNine">{this.state.teams9}</p>
          <p className="valorantMatchTeams" id="timeNine">{this.state.time9}</p>
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant eventLoL" id="matchTen" 
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/lolbg.jpg"
            })`, 
          }}>
          <p className="valorantMatchDescShort" id="descriptionTen">{this.state.desc10}</p>
          <p className="valorantMatchTeams" id="teamsTen">{this.state.teams10}</p>
          <p className="valorantMatchTeams" id="timeTen">{this.state.time10}</p>
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
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/valorantplayers.jpg"
                })`,
              }}
            >
              <p className="selectTournament"></p>
              
              </div>
              <div style={{"display": "none" }} className="leagueBettingSectionAfter">
              <p className="valorantBettingSectionTournamentTitle">
                {this.state.matchTitle}
                </p>
                <div style={{ display: "flex" }}>
          <div className="leftsectionFortniteBr leftsectionLeague">
            <h3 className="sectionFortniteBrTitle leagueColour">STEP 1</h3>

            <p className="fortniteSectionBrExpalin">
              Select a type of bet to choose, e.g "To Outright Win".
            </p>
          </div>
          <div className="middesectionFortniteBr middlesectionLeague">
            <h3 className="sectionFortniteBrTitle leagueColour">STEP 2</h3>
            <p className="fortniteSectionBrExpalin">
              Fill in the infomation on the certain bet section and submit.
            </p>
          </div>
          <div className="rightsectionFortniteBr rightsectionLeague">
            <h3 className="sectionFortniteBrTitle leagueColour">STEP 3</h3>
            <p className="fortniteSectionBrExpalin">
              Wait for the result, it can take 1-2 day(s) to recieve your
              winnings, any errors please go to our{" "}
              <Link to="/">
                <span style={{ color: "#dbbe00" }}>Customer Support</span>
              </Link>.
            </p>
          </div>
        </div>
        <div className="stepdividerValorant leaguecolor"></div>

        <div className="fortniteBRBettingSectionContainer LeagueReDContFxer">
          <h3 className="fortniteBRBettingSectionTitle">TO OUTRIGHT WIN</h3>
          <p
            className="ifYourBetIsSUCCESSFUL leagueColour"
            id="ifYourBetIsSUCCESSFULOutright"
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
          <form onSubmit={this.handleLeagueOutrightSubmit}>
            <input
              className="inputForFortnieBRBettingSection leaguebettingSectionInput"
              id="inputForFortnieBRBettingSectionOutrightSecond"
              placeholder="Team name here"
              type="name"
              value={this.state.outrightTeamName}
              onChange={this.handleoutrightNameChange}
            />
            <input
              className="inputForFortnieBRBettingSection leaguebettingSectionInput"
              id="inputForFortnieBRBettingSectionOutright"
              type="number"
              placeholder=""
              value={this.state.outrightCoinAmount}
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
