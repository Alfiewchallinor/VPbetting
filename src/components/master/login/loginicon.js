import React from 'react'
import { Link } from "react-router-dom";
import firebase from "firebase/app"
import $ from "jquery"


const Loginicon = () => {

 
  
  firebase.auth().onAuthStateChanged(function(user){
    if(user) {
      $(".loggedOut").css("display", "none")
      $(".loggedIn").css("display", "block")
    } else {
      $(".loggedOut").css("display", "block")
      $(".loggedIn").css("display", "none")
    }
  })

 
  return (
    
      <div>
   <Link to="/MyAccount" id="LOGIN" className="loggedIn">
    My Account
  </Link>
<Link to="/login" id="LOGIN" className="loggedOut">
    LOGIN
  </Link>
  </div>
  )
    
}

export default Loginicon
