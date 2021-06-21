import React from 'react'
import { Link } from "react-router-dom";
import firebase from "firebase/app"
import $ from "jquery"


const Loginicon = () => {

 
  
  firebase.auth().onAuthStateChanged ((user) =>{
    if(user) {
      $("#LOGIN").css("display", "none")
      $("#MYACCOUNT").css("display", "block")
      
    } else {
      $("#LOGIN").css("display", "block")
      $("#MYACCOUNT").css("display", "none")
    }
  });

  return (
    
      <div>
   <Link to="/MyAccount" id="MYACCOUNT" >
    My Account
  </Link>
<Link to="/login" id="LOGIN" >
    LOGIN
  </Link>
  </div>
  )
    
}

export default Loginicon
