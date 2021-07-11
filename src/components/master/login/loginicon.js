import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import $ from "jquery";
import { auth } from "../../../firebase";
var firestore = firebase.firestore();

const Loginicon = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $("#LOGIN").css("display", "none");
      $("#MYACCOUNT, .coinicon, .pointsNumberDisplay").css("display", "block");
      const docRef = firestore.doc(
        "users/" + auth.currentUser.uid + "pointsNumber"
      );
      docRef.get().then((doc) => {
        if (doc.exists) {
          document.getElementById("numberPointsId").innerHTML = JSON.stringify(
            doc.data().pointsNumber
          );
        }
      });
    } else {
      $("#LOGIN").css("display", "block");
      $("#MYACCOUNT, .pointsNumberDisplay, .coinicon").css("display", "none");
    }
  });

  return (
    <div>
      <Link to="/myaccount" id="MYACCOUNT">
        My Account
      </Link>
      <Link to="/login" id="LOGIN">
        LOGIN
      </Link>
      <div className="pointsNumberDisplay" id="numberPointsId"></div>
      <img src="images/coin.png" alt="coinicon" className="coinicon" />
    </div>
  );
};

export default Loginicon;
