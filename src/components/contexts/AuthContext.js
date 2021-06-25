import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase";
import firebase from "firebase";


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function createAccount(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
    
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password),
    firebase.database.collection('users').doc(email,password.user.uid).set({
      points: '0'})
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    createAccount,
    updateEmail
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}


function updateEmail(emailRef) {
  const user = firebase.auth().currentUser;
 return user.updateEmail(emailRef)
}








