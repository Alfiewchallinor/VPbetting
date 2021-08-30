import React, { Component } from "react";
import firebase from "firebase";
import { auth } from "./firebase";
import $ from "jquery";
import { render } from "@testing-library/react";
var jp = require("jsonpath")

var firestore = firebase.firestore();

export default class Adduserbets extends Component {

  constructor(props) {
    super(props)
    this.state = {
      leagueDocData: [],
      leagueMatchIds: '',
      thecurrentBet: '',

      valorantDocData: [],
      valorantMatchIds: '',
      thecurrentValorantBet: ''
    }
    this.leagueUpdateData = this.leagueUpdateData.bind(this);
    this.shouldLeagueBeUpdatedAgain = this.shouldLeagueBeUpdatedAgain.bind(this);
    this.valorantUpdateData = this.valorantUpdateData.bind(this);
    this.shouldValorantBeUpdatedAgain = this.shouldValorantBeUpdatedAgain.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const docForLeagueData = firestore.collection("users/" + auth.currentUser.uid + "pointsNumber/LoLBets")
        docForLeagueData.limit(1).get().then(snap => {
          const size = snap.size;
          if (size > 0) {
            fetch("/getLeagueMatchDataPast", {
              method: "GET",
            }).then(res => res.json())
              .then(json => {
                const currentDoc = snap.docs[0]
                const queryId = jp.query(json, '$[*].id')
                this.setState({
                  leagueDocData: json,
                  thecurrentBet: currentDoc.data(),
                  leagueMatchIds: queryId
                })
              }).then(() => {
                this.leagueUpdateData()
              })
          }
        });
        const docForValorantData = firestore.collection("users/" + auth.currentUser.uid + "pointsNumber/ValorantBets")
        docForValorantData.limit(1).get().then(snap => {
          const size = snap.size;
          if (size > 0) {
            fetch("/getValorantPastTournamentData", {
              method: "GET",
            }).then(res => res.json())
            .then(json => {
              const currentValDoc = snap.docs[0]
              const queryValDoc = jp.query(json, '$[*].id')
              this.setState({
                valorantDocData: json,
                thecurrentValorantBet: currentValDoc.data(),
                valorantMatchIds: queryValDoc
              })
            }).then(()=> {
              this.valorantUpdateData()
            })
          }
        })
      }
    });
  }

  shouldLeagueBeUpdatedAgain() {
    const docForLeagueData = firestore.collection("users/" + auth.currentUser.uid + "pointsNumber/LoLBets")
    docForLeagueData.limit(1).get().then(snap => {
      const size = snap.size;
      if (size > 0) {
        const currentDoc = snap.docs[0]
        this.setState({
          thecurrentBet: currentDoc.data(),
        })
          this.leagueUpdateData()
      }
    });
  }
  leagueUpdateData() {
    const origionalMatchId = this.state.thecurrentBet.MatchId;
    const origionaltoWinId = this.state.thecurrentBet.ToWinId;
    const bettedCoinAmount = this.state.thecurrentBet.coinAmount;
    const data = this.state.leagueDocData;
    const queryId = this.state.leagueMatchIds;
    
    if ((queryId).includes(origionalMatchId)) {
      const matchPositionIndex = queryId.indexOf(origionalMatchId)
      const finishedMatchDataWinner = data[matchPositionIndex].winner_id
      const betData = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber/LoLBets/" + origionalMatchId + "OutrightWin")
      if (origionaltoWinId === finishedMatchDataWinner) {
        const pointsNumber = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber");
        pointsNumber.update({ pointsNumber: firebase.firestore.FieldValue.increment(+ (bettedCoinAmount * 2)) })
          .then(() => {
            betData.delete()
              .then(() => { this.shouldLeagueBeUpdatedAgain() })
          })
      } else {
        betData.delete()
          .then(() => { this.shouldLeagueBeUpdatedAgain() })
      }
    } else {
      return;
    }
  }
  shouldValorantBeUpdatedAgain() {
    const docForValorantData = firestore.collection("users/" + auth.currentUser.uid + "pointsNumber/ValorantBets")
    docForValorantData.limit(1).get().then(snap => {
      const size = snap.size;
      if (size > 0) {
        const currentDoc = snap.docs[0]
        this.setState({
          thecurrentValorantBet: currentDoc.data(),
        })
          this.leagueUpdateData()
      }
    });
  }


  valorantUpdateData() {
   const origionalMatchId = this.state.thecurrentValorantBet.MatchId;
    const origionaltoWinId = this.state.thecurrentValorantBet.ToWinId;
    const bettedCoinAmount = this.state.thecurrentValorantBet.coinAmount;
    const data = this.state.valorantDocData;
    const queryId = this.state.valorantMatchIds;
    console.log(queryId + " " + origionalMatchId)
    if ((queryId).includes(origionalMatchId)) {
      console.log("there is a")
      const matchPositionIndex = queryId.indexOf(origionalMatchId)
      const finishedMatchDataWinner = data[matchPositionIndex].winner_id
      const betData = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber/ValorantBets/" + origionalMatchId + "OutrightWin")
      if (origionaltoWinId === finishedMatchDataWinner) {
        const pointsNumber = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber");
        pointsNumber.update({ pointsNumber: firebase.firestore.FieldValue.increment(+ (bettedCoinAmount * 2)) })
          .then(() => {
            betData.delete()
              .then(() => { this.shouldValorantBeUpdatedAgain() })
          })
      } else {
        betData.delete()
          .then(() => { this.shouldValorantBeUpdatedAgain() })
      }
    } else {
      return;
    }
  }



  render() {
    return (<div></div>
    )
  }
}

