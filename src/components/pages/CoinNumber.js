import React from 'react'
import firebase from "firebase";
import { auth } from "../../firebase"
import $ from "jquery";
var firestore = firebase.firestore();

export default function CoinNumber () {
    
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
        const docRef = firestore.doc(
            "users/" + auth.currentUser.uid + "pointsNumber"
          );
          docRef.get().then((doc) => {
              $("#minigamesNumberGet").html(doc.data().pointsNumber)
          })
        }else{}
        }) 
        return (
            <div className="minigamesNumberDisplay" id="minigamesNumberGet">
        </div>
        )
}
