//REACT IMPORT
import React from "react";
import {  Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router';
import { AuthProvider } from "./contexts/AuthContext";

//add bets to account
import Adduserbets from "../Adduserbets";

//Private Routes
import PrivateRouteMyAccount from "../privateRoutes/PrivateRouteMyAccount";
import PrivateRouteLoginAndCreateAccount from "../privateRoutes/PrivateRouteLogin&CreateAccount";
import NotFoundPage from "../NotFoundPage";


//Master
import Footer from "./master/Footer"
import MinigamesHeader from "./master/minigamesHeader";
import SportsHeader from "./master//sportsheader"

//PAGES START HERE AND BELOW
//Default pages
import Home from "./pages/home"; 
import Tos from "./pages/legalpages/termsofservice";
import Privacypolicy from "./pages/legalpages/privacypolicy";

//Authentication 
import createAccount from "./authpages/createAccount";
import Login from "./authpages/Login";
import MyAccount from "./authpages/MyAccount";
import usernameSelect from "./authpages/usernameSelect";

//Minigames

import circleShooter from "./pages/minigames/circleShooter";
import CircleShooterEasy from "./pages/minigames/circleShooterEasy";
import CircleShooterHard from "./pages/minigames/circleShooterHard";
import Snake from "./pages/minigames/snake";
import tictactoe from "./pages/minigames/tic-tac-toe";
import TicTacToe4 from "./pages/minigames/tic-tac-toe4x4";

//Esports
import Fortnite from "./pages/sports/fortnite";
import Valorant from "./pages/sports/Valorant"

const App = ({location}) => {
  const minigamesheaderexclusion = [
    '/',
    "/privacypolicy",
    "/createaccount",
    "/termsofservice",
    "/login",
    "/myaccount",
    "/usernameselect",
    "/fortnite",
    "/valorant"
]
 const sportsheaderexclusion = [
  '/',
  "/privacypolicy",
  "/createaccount",
  "/termsofservice",
  "/login",
  "/myaccount",
  "/usernameselect",
  "/tictactoe",
  "/tictactoe4x4",
  "/circleshooter",
  "/circleshootereasy",
  "/circleshooterhard",
  "/snake"
 ]
 const footerexclusion = [
  "/createaccount",
  "/login",
  "/myaccount",
  "/usernameselect",
  "/tictactoe",
  "/tictactoe4x4",
  "/circleshooter",
  "/circleshootereasy",
  "/circleshooterhard",
  "/snake",
  "/fortnite",
  "/valorant"
 ]


  Adduserbets()
  return (
    <AuthProvider>
    <div className="App">
      {/*MinigamesHeader addition*/}
    {minigamesheaderexclusion.indexOf(location.pathname) < 0 && <MinigamesHeader/>}
    {sportsheaderexclusion.indexOf(location.pathname) < 0 && <SportsHeader />}
      <Switch>
      {/*Index */}
      <Route exact path="/" component={Home} />
      {/*Legal */}
      <Route exact path="/termsofservice" component={Tos} />
      <Route exact path="/privacypolicy" component={Privacypolicy} />
      {/*Authentication */}
      <PrivateRouteLoginAndCreateAccount exact path="/createaccount" component={createAccount} />
      <PrivateRouteLoginAndCreateAccount exact path="/login" component={Login} />
      <PrivateRouteMyAccount exact path="/myaccount" component={MyAccount} />
      <PrivateRouteMyAccount exact path="/usernameselect" component={usernameSelect} />
      {/*Minigames */}
      
      <Route exact path="/tictactoe" component={tictactoe} />
      <Route exact path="/tictactoe4x4" component={TicTacToe4} />
      <Route exact path="/circleshooter" component={circleShooter} />
      <Route exact path="/circleshootereasy" component={CircleShooterEasy} />
      <Route exact path="/circleshooterhard" component={CircleShooterHard} />
      <Route exact path="/snake" component={Snake} />

      {/*Sports */}
      <Route exact path="/fortnite" component={Fortnite} />
      <Route exact path="/valorant" component={Valorant} />
      {/*404 ERROR PAGE */}
      <Route component={NotFoundPage} />
      
      {/*REDIRECT */}
      </Switch>
      {footerexclusion.indexOf(location.pathname) < 0 && <Footer />}
    </div>
    </AuthProvider>
  );
}
export default withRouter(App);
