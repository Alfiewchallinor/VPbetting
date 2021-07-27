import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { auth } from "../../../firebase";
import $ from "jquery";
var jp = require("jsonpath")
var firestore = firebase.firestore();

export default class Test extends Component {
  constructor(props) {
      super(props);
      this.state = {
          matchesLength: '',
          tournamentData: [],
          tournamentLoaded: false,
          overallTeamData: [],
          tournamentOverallName: '',

          currentCoinCount: "",
          gotCoinAmount: false,

          outrightName: '',
          outrightCoin: '',
          
          matchTitle: '',
          MatchId: '',
          OutrightErrorMessage: '',
          OutrightsuccessMessage: '', 
      };
      this.handleoutrightCoinChange = this.handleoutrightCoinChange.bind(this);
      this.handleoutrightNameChange = this.handleoutrightNameChange.bind(this);
      this.handleOutrightSubmit = this.handleOutrightSubmit.bind(this);
      this.sectionLoadValorantBetting = this.sectionLoadValorantBetting.bind(this);
      this.resetSuccessMessage = this.resetSuccessMessage.bind(this);
      this.displayCoinCurrentAmount = this.displayCoinCurrentAmount.bind(this);
      this.fetchTeamData = this.fetchTeamData.bind(this);
    }
    
    componentDidMount() {
      this.displayCoinCurrentAmount()
      fetch("/getValorantTournamentData", {
        method: "GET", 
        
      }).then(res => res.json())
      .then(json => {
        this.setState({
            tournamentData: json,
            tournamentLoaded: true,
            tournamentOverallName: 'Current Event: '+json[0].league.name
        })
        this.fetchTeamData()
      });
    }
    fetchTeamData () {
      fetch("ValorantPublicTeamsData.json" , {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(res => res.json())
      .then(json => {
        this.setState({
          overallTeamData: json
        }); console.log("sent")
      })
    }
    displayCoinCurrentAmount () {
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
    
    loaded = () => {
        if(this.state.tournamentLoaded === false) {
            return
        }
        else {
      //   console.log(JSON.stringify(this.state.tournamentData));
        const matchesEndpoint = this.state.tournamentData[0].matches;
        const matchesLength = this.state.tournamentData[0].matches.length;
        if(matchesLength < 10) {
          $("#matchTen").css("display","none")
      }
      if(matchesLength < 9) {
          $("#matchNine").css("display","none")
      }
      if(matchesLength < 8) {
          $("#matchEight").css("display","none")
      }
      if(matchesLength < 7) {
          $("#matchSeven").css("display","none")
      }
      if(matchesLength < 6) {
          $("#matchSix").css("display","none")
      }
      if(matchesLength < 5) {
          $("#matchFive").css("display","none")
      }
      if(matchesLength < 4) {
          $("#matchFour").css("display","none")
      }
      if(matchesLength < 3) {
          $("#matchThree").css("display","none")
      }
      if(matchesLength < 2) {
          $("#matchTwo").css("display","none")
      }
      if(matchesLength > 0) {   
          
          const descOne = matchesEndpoint[0].name
          const lineTopper =  descOne.split(':')[0]
          const lineBottomer = descOne.split(': ')[1]
          const matchTime = matchesEndpoint[0].scheduled_at
          const SlicedMT =  matchTime.slice(5,16);
          const removedT = SlicedMT.replace("T", " ")
          const FinalDate = "Scheduled At: " + removedT.replace("-", "/") +" GMT"
          $("#timeOne").html(FinalDate)
          $("#descriptionOne").html(lineTopper)
          $("#teamsOne").html(lineBottomer)
          if(lineBottomer.includes("TBD")) {
            $("#teamsOne").html("TO BE DECIDED");
          }
          if(lineBottomer.includes("TBD") === false) {
            firebase.auth().onAuthStateChanged((user) => {
              if(user) {
                $("#matchOne").click(function(){
                  $(".imagebackgroundValorantContainer, .selectTournament").css("display","none");
                  $(".valorantBettingSectionAfter").css("display","block");
                  const teamOne = lineBottomer.split("vs")[0]
                const teamTwo = lineBottomer.split("vs")[1]
                $(".valorantBettingSectionTournamentTitle").html(teamOne + " VS " + teamTwo)
                const matchId = matchesEndpoint[0].id
                $(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").html(matchId)   
                      
                })
              } else{
                return;
              }
            })
          }
      }
      if(matchesLength > 1) {
        const descOne = matchesEndpoint[1].name
        const lineTopper =  descOne.split(':')[0]
        const lineBottomer = descOne.split(': ')[1]
        const matchTime = matchesEndpoint[1].scheduled_at
          const SlicedMT =  matchTime.slice(5,16);
          const removedT = SlicedMT.replace("T", " ")
          const FinalDate = "Scheduled At: " + removedT.replace("-", "/") +" GMT"
          $("#timeTwo").html(FinalDate)
        $("#descriptionTwo").html(lineTopper)
        $("#teamsTwo").html(lineBottomer)
        if(lineBottomer.includes("TBD")) {
          $("#teamsTwo").html("TO BE DECIDED");
        }
        if(lineBottomer.includes("TBD") === false) {
          firebase.auth().onAuthStateChanged((user) => {
            if(user) {
              $("#matchTwo").click(function(){
                $(".imagebackgroundValorantContainer, .selectTournament").css("display","none");
                $(".valorantBettingSectionAfter").css("display","block");
                const teamOne = lineBottomer.split("vs")[0]
                const teamTwo = lineBottomer.split("vs")[1]
                $(".valorantBettingSectionTournamentTitle").html(teamOne + " VS " + teamTwo)
                const matchId = matchesEndpoint[1].id
                $(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").html(matchId)        
              })
            } else{
              return;
            }
          })
        }   
      }
      if(matchesLength > 2) {
        const descOne = matchesEndpoint[2].name
        const lineTopper = descOne.split(':')[0]
        const lineBottomer = descOne.split(': ')[1]
        const matchTime = matchesEndpoint[2].scheduled_at
          const SlicedMT =  matchTime.slice(5,16);
          const removedT = SlicedMT.replace("T", " ")
          const FinalDate = "Scheduled At: " + removedT.replace("-", "/") +" GMT"
          $("#timeThree").html(FinalDate)
        $("#descriptionThree").html(lineTopper)
        $("#teamsThree").html(lineBottomer)
        if(lineBottomer.includes("TBD")) {
          $("#teamsThree").html("TO BE DECIDED");
        }
        if(lineBottomer.includes("TBD") === false) {
          firebase.auth().onAuthStateChanged((user) => {
            if(user) {
              $("#matchThree").click(function(){
                $(".imagebackgroundValorantContainer, .selectTournament").css("display","none");
                $(".valorantBettingSectionAfter").css("display","block");
                const teamOne = lineBottomer.split("vs")[0]
                const teamTwo = lineBottomer.split("vs")[1]
                $(".valorantBettingSectionTournamentTitle").html(teamOne + " VS " + teamTwo);
                const matchId = matchesEndpoint[2].id
                $(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").html(matchId)
              })
              
            } else{
              return;
            }
          })
        }
      }
      if(matchesLength > 3) {
        const descOne = matchesEndpoint[3].name
        const lineTopper =  descOne.split(':')[0]
        const lineBottomer = descOne.split(': ')[1]
        const matchTime = matchesEndpoint[3].scheduled_at
          const SlicedMT =  matchTime.slice(5,16);
          const removedT = SlicedMT.replace("T", " ")
          const FinalDate = "Scheduled At: " + removedT.replace("-", "/") +" GMT"
          $("#timeFour").html(FinalDate)
        $("#descriptionFour").html(lineTopper)
        $("#teamsFour").html(lineBottomer);
        if(lineBottomer.includes("TBD")) {
          $("#teamsFour").html("TO BE DECIDED");
        }
        if(lineBottomer.includes("TBD") === false) {
          firebase.auth().onAuthStateChanged((user) => {
            if(user) {
              $("#matchFour").click(function(){
                $(".imagebackgroundValorantContainer, .selectTournament").css("display","none");
                $(".valorantBettingSectionAfter").css("display","block");
                const teamOne = lineBottomer.split("vs")[0]
                const teamTwo = lineBottomer.split("vs")[1]
                $(".valorantBettingSectionTournamentTitle").html(teamOne + " VS " + teamTwo)
                const matchId = matchesEndpoint[3].id
                $(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").html(matchId)       
              })
            } else{
              return;
            }
          })
        }
      }
      if(matchesLength > 4) {
        const descOne = matchesEndpoint[4].name
        const lineTopper =  descOne.split(':')[0];
        const lineBottomer = descOne.split(': ')[1];
        const matchTime = matchesEndpoint[4].scheduled_at
          const SlicedMT =  matchTime.slice(5,16);
          const removedT = SlicedMT.replace("T", " ")
          const FinalDate = "Scheduled At: " + removedT.replace("-", "/") +" GMT"
          $("#timeFive").html(FinalDate)
        $("#descriptionFive").html(lineTopper);
        $("#teamsFive").html(lineBottomer);
        if(lineBottomer.includes("TBD")) {
          $("#teamsFive").html("TO BE DECIDED");
        }
        if(lineBottomer.includes("TBD") === false) {
          firebase.auth().onAuthStateChanged((user) => {
            if(user) {
              $("#matchFive").click(function(){
                $(".imagebackgroundValorantContainer, .selectTournament").css("display","none");
                $(".valorantBettingSectionAfter").css("display","block");
                const teamOne = lineBottomer.split("vs")[0]
                const teamTwo = lineBottomer.split("vs")[1]
                $(".valorantBettingSectionTournamentTitle").html(teamOne + " VS " + teamTwo)
                const matchId = matchesEndpoint[4].id
                $(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").html(matchId)
              })
            } else{
              return;
            }
          })
        }
      }
      if(matchesLength > 5) {
        const descOne = matchesEndpoint[5].name
        const lineTopper =  descOne.split(':')[0]
        const lineBottomer = descOne.split(': ')[1]
        const matchTime = matchesEndpoint[5].scheduled_at
          const SlicedMT =  matchTime.slice(5,16);
          const removedT = SlicedMT.replace("T", " ")
          const FinalDate = "Scheduled At: " + removedT.replace("-", "/") +" GMT"
          $("#timeSix").html(FinalDate)
        $("#descriptionSix").html(lineTopper)
        $("#teamsSix").html(lineBottomer)
        if(lineBottomer.includes("TBD")) {
          $("#teamsSix").html("TO BE DECIDED");
        }
        if(lineBottomer.includes("TBD") === false) {
        firebase.auth().onAuthStateChanged((user) => {
          if(user) {
            $("#matchSix").click(function(){
              $(".imagebackgroundValorantContainer, .selectTournament").css("display","none");
              $(".valorantBettingSectionAfter").css("display","block");
              const teamOne = lineBottomer.split("vs")[0]
                const teamTwo = lineBottomer.split("vs")[1]
                $(".valorantBettingSectionTournamentTitle").html(teamOne + " VS " + teamTwo)
                const matchId = matchesEndpoint[5].id
                $(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").html(matchId)
            })
          } else{
            return;
          }
        })
      }}
      if(matchesLength > 6) {
        const descOne = matchesEndpoint[6].name
        const lineTopper =  descOne.split(':')[0]
        const lineBottomer = descOne.split(': ')[1]
        const matchTime = matchesEndpoint[6].scheduled_at
          const SlicedMT =  matchTime.slice(5,16);
          const removedT = SlicedMT.replace("T", " ")
          const FinalDate = "Scheduled At: " + removedT.replace("-", "/") +" GMT"
          $("#timeSeven").html(FinalDate)
        $("#descriptionSeven").html(lineTopper)
        $("#teamsSeven").html(lineBottomer)
        if(lineBottomer.includes("TBD")) {
          $("#teamsSeven").html("TO BE DECIDED");
        } 
        if(lineBottomer.includes("TBD") === false) {
          firebase.auth().onAuthStateChanged((user) => {
            if(user) {
              $("#matchSeven").click(function(){
                $(".imagebackgroundValorantContainer, .selectTournament").css("display","none");
                $(".valorantBettingSectionAfter").css("display","block");
                const teamOne = lineBottomer.split("vs")[0]
                const teamTwo = lineBottomer.split("vs")[1]
                $(".valorantBettingSectionTournamentTitle").html(teamOne + " VS " + teamTwo)
                const matchId = matchesEndpoint[6].id
                $(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").html(matchId)
              })
            } else{
              return;
            }
          })
        }
      }
      if(matchesLength > 7) {
        const descOne = matchesEndpoint[7].name
        const lineTopper =  descOne.split(':')[0]
        const lineBottomer = descOne.split(': ')[1]
        const matchTime = matchesEndpoint[7].scheduled_at
          const SlicedMT =  matchTime.slice(5,16);
          const removedT = SlicedMT.replace("T", " ")
          const FinalDate = "Scheduled At: " + removedT.replace("-", "/") +" GMT"
          $("#timeEight").html(FinalDate)
        $("#descriptionEight").html(lineTopper)
        $("#teamsEight").html(lineBottomer)
        if(lineBottomer.includes("TBD")) {
          $("#teamsEight").html("TO BE DECIDED");
        }
        if(lineBottomer.includes("TBD") === false) {
          firebase.auth().onAuthStateChanged((user) => {
            if(user) {
              $("#matchEight").click(function(){
                $(".imagebackgroundValorantContainer, .selectTournament").css("display","none");
                $(".valorantBettingSectionAfter").css("display","block");
                const teamOne = lineBottomer.split("vs")[0]
                const teamTwo = lineBottomer.split("vs")[1]
                $(".valorantBettingSectionTournamentTitle").html(teamOne + " VS " + teamTwo)
                const matchId = matchesEndpoint[7].id
                $(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").html(matchId)            
              })
            } else{
              return;
            }
          })
        }
      }
      if(matchesLength > 8) {
        const descOne = matchesEndpoint[8].name
        const lineTopper =  descOne.split(':')[0]
        const lineBottomer = descOne.split(': ')[1]
        const matchTime = matchesEndpoint[8].scheduled_at
          const SlicedMT =  matchTime.slice(5,16);
          const removedT = SlicedMT.replace("T", " ")
          const FinalDate = "Scheduled At: " + removedT.replace("-", "/") +" GMT"
          $("#timeNine").html(FinalDate)
        $("#descriptionNine").html(lineTopper)
        $("#teamsNine").html(lineBottomer)
        if(lineBottomer.includes("TBD")) {
          $("#teamsNine").html("TO BE DECIDED");
        }
        if(lineBottomer.includes("TBD") === false) {
          firebase.auth().onAuthStateChanged((user) => {
            if(user) {
              $("#matchNine").click(function(){
                $(".imagebackgroundValorantContainer, .selectTournament").css("display","none");
                $(".valorantBettingSectionAfter").css("display","block");
                const teamOne = lineBottomer.split("vs")[0]
                const teamTwo = lineBottomer.split("vs")[1]
                $(".valorantBettingSectionTournamentTitle").html(teamOne + " VS " + teamTwo)
                const matchId = matchesEndpoint[8].id
                $(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").html(matchId);   
              })
            } else{
              return;
            }
          })
        }
      }
      if(matchesLength > 9) {
        const descOne = matchesEndpoint[9].name
        const lineTopper =  descOne.split(':')[0]
        const lineBottomer = descOne.split(': ')[1]
        const matchTime = matchesEndpoint[9].scheduled_at
          const SlicedMT =  matchTime.slice(5,16);
          const removedT = SlicedMT.replace("T", " ")
          const FinalDate = "Scheduled At: " + removedT.replace("-", "/") +" GMT"
          $("#timeTen").html(FinalDate)
        $("#descriptionTen").html(lineTopper)
        $("#teamsTen").html(lineBottomer)
        if(lineBottomer.includes("TBD")) {
          $("#teamsTen").html("TO BE DECIDED");
        }
        if(lineBottomer.includes("TBD") === false) {
          firebase.auth().onAuthStateChanged((user) => {
            if(user) {
              $("#matchTen").click(function(){
                $(".imagebackgroundValorantContainer, .selectTournament").css("display","none");
                $(".valorantBettingSectionAfter").css("display","block");
                const teamOne = lineBottomer.split("vs")[0]
                const teamTwo = lineBottomer.split("vs")[1]
                $(".valorantBettingSectionTournamentTitle").html(teamOne + "VS" + teamTwo)
                const matchId = matchesEndpoint[9].id
                $(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").html(matchId)
              })
            } else{
              return;
            }
          })
        }}
    }
    }
    sectionLoadValorantBetting () {
        
        const matchName = document.querySelector(".valorantBettingSectionTournamentTitle").innerHTML;
        const matchIdent = document.querySelector(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").innerHTML;
         this.setState({
          matchTitle: matchName,
          MatchId: matchIdent,
         });
         this.resetSuccessMessage();
    };
    resetSuccessMessage() {
      
        this.setState({
         OutrightErrorMessage: '',
         OutrightsuccessMessage: '',
      });
      console.log("hi")
    }

    handleoutrightNameChange(event) {
        this.setState({outrightName: event.target.value})
    }
    handleoutrightCoinChange(event) {
      this.setState({outrightCoin: event.target.value});
    }

    handleOutrightSubmit(event) {
      event.preventDefault();
      const teamName =  this.state.outrightName;
      const coinAmount = this.state.outrightCoin;
      const matchTitle = this.state.matchTitle;
      const matchId = this.state.MatchId;
      const firstTeam = matchTitle.split("  VS  ")[0];
      const secondTeam = matchTitle.split(" VS  ")[1];
      const coinAmountInAccount = this.state.currentCoinCount

          const checkCupBet = firestore.doc(
              "users/" +
              auth.currentUser.uid +
              "pointsNumber/ValorantBets/" +
              matchId + "OutrightWin" 
          );
          checkCupBet.get().then((docsecondary) => {
              if(docsecondary.exists) {
                  return this.setState({OutrightErrorMessage: "ERROR: YOU HAVE ALREADY BET ON THIS MATCH:  " + docsecondary.data().ToWin + " TO WIN IN " + docsecondary.data().TeamNames + " WITH " + docsecondary.data().coinAmount + " COIN(S) "})
              }
              if(coinAmountInAccount < coinAmount) {
                  return this.setState({OutrightErrorMessage: "ERROR: YOU DO NOT HAVE ENOUGH COINS"})
              }
              if(coinAmount.length < 1 || teamName.length < 1) {
                  return this.setState({OutrightErrorMessage: "ERROR: MUST FILL IN ALL FIELD"}) 
                } 
                if(coinAmount.includes("-") === true) {
                  return this.setState({OutrightErrorMessage: "ERROR: COIN AMUNT MUST NOT HAVE - OR +"}) 
                }
                if(coinAmount === "0") {
                  return this.setState({OutrightErrorMessage: "ERROR: YOU CAN'T BET 0 COINS ?!?!?"})
                }if(teamName !== firstTeam && teamName !== secondTeam) {
                  return this.setState({OutrightErrorMessage: "ERROR: YOU MUST BET FOR EITHER '" +firstTeam +"' or '" + secondTeam + "' (capital letters included)"}) 
                } 
                else {
                  const response = this.state.overallTeamData
                  
                      const teamsgg = jp.query(response, '$[*].name')
                      const teamPositiongg = teamsgg.indexOf(teamName)
                      const toWinId = response[teamPositiongg].id;
                      const valorantFirestoreDoc = firestore.doc("users/" +
                      auth.currentUser.uid +
                      "pointsNumber/ValorantBets/" +
                      matchId +
                       "OutrightWin"); 
                      valorantFirestoreDoc.set({
                        ToWin: teamName,
                        ToWinId: toWinId,
                        MatchId: matchId,
                        coinAmount: coinAmount,
                      }).then(()=> {
                        const pointOfficialNumber = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber")

                        pointOfficialNumber.update({
                          pointsNumber: firebase.firestore.FieldValue.increment(
                            -coinAmount
                          )
                        }).then(()=> {
                          this.setState({
                            OutrightsuccessMessage: "ADDED BET: " + teamName +" TO WIN IN " + matchTitle+ " WITH " +coinAmount +" COINS " ,
                            currentCoinCount: this.state.currentCoinCount -coinAmount,
                        })
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
          <div onLoad={this.loaded()} className="containerForSports">
            <div className="minigamesNumberDisplay" id="minigamesNumberGet">
          {this.state.currentCoinCount}
        </div>
        <div className="tournamentName">{this.state.tournamentOverallName}</div>
          <section className="valorantupcommingtounramentssection">
      <div className="upcommingeventsWrapper" >
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant" id="matchOne" onClick={this.sectionLoadValorantBetting}>
            <p className="valorantMatchDescShort" id="descriptionOne">LOADING...</p>
            <p className="valorantMatchTeams" id="teamsOne"></p>
            <p className="valorantMatchTeams" id="timeOne"></p>
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant" id="matchTwo" onClick={this.sectionLoadValorantBetting} >
          <p className="valorantMatchDescShort" id="descriptionTwo">LOADING...</p>
          <p className="valorantMatchTeams" id="teamsTwo"></p>
          <p className="valorantMatchTeams" id="timeTwo"></p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant" id="matchThree" onClick={this.sectionLoadValorantBetting}>
          <p className="valorantMatchDescShort" id="descriptionThree">LOADING...</p>
          <p className="valorantMatchTeams" id="teamsThree"></p>
          <p className="valorantMatchTeams" id="timeThree"></p>
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant" id="matchFour" onClick={this.sectionLoadValorantBetting}>
          <p className="valorantMatchDescShort" id="descriptionFour">LOADING...</p>
          <p className="valorantMatchTeams" id="teamsFour"></p>
          <p className="valorantMatchTeams" id="timeFour"></p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant" id="matchFive" onClick={this.sectionLoadValorantBetting}>
          <p className="valorantMatchDescShort" id="descriptionFive">LOADING...</p>
          <p className="valorantMatchTeams" id="teamsFive"></p>
          <p className="valorantMatchTeams" id="timeFive"></p>
          
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant" id="matchSix" onClick={this.sectionLoadValorantBetting}>
          <p className="valorantMatchDescShort" id="descriptionSix">LOADING...</p>
          <p className="valorantMatchTeams" id="teamsSix"></p>
          <p className="valorantMatchTeams" id="timeSix"></p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant" id="matchSeven" onClick={this.sectionLoadValorantBetting}>
          <p className="valorantMatchDescShort" id="descriptionSeven">LOADING...</p>
          <p className="valorantMatchTeams" id="teamsSeven"></p>
          <p className="valorantMatchTeams" id="timeSeven"></p>
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant" id="matchEight" onClick={this.sectionLoadValorantBetting}>
          <p className="valorantMatchDescShort" id="descriptionEight">LOADING...</p>
          <p className="valorantMatchTeams" id="teamsEight"></p>
          <p className="valorantMatchTeams" id="timeEight"></p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant" id="matchNine" onClick={this.sectionLoadValorantBetting}>
          <p className="valorantMatchDescShort" id="descriptionNine">LOADING...</p>
          <p className="valorantMatchTeams" id="teamsNine"></p>
          <p className="valorantMatchTeams" id="timeNine"></p>
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant" id="matchTen" onClick={this.sectionLoadValorantBetting}>
          <p className="valorantMatchDescShort" id="descriptionTen">LOADING...</p>
          <p className="valorantMatchTeams" id="teamsTen"></p>
          <p className="valorantMatchTeams" id="timeTen"></p>
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
              <div style={{"display": "none" }} className="valorantBettingSectionAfter">
              <p className="valorantBettingSectionTournamentTitle">
                </p>
                <div style={{ display: "flex" }}>
          <div className="leftsectionFortniteBr leftsectionValorant">
            <h3 className="sectionFortniteBrTitle valorantStepsRedColour">STEP 1</h3>

            <p className="fortniteSectionBrExpalin">
              Select a type of bet to choose, e.g "To Outright Win".
            </p>
          </div>
          <div className="middesectionFortniteBr middlesectionValorant">
            <h3 className="sectionFortniteBrTitle valorantStepsRedColour">STEP 2</h3>
            <p className="fortniteSectionBrExpalin">
              Fill in the infomation on the certain bet section and submit.
            </p>
          </div>
          <div className="rightsectionFortniteBr rightsectionValorant">
            <h3 className="sectionFortniteBrTitle valorantStepsRedColour">STEP 3</h3>
            <p className="fortniteSectionBrExpalin">
              Wait for the result, it can take 1-2 day(s) to recieve your
              winnings, any errors please go to our{" "}
              <Link to="/">
                <span style={{ color: "#fa4454" }}>Customer Support</span>
              </Link>.
            </p>
          </div>
        </div>
        <div className="stepdividerValorant"></div>

        <div className="fortniteBRBettingSectionContainer valorantReDContFxer">
          <h3 className="fortniteBRBettingSectionTitle">TO OUTRIGHT WIN</h3>
          <p
            className="ifYourBetIsSUCCESSFUL valorantStepsRedColour"
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
          <form onSubmit={this.handleOutrightSubmit}>
            <input
              className="inputForFortnieBRBettingSection valorantbettingSectionInput"
              id="inputForFortnieBRBettingSectionOutrightSecond"
              placeholder="Team name here"
              type="name"
              value={this.state.outrightName}
              onChange={this.handleoutrightNameChange}
            />
            <input
              className="inputForFortnieBRBettingSection valorantbettingSectionInput"
              id="inputForFortnieBRBettingSectionOutright"
              type="number"
              placeholder=""
              value={this.state.outrightCoin}
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
            >{this.state.OutrightErrorMessage}
            </div>      
          <div
            className="fortniteBrContainerErrorContainer fortniteSuccessMessage"
            id="fortnitemessageSuccessContainereal"
          >{this.state.OutrightsuccessMessage}</div>
          
        </div>
        <div className="fixBottomVaLORANTBEt"></div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    <p className="rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly"></p>
    </div>
      );
    }
}