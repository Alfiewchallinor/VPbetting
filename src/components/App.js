import React from "react";
import { Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/home";
import Tos from "./pages/legalpages/termsofservice";
import Privacypolicy from "./pages/legalpages/privacypolicy";
import createAccount from "./authpages/createAccount";
import tictactoe from "./pages/minigames/tic-tac-toe";
import TicTacToe4 from "./pages/minigames/tic-tac-toe4x4";
import circleShooter from "./pages/minigames/circleShooter";
import CircleShooterEasy from "./pages/minigames/circleShooterEasy";
import CircleShooterHard from "./pages/minigames/circleShooterHard";
import snake from "./pages/minigames/snake";





function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/tic-tac-toe" component={tictactoe} />
      <Route exact path="/tic-tac-toe-4x4" component={TicTacToe4} />
      <Route exact path="/circleShooter" component={circleShooter} />
      <Route exact path="/CircleShooterEasy" component={CircleShooterEasy} />
      <Route exact path="/CircleShooterHard" component={CircleShooterHard} />
      <Route exact path="/snake" component={snake} />
      <Route exact path="/termsOfService" component={Tos} />
      <Route exact path="/privacyPolicy" component={Privacypolicy} />
      <Route exact path="/createAccount" component={createAccount} />
    </div>
    </AuthProvider>
  );
}

export default App;
