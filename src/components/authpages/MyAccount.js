import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import Logotopleft from '../master/logotopleft.js/Logotopleft'
import $ from "jquery"
import firebase from 'firebase'

export default function MyAccount() {

    const hello = () => {
    if(currentUser.phoneNumber === null) {
        document.getElementById("hopethisworks").innerHTML = "You have not added a phone number yet."
    }
    if(currentUser.photoUrl === null) {
        document.getElementById("defaultLogo").src = firebase.auth().currentUser.photoUrl
    } 
    if(currentUser.photoUrl !== null) {
        document.getElementById("defaultLogo").src = "https://firebasestorage.googleapis.com/v0/b/vpbetting-120f3.appspot.com/o/default_logo.png?alt=media&token=7c048a81-9faa-4676-b265-9bc629efa823"
    }
    
}
    const showIdFunction = () => {
        $("#hiddentextclicker, #hiddentext").css("display", "none")
        $(".makeAbsolute2, #otherhiddentextclicker").css("display", "block")
    }
    const hideIdFunction = ()=> {
        $("#hiddentextclicker, #hiddentext").css("display", "block")
        $(".makeAbsolute2, #otherhiddentextclicker").css("display", "none")
    }

    const { currentUser } = useAuth()
    return (
        <div className="completeprofilecontainer" onLoad={hello}>
            <Logotopleft />
            <div id="formcontainer">
            <div className="profileContainer">
                <section id="myaccountwrapper">
                    
            
            <img   id="defaultLogo" />
                    <div id="bottomTopSection">
                       
           <ol><li> <h3 className="titleca profilePositionOne">EMAIL</h3></li>
           <li> <h3 className="titleca profilePositionOne">PHONE NUMBER</h3></li>
           <li> <h3 className="titleca profilePositionOne">USER ID</h3></li>
            </ol>
            <ol><li> <h3 className="titleca profilePositionTwo">{currentUser.email}</h3></li>
           <li> <h3 className="titleca profilePositionTwo" id="hopethisworks">{currentUser.phoneNumber}</h3></li>
           <li> <h3 className="titleca profilePositionTwo makeAbsolute2" style={{"display": "none"}}>{currentUser.uid}</h3></li>
            </ol>
            <p className="hiddentext" id="hiddentext">********* </p>
            <p className="hiddentext" id="hiddentextclicker" onClick={showIdFunction}>SHOW </p>
            <p className="hiddentext" id="otherhiddentextclicker" onClick={hideIdFunction} style={{"display": "none"}}>HIDE </p>
            <button id="updateprofileBtn">UPDATE PROFILE</button>
            </div></section>
            <div id="lineDividerMyAccount"></div>
            </div>
            </div>

        </div>
    )
}
