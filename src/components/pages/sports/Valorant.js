import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { auth } from "../../../firebase";
import $ from "jquery";
var firestore = firebase.firestore();

export default function Valorant() {
  const [teamOne, setTeamOne] = useState("");
  const [teamTwo, setTeamTwo] = useState("");
  


  fetch("https://api.pandascore.co/valorant/tournaments/upcoming?token=PmaEjpFPkBScWgYPkHnHzNF5hg98itu6h1OcooMZv7gxlWjEknM", {
    method: "GET",
    
  })
    .then((res) => res.json())
    .then(function (response) {
        //  console.log(JSON.stringify(response))
      const matchesEndpoint = response[0].matches
      const matchesLength = response[0].matches.length
      console.log(matchesLength)
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
        if(lineBottomer.includes("TBD vs TBD")) {
          $("#teamsOne").html("TO BE DECIDED");
        }
        if(lineBottomer.includes("TBD vs TBD") === false) {
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
      if(lineBottomer.includes("TBD vs TBD")) {
        $("#teamsTwo").html("TO BE DECIDED");
      }
      if(lineBottomer.includes("TBD vs TBD") === false) {
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
      if(lineBottomer.includes("TBD vs TBD")) {
        $("#teamsThree").html("TO BE DECIDED");
      }
      if(lineBottomer.includes("TBD vs TBD") === false) {
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
      if(lineBottomer.includes("TBD vs TBD")) {
        $("#teamsFour").html("TO BE DECIDED");
      }
      if(lineBottomer.includes("TBD vs TBD") === false) {
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
      if(lineBottomer.includes("TBD vs TBD")) {
        $("#teamsFive").html("TO BE DECIDED");
      }
      if(lineBottomer.includes("TBD vs TBD") === false) {
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
      if(lineBottomer.includes("TBD vs TBD")) {
        $("#teamsSix").html("TO BE DECIDED");
      }
      if(lineBottomer.includes("TBD vs TBD") === false) {
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
      if(lineBottomer.includes("TBD vs TBD")) {
        $("#teamsSeven").html("TO BE DECIDED");
      } 
      if(lineBottomer.includes("TBD vs TBD") === false) {
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
      if(lineBottomer.includes("TBD vs TBD")) {
        $("#teamsEight").html("TO BE DECIDED");
      }
      if(lineBottomer.includes("TBD vs TBD") === false) {
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
      if(lineBottomer.includes("TBD vs TBD")) {
        $("#teamsNine").html("TO BE DECIDED");
      }
      if(lineBottomer.includes("TBD vs TBD") === false) {
        firebase.auth().onAuthStateChanged((user) => {
          if(user) {
            $("#matchNine").click(function(){
              $(".imagebackgroundValorantContainer, .selectTournament").css("display","none");
              $(".valorantBettingSectionAfter").css("display","block");
              const teamOne = lineBottomer.split("vs")[0]
              const teamTwo = lineBottomer.split("vs")[1]
              $(".valorantBettingSectionTournamentTitle").html(teamOne + " VS " + teamTwo)
              const matchId = matchesEndpoint[8].id
              $(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").html(matchId)              
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
      if(lineBottomer.includes("TBD vs TBD")) {
        $("#teamsTen").html("TO BE DECIDED");
      }
      if(lineBottomer.includes("TBD vs TBD") === false) {
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
      }
  }
    });
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $(".selectTournament").html("SELECT A MATCH TO BEGIN BETTING");
    } else {
      $(".selectTournament").html("YOU MUST BE LOGGED INTO BET COINS");
      $(".selectTournament").css("color", "red");
    }
  });

 

  const outrightwinNameRef = useRef();
  const outrightwinCoinRef = useRef()
  function handleOutrightSubmit(e) {
    
    e.preventDefault();
    const teamName =  outrightwinNameRef.current.value;
    const coinAmount = outrightwinCoinRef.current.value;
    const matchTitle = document.querySelector(".valorantBettingSectionTournamentTitle").innerHTML
    const matchId = document.querySelector(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").innerHTML;
    const firstTeam = matchTitle.split("  VS ")[0]
    const secondTeam = matchTitle.split(" VS  ")[1]
    const errorMessage = document.querySelector("#toourightwinErrorCont")

    console.log(matchId)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const pointOfficialNumber = firestore.doc(
          "users/" + auth.currentUser.uid + "pointsNumber"
        );
        pointOfficialNumber.get().then((doc) => {
          if (doc.data().pointsNumber < coinAmount) {
           
           return errorMessage.innerHTML = "ERROR: YOU DO NOT HAVE ENOUGH COINS, TRY PLAYING MINIGAMES"
          }
          if(coinAmount.length < 1 || teamName.length < 1) {
            return errorMessage.innerHTML = "ERROR: MUST FILL IN ALL FIELD"
          } 
          if(coinAmount.includes("-") === true) {
            return errorMessage.innerHTML = "ERROR: COIN AMUNT MUST NOT HAVE - OR +"
          }
          if(coinAmount === "0") {
            return errorMessage.innerHTML = "ERROR: YOU CAN'T BET 0 COINS ?!?!?"
          }if(teamName !== firstTeam && teamName !== secondTeam) {
            return errorMessage.innerHTML = "YOU MUST BET FOR EITHER '" +firstTeam +"' or '" + secondTeam + "' (capital letters included)"
          } 
          else {
            const valorantFirestoreDoc = firestore.doc("users/" +
            auth.currentUser.uid +
            "pointsNumber/ValorantBets/" +
            matchId +
            "OutrightWin");
            
            valorantFirestoreDoc.set({
              TeamNames: matchTitle,
              ToWin: teamName,
              MatchId: matchId,
              coinAmount: coinAmount,
              betplaced: true,
            }).then(function() {
              pointOfficialNumber.update({
                pointsNumber: firebase.firestore.FieldValue.increment(
                  -coinAmount
                )
              }).then(function(){
                errorMessage.innerHTML = ""
                alreadyOutrightWinFunction();
                console.log("should of gone through")
              })
            })
            
          }
        });
      } else{}
    });
}
function sectionLoadValorantBetting() {
  const matchId = document.querySelector(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").innerHTML;
  const outrightCupBetCheckerValorant = firestore.doc("users/" +
  auth.currentUser.uid +
  "pointsNumber/Valorantbets/" +
  matchId +
  "OutrightWin")

  outrightCupBetCheckerValorant.get().then((doc)=> {
    if(doc.exists){
      if(doc.data().betplaced == true) {
        alreadyOutrightWinFunction();
      }
    } else {
      $(
        "#ifYourBetIsSUCCESSFULOutright, #playerNameLableFortniteOutright, #tooutrightwinTOURNAMENTNAMEOutright, #coinamountOutright"
      ).css("display", "block");
      $(
        "#inputForFortnieBRBettingSectionOutright, #inputForFortnieBRBettingSectionOutrightSecond"
      ).show();
    }
  })
}


function alreadyOutrightWinFunction() {
  const matchId = document.querySelector(".rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly").innerHTML;

  $(
    "#ifYourBetIsSUCCESSFULOutright, #playerNameLableFortniteOutright, #tooutrightwinTOURNAMENTNAMEOutright, #coinamountOutright"
  ).css("display", "none");
  $(
    "#inputForFortnieBRBettingSectionOutright, #inputForFortnieBRBettingSectionOutrightSecond"
  ).hide();
  //find the data from firebase
  const outrightCupBetCheckerValorant = firestore.doc("users/" +
  auth.currentUser.uid +
  "pointsNumber/ValorantBets/" +
  matchId +
  "OutrightWin")

  outrightCupBetCheckerValorant.get().then((doc)=> {
    if(doc.exists) {
      const errorMessage = document.querySelector("#toourightwinErrorCont")

      const TeamNames = JSON.stringify(doc.data().TeamNames);
      const toWin = JSON.stringify(doc.data().toWin);
      const coinAmount = JSON.stringify(doc.data().coinAmount);
      errorMessage.innerHTML = ""
      $("#fortnitemessageSuccessContainereal").html(
        "BET SUCCESSFUL: " +
        toWin
      )
    }
  })


}
  return (
    <div>
      <section className="valorantupcommingtounramentssection">
        <div className="upcommingeventsWrapper" >
          <div style={{ display: "flex" }}>
            <div className="eventMatchValorant" id="matchOne">
              <p className="valorantMatchDescShort" id="descriptionOne">LOADING...</p>
              <p className="valorantMatchTeams" id="teamsOne"></p>
              <p className="valorantMatchTeams" id="timeOne"></p>
            </div>
            <div
              className="dividerValorantUpcomingTournament"
              style={{ width: "1%" }}
            ></div>
            <div className="eventMatchValorant" id="matchTwo">
            <p className="valorantMatchDescShort" id="descriptionTwo">LOADING...</p>
            <p className="valorantMatchTeams" id="teamsTwo"></p>
            <p className="valorantMatchTeams" id="timeTwo"></p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="eventMatchValorant" id="matchThree">
            <p className="valorantMatchDescShort" id="descriptionThree">LOADING...</p>
            <p className="valorantMatchTeams" id="teamsThree"></p>
            <p className="valorantMatchTeams" id="timeThree"></p>
            </div>
            <div
              className="dividerValorantUpcomingTournament"
              style={{ width: "1%" }}
            ></div>
            <div className="eventMatchValorant" id="matchFour">
            <p className="valorantMatchDescShort" id="descriptionFour">LOADING...</p>
            <p className="valorantMatchTeams" id="teamsFour"></p>
            <p className="valorantMatchTeams" id="timeFour"></p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="eventMatchValorant" id="matchFive">
            <p className="valorantMatchDescShort" id="descriptionFive">LOADING...</p>
            <p className="valorantMatchTeams" id="teamsFive"></p>
            <p className="valorantMatchTeams" id="timeFive"></p>
            
            </div>
            <div
              className="dividerValorantUpcomingTournament"
              style={{ width: "1%" }}
            ></div>
            <div className="eventMatchValorant" id="matchSix">
            <p className="valorantMatchDescShort" id="descriptionSix">LOADING...</p>
            <p className="valorantMatchTeams" id="teamsSix"></p>
            <p className="valorantMatchTeams" id="timeSix"></p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="eventMatchValorant" id="matchSeven">
            <p className="valorantMatchDescShort" id="descriptionSeven">LOADING...</p>
            <p className="valorantMatchTeams" id="teamsSeven"></p>
            <p className="valorantMatchTeams" id="timeSeven"></p>
            </div>
            <div
              className="dividerValorantUpcomingTournament"
              style={{ width: "1%" }}
            ></div>
            <div className="eventMatchValorant" id="matchEight">
            <p className="valorantMatchDescShort" id="descriptionEight">LOADING...</p>
            <p className="valorantMatchTeams" id="teamsEight"></p>
            <p className="valorantMatchTeams" id="timeEight"></p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="eventMatchValorant" id="matchNine">
            <p className="valorantMatchDescShort" id="descriptionNine">LOADING...</p>
            <p className="valorantMatchTeams" id="teamsNine"></p>
            <p className="valorantMatchTeams" id="timeNine"></p>
            </div>
            <div
              className="dividerValorantUpcomingTournament"
              style={{ width: "1%" }}
            ></div>
            <div className="eventMatchValorant" id="matchTen">
            <p className="valorantMatchDescShort" id="descriptionTen">LOADING...</p>
            <p className="valorantMatchTeams" id="teamsTen"></p>
            <p className="valorantMatchTeams" id="timeTen"></p>
            </div>
          </div>
          
        </div>
      </section>
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
                  {teamOne} VS {teamTwo}</p>
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
            <form onSubmit={handleOutrightSubmit}>
              <input
                className="inputForFortnieBRBettingSection valorantbettingSectionInput"
                id="inputForFortnieBRBettingSectionOutrightSecond"
                placeholder="Team name here"
                type="name"
                ref={outrightwinNameRef}
              />
              <input
                className="inputForFortnieBRBettingSection valorantbettingSectionInput"
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
            
              <div
                className="fortniteBrContainerErrorContainer"
                id="toourightwinErrorCont"
              >
              </div>      
            <div
              className="fortniteBrContainerErrorContainer fortniteSuccessMessage"
              id="fortnitemessageSuccessContainereal"
            ></div>
          </div>

              </div>
            </div>
          </div>
          
        </div>
      </section>
      <p className="rclxTShbvDIxLxLfrkHiiMaJZtzyPVSsVoFZtxly"></p>
    </div>
     
  );
}
