import React, { useState }from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import LogotopleftWhite from '../master/logotopleft.js/LogotopleftWhite'
import $ from "jquery"
import firebase from 'firebase'

export default function MyAccount() {
    const [setLoading] = useState(false);
    const history = useHistory()

    const displayphotoURL = () => {
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
    const wouldYouLikeToDelete = () => {
    $("#areyouSureContainer").css("display", "block")
}
    const doNotDeleteAccount = () => {
    $("#areyouSureContainer").css("display", "none")
}
    const handleLogout = (e) => {
    const auth = firebase.auth()
        e.preventDefault();
        auth.signOut()
        history.push("/")
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
            <div onLoad={displayphotoURL}>
            <LogotopleftWhite />
            <div className="completeprofilecontainer" >
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
           <Link to="/updateMyAccount"><button id="updateprofileBtn">UPDATE PROFILE</button></Link> 
            </div></section>
            <div id="lineDividerMyAccount"></div>
            <section id="sectionbelow" className="sectionbelow">
                <p className="changepassword">Password</p>
                <button id="updatepasswordBtn">RESET PASSWORD</button>
                <p className="passwordInstruction">Upon resetting your Password you will recieve an email which will have further instructions given.</p>
            </section>
            <button className="deleteaccountBtn" onClick={wouldYouLikeToDelete}>DELETE ACCOUNT</button>
            <button className="logoutaccountBtn" onClick={handleLogout}>LOGOUT</button>
            <div id="makescroll"></div>
            <div id="areyouSureContainer" style={{"display": "none"}}>
                <p className="textsure">DELETE  MY ACCOUNT?<br />
                </p>
                <p className="deleteaccountextraInfo">
                All your account infomation, progress and other infomation will be <span>permanently</span> deleted. (You cannot reverse this process) </p>
                <button className="confirmDelete">YES, DELETE ACCOUNT</button>
                <button className="confirmDont" onClick={doNotDeleteAccount}>DON'T DELETE ACCOUNT</button>
            </div>
            </div>
            </div>

        </div>
        <div id="othercontainer"></div>
        

        
        </div>
    )
}
