import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import PrivateRouteMyAccount from "../privateRoutes/PrivateRouteMyAccount";
import PrivateRouteLoginAndCreateAccount from "../privateRoutes/PrivateRouteLogin&CreateAccount";

import Home from "./pages/home";

import Tos from "./pages/legalpages/termsofservice";
import Privacypolicy from "./pages/legalpages/privacypolicy";

import createAccount from "./authpages/createAccount";
import Login from "./authpages/Login";
import MyAccount from "./authpages/MyAccount";
import tictactoe from "./pages/minigames/tic-tac-toe";
import usernameSelect from "./authpages/usernameSelect";

import TicTacToe4 from "./pages/minigames/tic-tac-toe4x4";
import circleShooter from "./pages/minigames/circleShooter";
import CircleShooterEasy from "./pages/minigames/circleShooterEasy";
import CircleShooterHard from "./pages/minigames/circleShooterHard";
import snake from "./pages/minigames/snake";
import Fortnite from "./pages/sports/fortnite"
import FetchRandomUser from "../test123";





function App() {
  return (
    <AuthProvider>
    <div className="App">
      {/*Index */}
      <Route exact path="/" component={Home} />
      {/*Legal */}
      <Route exact path="/termsOfService" component={Tos} />
      <Route exact path="/privacyPolicy" component={Privacypolicy} />
      {/*Authentication */}
      <PrivateRouteLoginAndCreateAccount exact path="/createAccount" component={createAccount} />
      <PrivateRouteLoginAndCreateAccount exact path="/login" component={Login} />
      <PrivateRouteMyAccount exact path="/MyAccount" component={MyAccount} />
      <PrivateRouteMyAccount exact path="/usernameSelect" component={usernameSelect} />
      {/*Minigames */}
      <Route exact path="/tic-tac-toe" component={tictactoe} />
      <Route exact path="/tic-tac-toe-4x4" component={TicTacToe4} />
      <Route exact path="/circleShooter" component={circleShooter} />
      <Route exact path="/CircleShooterEasy" component={CircleShooterEasy} />
      <Route exact path="/CircleShooterHard" component={CircleShooterHard} />
      <Route exact path="/snake" component={snake} />
      {/*Sports */}
      <Route exact path="/fortnite" component={Fortnite} />
      <Route exact path="/test123" component={FetchRandomUser} />
      
    </div>
    </AuthProvider>
  );
}

export default App;
