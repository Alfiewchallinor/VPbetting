import React, { useEffect } from "react";
import firebase from "firebase";
import { auth } from "./firebase";
import $ from "jquery";
import { render } from "@testing-library/react";

var firestore = firebase.firestore();

export default function Adduserbets(props) {
  // // FORTNITE OUTRIGHTWIN TEMPLATE
  // //FORTNITE TOP 100 TEMPLATE
  // //FORTNITE CUSTOM BET TEMPLATE
  // //Valorant Section
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       const ValorantBetsSectionRef = firestore.doc("users/" +
  //                     auth.currentUser.uid +
  //                     "pointsNumber")
        
  //       ValorantBetsSectionRef.get().then((doc) => {
  //         if (doc.exists) {

  //           fetch("ValorantPublicData.json", {
  //             headers: {
  //               "Content-Type": "application/json",
  //               Accept: "application/json",
  //             },
  //           })
  //             .then((res) => res.json())
  //             .then(function (response) {
  //               const matchOverallRef = response[0].matches;
  //               const matchLength = matchOverallRef.length;

  //               if (matchLength > 0) {
  //                 const matchDataId = matchOverallRef[0].id;
  //                 const usersMatchData = firestore.doc(
  //                   "users/" +
  //                     auth.currentUser.uid +
  //                     "pointsNumber/ValorantBets/" +
  //                     matchDataId +
  //                     "OutrightWin"
  //                 );
  //                 usersMatchData.get().then((doc) => {
  //                   if (doc.exists) {
  //                     if (doc.data().ToWinId == matchOverallRef[0].winner_id) {
  //                       ValorantBetsSectionRef.update({
  //                         pointsNumber: firebase.firestore.FieldValue.increment(
  //                           doc.data().coinAmount * 2
  //                         ),
  //                       }).then(function () {
  //                         usersMatchData.delete();
  //                       });
  //                     } else {
  //                       usersMatchData.delete();
  //                     }
  //                   }
  //                 });
  //               }
  //               if (matchLength > 1) {
  //                 const matchDataId = matchOverallRef[1].id;
  //                 const usersMatchData = firestore.doc(
  //                   "users/" +
  //                     auth.currentUser.uid +
  //                     "pointsNumber/ValorantBets/" +
  //                     matchDataId +
  //                     "OutrightWin"
  //                 );
  //                 usersMatchData.get().then((doc) => {
  //                   if (doc.exists) {
  //                     if (doc.data().ToWinId == matchOverallRef[1].winner_id) {
  //                       ValorantBetsSectionRef.update({
  //                         pointsNumber: firebase.firestore.FieldValue.increment(
  //                           doc.data().coinAmount * 2
  //                         ),
  //                       }).then(function () {
  //                         usersMatchData.delete();
  //                       });
  //                     } else {
  //                       usersMatchData.delete();
  //                     }
  //                   }
  //                 });
  //               }

  //               if (matchLength > 2) {
  //                 const matchDataId = matchOverallRef[2].id;
  //                 const usersMatchData = firestore.doc(
  //                   "users/" +
  //                     auth.currentUser.uid +
  //                     "pointsNumber/ValorantBets/" +
  //                     matchDataId +
  //                     "OutrightWin"
  //                 );
  //                 usersMatchData.get().then((doc) => {
  //                   if (doc.exists) {
  //                     if (doc.data().ToWinId == matchOverallRef[2].winner_id) {
  //                       ValorantBetsSectionRef.update({
  //                         pointsNumber: firebase.firestore.FieldValue.increment(
  //                           doc.data().coinAmount * 2
  //                         ),
  //                       }).then(function () {
  //                         usersMatchData.delete();
  //                       });
  //                     } else {
  //                       usersMatchData.delete();
  //                     }
  //                   }
  //                 });
  //               }
  //               if (matchLength > 3) {
  //                 const matchDataId = matchOverallRef[3].id;
  //                 const usersMatchData = firestore.doc(
  //                   "users/" +
  //                     auth.currentUser.uid +
  //                     "pointsNumber/ValorantBets/" +
  //                     matchDataId +
  //                     "OutrightWin"
  //                 );
  //                 usersMatchData.get().then((doc) => {
  //                   if (doc.exists) {
  //                     if (doc.data().ToWinId == matchOverallRef[3].winner_id) {
  //                       ValorantBetsSectionRef.update({
  //                         pointsNumber: firebase.firestore.FieldValue.increment(
  //                           doc.data().coinAmount * 2
  //                         ),
  //                       }).then(function () {
  //                         usersMatchData.delete();
  //                       });
  //                     } else {
  //                       usersMatchData.delete();
  //                     }
  //                   }
  //                 });
  //               }
  //               if (matchLength > 4) {
  //                 const matchDataId = matchOverallRef[4].id;
  //                 const usersMatchData = firestore.doc(
  //                   "users/" +
  //                     auth.currentUser.uid +
  //                     "pointsNumber/ValorantBets/" +
  //                     matchDataId +
  //                     "OutrightWin"
  //                 );
  //                 usersMatchData.get().then((doc) => {
  //                   if (doc.exists) {
  //                     if (doc.data().ToWinId == matchOverallRef[4].winner_id) {
  //                       ValorantBetsSectionRef.update({
  //                         pointsNumber: firebase.firestore.FieldValue.increment(
  //                           doc.data().coinAmount * 2
  //                         ),
  //                       }).then(function () {
  //                         usersMatchData.delete();
  //                       });
  //                     } else {
  //                       usersMatchData.delete();
  //                     }
  //                   }
  //                 });
  //               }
  //               if (matchLength > 5) {
  //                 const matchDataId = matchOverallRef[5].id;
  //                 const usersMatchData = firestore.doc(
  //                   "users/" +
  //                     auth.currentUser.uid +
  //                     "pointsNumber/ValorantBets/" +
  //                     matchDataId +
  //                     "OutrightWin"
  //                 );
  //                 usersMatchData.get().then((doc) => {
  //                   if (doc.exists) {
  //                     if (doc.data().ToWinId == matchOverallRef[5].winner_id) {
  //                       ValorantBetsSectionRef.update({
  //                         pointsNumber: firebase.firestore.FieldValue.increment(
  //                           doc.data().coinAmount * 2
  //                         ),
  //                       }).then(function () {
  //                         usersMatchData.delete();
  //                       });
  //                     } else {
  //                       usersMatchData.delete();
  //                     }
  //                   }
  //                 });
  //               }
  //               if (matchLength > 6) {
  //                 const matchDataId = matchOverallRef[6].id;
  //                 const usersMatchData = firestore.doc(
  //                   "users/" +
  //                     auth.currentUser.uid +
  //                     "pointsNumber/ValorantBets/" +
  //                     matchDataId +
  //                     "OutrightWin"
  //                 );
  //                 usersMatchData.get().then((doc) => {
  //                   if (doc.exists) {
  //                     if (doc.data().ToWinId == matchOverallRef[6].winner_id) {
  //                       ValorantBetsSectionRef.update({
  //                         pointsNumber: firebase.firestore.FieldValue.increment(
  //                           doc.data().coinAmount * 2
  //                         ),
  //                       }).then(function () {
  //                         usersMatchData.delete();
  //                       });
  //                     } else {
  //                       usersMatchData.delete();
  //                     }
  //                   }
  //                 });
  //               }
  //               if (matchLength > 7) {
  //                 const matchDataId = matchOverallRef[7].id;
  //                 const usersMatchData = firestore.doc(
  //                   "users/" +
  //                     auth.currentUser.uid +
  //                     "pointsNumber/ValorantBets/" +
  //                     matchDataId +
  //                     "OutrightWin"
  //                 );
  //                 usersMatchData.get().then((doc) => {
  //                   if (doc.exists) {
  //                     if (doc.data().ToWinId == matchOverallRef[7].winner_id) {
  //                       ValorantBetsSectionRef.update({
  //                         pointsNumber: firebase.firestore.FieldValue.increment(
  //                           doc.data().coinAmount * 2
  //                         ),
  //                       }).then(function () {
  //                         usersMatchData.delete();
  //                       });
  //                     } else {
  //                       usersMatchData.delete();
  //                     }
  //                   }
  //                 });
  //               }
  //               if (matchLength > 8) {
  //                 const matchDataId = matchOverallRef[8].id;
  //                 const usersMatchData = firestore.doc(
  //                   "users/" +
  //                     auth.currentUser.uid +
  //                     "pointsNumber/ValorantBets/" +
  //                     matchDataId +
  //                     "OutrightWin"
  //                 );
  //                 usersMatchData.get().then((doc) => {
  //                   if (doc.exists) {
  //                     if (doc.data().ToWinId == matchOverallRef[8].winner_id) {
  //                       ValorantBetsSectionRef.update({
  //                         pointsNumber: firebase.firestore.FieldValue.increment(
  //                           doc.data().coinAmount * 2
  //                         ),
  //                       }).then(function () {
  //                         usersMatchData.delete();
  //                       });
  //                     } else {
  //                       usersMatchData.delete();
  //                     }
  //                   }
  //                 });
  //               }
  //               if (matchLength > 9) {
  //                 const matchDataId = matchOverallRef[9].id;
  //                 const usersMatchData = firestore.doc(
  //                   "users/" +
  //                     auth.currentUser.uid +
  //                     "pointsNumber/ValorantBets/" +
  //                     matchDataId +
  //                     "OutrightWin"
  //                 );
  //                 usersMatchData.get().then((doc) => {
  //                   if (doc.exists) {
  //                     if (doc.data().ToWinId == matchOverallRef[9].winner_id) {
  //                       ValorantBetsSectionRef.update({
  //                         pointsNumber: firebase.firestore.FieldValue.increment(
  //                           doc.data().coinAmount * 2
  //                         ),
  //                       }).then(function () {
  //                         usersMatchData.delete();
  //                       });
  //                     } else {
  //                       usersMatchData.delete();
  //                     }
  //                   }
  //                 });
  //               }
  //             });
  //         }
  //       });
  //     } else {
  //       return
  //     }
  //   });
  // }, []);
  return <div></div>;
}
