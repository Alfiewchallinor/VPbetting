//REACT IMPORT
import React from "react";
import {  Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router';
import { AuthProvider } from "./components/contexts/AuthContext";

//add bets to account
import Adduserbets from "./Adduserbets";

//Private Routes
import PrivateRouteMyAccount from "./privateRoutes/PrivateRouteMyAccount";
import PrivateRouteLoginAndCreateAccount from "./privateRoutes/PrivateRouteLogin&CreateAccount";
import NotFoundPage from "./NotFoundPage";


//Master
import Footer from "./components/master/Footer"
import MinigamesHeader from "./components/master/minigamesHeader";
import CoinNumber from "./components/pages/CoinNumber"

//PAGES START HERE AND BELOW
//Default pages
import Home from "./components/pages/home"; 
import Tos from "./components/pages/legalpages/termsofservice";
import Privacypolicy from "./components/pages/legalpages/privacypolicy";
import Support from "./components/pages/Support"

//Authentication 
import createAccount from "./components/authpages/createAccount";
import Login from "./components/authpages/Login";
import MyAccount from "./components/authpages/MyAccount";
import usernameSelect from "./components/authpages/usernameSelect";

//Minigames

import circleShooter from "./components/pages/minigames/circleShooter";
import CircleShooterEasy from "./components/pages/minigames/circleShooterEasy";
import CircleShooterHard from "./components/pages/minigames/circleShooterHard";
import Snake from "./components/pages/minigames/snake";
import tictactoe from "./components/pages/minigames/tic-tac-toe";
import TicTacToe4 from "./components/pages/minigames/tic-tac-toe4x4";

//Esports
import Fortnite from "./components/pages/sports/Fortnite";
import FortniteNA from "./components/pages/sports/FortniteNa"
import Valorant from "./components/pages/sports/Valorant";
import LeagueOfLegends from "./components/pages/sports/LeagueOfLegends"

//Sports
import Football from "./components/pages/sports/Football";

const App = ({location}) => {
  const minigamesheaderexclusion = [
    '/',
    "/privacypolicy",
    "/createaccount",
    "/termsofservice",
    "/login",
    "/myaccount",
    "/usernameselect",
    "/support"
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
  "/fortnitena",
  "/valorant",
  "/leagueoflegends",
  "/football",
  "/support"
 ]

 const coinNumberExclusion = [
  "/createaccount",
  "/login",
  "/myaccount",
  "/usernameselect",
  "/",
  "/termsofservice",
  "/valorant",
  "/leagueoflegends",
  "/privacypolicy",
  "/football",
  "/support",
 ]

 const adduserBetsExclusion = [
  "/tictactoe",
  "/tictactoe4x4",
  "/circleshooter",
  "/circleshootereasy",
  "/circleshooterhard",
  "/snake",

 ]


  
  return (
    <AuthProvider>
    <div className="App">
    {adduserBetsExclusion.indexOf(location.pathname) < 0 && <Adduserbets />}
    {coinNumberExclusion.indexOf(location.pathname) < 0 && <CoinNumber />}
    {minigamesheaderexclusion.indexOf(location.pathname) < 0 && <MinigamesHeader/>}
      <Switch>
        
      {/*Index */}
      <Route exact path="/" component={Home} />
      {/*Legal */}
      <Route exact path="/termsofservice" component={Tos} />
      <Route exact path="/privacypolicy" component={Privacypolicy} />
      <Route exact path="/support" component={Support} />
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
      <Route exact path="/fortnitena" component={FortniteNA} />
      <Route exact path="/valorant" component={Valorant} />
      <Route exact path="/leagueoflegends" component={LeagueOfLegends} />

      {/*REAL SPORTS */}
      <Route exact path="/football" component={Football} />
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


