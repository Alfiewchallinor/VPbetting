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

            matchId: '',

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
    }
    
    componentDidMount() {
        fetch("http://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED&matchday=1", {
            method: "GET",
            headers: {
                'X-Auth-Token': 'a6affcc783b64e789071f6f66d3ba93d'
            }
        }).then(res => res.json())
        .then(json =>{
            this.setState({
                matchesData: json.matches,
                matchesDataLoaded: true,
                tournamentOverallName: json.competition.name + " matchday: " + json.filters.matchday
            })
        }).then(()=>{
            this.displayCoinData();
            this.displayMatchesData();
        })
    }
    displayCoinData() {
        const currentCoinCountFirestoreDoc = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber");
        currentCoinCountFirestoreDoc.get().then((doc)=> {
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

            teams1: matchRef[0].homeTeam.name,
            time1: "Scheduled At: " + secondTime1.replace("-", "/") +" GMT",

            teams2: matchRef[1].homeTeam.name,
            time2: "Scheduled At: " + secondTime2.replace("-", "/") +" GMT",

            teams3: matchRef[2].homeTeam.name,
            time3: "Scheduled At: " + secondTime3.replace("-", "/") +" GMT",

            teams4: matchRef[3].homeTeam.name,
            time4: "Scheduled At: " + secondTime4.replace("-", "/") +" GMT",

            teams5: matchRef[4].homeTeam.name,
            time5: "Scheduled At: " + secondTime5.replace("-", "/") +" GMT",

            teams6: matchRef[5].homeTeam.name,
            time6: "Scheduled At: " + secondTime6.replace("-", "/") +" GMT",

            teams7: matchRef[6].homeTeam.name,
            time7: "Scheduled At: " + secondTime7.replace("-", "/") +" GMT",

            teams8: matchRef[7].homeTeam.name,
            time8: "Scheduled At: " + secondTime8.replace("-", "/") +" GMT",

            teams9: matchRef[8].homeTeam.name,
            time9: "Scheduled At: " + secondTime9.replace("-", "/") +" GMT",

            teams10: matchRef[9].homeTeam.name,
            time10: "Scheduled At: " + secondTime10.replace("-", "/") +" GMT",
        })  
        this.onMatchClick()
    }
    onMatchClick() {
        const matchRef = this.state.matchesData;
        firebase.auth().onAuthStateChanged((user)=> {
            if(user) {
                $("#matchOne").click(()=> {
                    this.setState({
                        matchId: matchRef[0].id
                    })
                })
                $("#matchTwo").click(()=> {
                    this.setState({
                        matchId: matchRef[1].id
                    })
                })
                $("#matchThree").click(()=> {
                    this.setState({
                        matchId: matchRef[2].id
                    })
                })
                $("#matchFour").click(()=> {
                    this.setState({
                        matchId: matchRef[3].id
                    })
                })
                $("#matchFive").click(()=> {
                    this.setState({
                        matchId: matchRef[4].id
                    })
                })
                $("#matchSix").click(()=> {
                    this.setState({
                        matchId: matchRef[5].id
                    })
                })
                $("#matchSeven").click(()=> {
                    this.setState({
                        matchId: matchRef[6].id
                    })
                })
                $("#matchEight").click(()=> {
                    this.setState({
                        matchId: matchRef[7].id
                    })
                })
                $("#matchNine").click(()=> {
                    this.setState({
                        matchId: matchRef[8].id
                    })
                })
                $("#matchTen").click(()=> {
                    this.setState({
                        matchId: matchRef[9].id
                    })
                })
            }
        });
    };
    render() {
        console.log(this.state.matchId)
        return (
            <div className="containerForSports">
                <div className="minigamesNumberDisplay" id="minigamesNumberGet">
            {this.state.currentCoinCount}
                </div>
                <div className="tournamentName" style={{'whiteSpace': 'nowrap'}}>{this.state.tournamentOverallName}</div>
                <section className="valorantupcommingtounramentssection">
      <div className="upcommingeventsWrapper" >
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant eventLoL" id="matchOne"
            style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
                })`, backgroundPosition: "88%, 60%"
              }}
          >
            <p className="valorantMatchDescShort" id="descriptionOne" style={{color: 'black'}}>{this.state.desc1}</p>
            <p className="valorantMatchTeams" id="teamsOne" style={{color: 'black'}}>{this.state.teams1}</p>
            <p className="valorantMatchTeams" id="timeOne" style={{color: 'black'}}>{this.state.time1}</p>
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant eventLoL" id="matchTwo"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
            })`, backgroundPosition: "right"
          }}
           >
          <p className="valorantMatchDescShort" id="descriptionTwo" style={{color: 'black'}}>{this.state.desc2}</p>
          <p className="valorantMatchTeams" id="teamsTwo" style={{color: 'black'}}>{this.state.teams2}</p>
          <p className="valorantMatchTeams" id="timeTwo" style={{color: 'black'}}>{this.state.time2}</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant eventLoL" id="matchThree" 
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
            })`, backgroundPosition: "top-right"
          }}
          >
          <p className="valorantMatchDescShort" id="descriptionThree" style={{color: 'black'}}>{this.state.desc3}</p>
          <p className="valorantMatchTeams" id="teamsThree" style={{color: 'black'}}>{this.state.teams3}</p>
          <p className="valorantMatchTeams" id="timeThree" style={{color: 'black'}}>{this.state.time3}</p>
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant eventLoL" id="matchFour" 
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
            })`, backgroundPosition: "99%"
          }}>
          <p className="valorantMatchDescShort" id="descriptionFour" style={{color: 'black'}}>{this.state.desc4}</p>
          <p className="valorantMatchTeams" id="teamsFour" style={{color: 'black'}}>{this.state.teams4}</p>
          <p className="valorantMatchTeams" id="timeFour" style={{color: 'black'}}>{this.state.time4}</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant eventLoL" id="matchFive"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
            })`, backgroundPosition: "right"
          }}
           >
          <p className="valorantMatchDescShort" id="descriptionFive" style={{color: 'black'}}>{this.state.desc5}</p>
          <p className="valorantMatchTeams" id="teamsFive" style={{color: 'black'}}>{this.state.teams5}</p>
          <p className="valorantMatchTeams" id="timeFive" style={{color: 'black'}}>{this.state.time5}</p>
          
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant eventLoL" id="matchSix"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
            })`, backgroundPosition: "left"
          }}>
          <p className="valorantMatchDescShort" id="descriptionSix" style={{color: 'black'}}>{this.state.desc6}</p>
          <p className="valorantMatchTeams" id="teamsSix" style={{color: 'black'}}>{this.state.teams6}</p>
          <p className="valorantMatchTeams" id="timeSix" style={{color: 'black'}}>{this.state.time6}</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant eventLoL" id="matchSeven" 
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
            })`, backgroundPosition: "top-right"
          }}
           >
          <p className="valorantMatchDescShort" id="descriptionSeven" style={{color: 'black'}}>{this.state.desc7}</p>
          <p className="valorantMatchTeams" id="teamsSeven" style={{color: 'black'}}>{this.state.teams7}</p>
          <p className="valorantMatchTeams" id="timeSeven" style={{color: 'black'}}>{this.state.time7}</p>
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant eventLoL" id="matchEight" 
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
            })`, backgroundPosition: "top-right"
          }}
           >
          <p className="valorantMatchDescShort" id="descriptionEight" style={{color: 'black'}}>{this.state.desc8}</p>
          <p className="valorantMatchTeams" id="teamsEight" style={{color: 'black'}}>{this.state.teams8}</p>
          <p className="valorantMatchTeams" id="timeEight" style={{color: 'black'}}>{this.state.time8}</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="eventMatchValorant eventLoL" id="matchNine" 
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
            })`, backgroundPosition: "top-right"
          }}
           >
          <p className="valorantMatchDescShort" id="descriptionNine" style={{color: 'black'}}>{this.state.desc9}</p>
          <p className="valorantMatchTeams" id="teamsNine" style={{color: 'black'}}>{this.state.teams9}</p>
          <p className="valorantMatchTeams" id="timeNine" style={{color: 'black'}}>{this.state.time9}</p>
          </div>
          <div
            className="dividerValorantUpcomingTournament"
            style={{ width: "1%" }}
          ></div>
          <div className="eventMatchValorant eventLoL" id="matchTen" 
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/footballBoxBackground.jpg"
            })`, backgroundPosition: "top-right"
          }}
           >
          <p className="valorantMatchDescShort" id="descriptionTen" style={{color: 'black'}}>{this.state.desc10}</p>
          <p className="valorantMatchTeams" id="teamsTen" style={{color: 'black'}}>{this.state.teams10}</p>
          <p className="valorantMatchTeams" id="timeTen" style={{color: 'black'}}>{this.state.time10}</p>
          </div>
        </div>
        
      </div>
    </section>

            </div>
        )
    }
}

