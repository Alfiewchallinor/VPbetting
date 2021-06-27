import React from "react";
import MinigamesHeader from "../../master/minigamesHeader";
import { Link } from "react-router-dom";
import $ from "jquery"
import firebase from "firebase"
import { auth } from "../../../firebase";
var firestore = firebase.firestore();

function tictactoe () {
 const gamefunction = () => {
    const X_CLASS = "x";
    const CIRCLE_CLASS = "circle";
    const WINNING_COMBINATIONS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const cellElements = document.querySelectorAll("[data-cell]");
    const board = document.getElementById("ttt_board");
    const winningMessageElement = document.getElementById("winningMessage");
    const winningMessageTextElement = document.querySelector(
      "[data-winning-message-text]"
    );
    let circleTurn;

    startGame();

    function startGame() {
      circleTurn = false;
      cellElements.forEach((cell) => {
        cell.addEventListener("click", handleClick, { once: true });
      });
      setBoardHoverClass();
    }

    function handleClick(e) {
      const cell = e.target;
      const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
      placeMark(cell, currentClass);
      if (checkWin(currentClass)) {
        endGame(false);
      } else if (isDraw()) {
        endGame(true);
      } else {
        swapTurns();
        setBoardHoverClass();
      }
    }

    function endGame(draw) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const docref = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber")
          
          docref.update({
            pointsNumber: firebase.firestore.FieldValue.increment(1.5)
          }).then(function () {
            
            console.log("worked")
          }).catch(function(error){
            console.log("error! end of the world incomming:", error)
          })
        } else {
          
        }
      });
      if (draw) {
        winningMessageTextElement.innerText = "Draw";
      } else {
        winningMessageTextElement.innerText = `${
          circleTurn ? "O's" : "X's"
        } Wins, GGs Only`;
      }
      winningMessageElement.style.display = "flex";
    }
    function isDraw() {
      return [...cellElements].every((cell) => {
        return (
          cell.classList.contains(X_CLASS) ||
          cell.classList.contains(CIRCLE_CLASS)
        );
      });
    }
    function placeMark(cell, currentClass) {
      cell.classList.add(currentClass);
    }

    function swapTurns() {
      circleTurn = !circleTurn;
    }
    function setBoardHoverClass() {
      board.classList.remove(X_CLASS);
      board.classList.remove(CIRCLE_CLASS);
      if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
      } else {
        board.classList.add(X_CLASS);
      }
    }
    function checkWin(currentClass) {
      return WINNING_COMBINATIONS.some((combination) => {
        return combination.every((index) => {
          return cellElements[index].classList.contains(currentClass);
        });
      });
    }
  };
 const  restartfunc = () => {
    window.location.reload();
  };

  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      $("#notLoggedInScore").css("display", "none")
      $("#coinswhenLoggedIn").css("display", "block")
      $("#bigScoreELb").css("display", "block")
    }else {
      $("#notLoggedInScore").css("display", "block")
      $("#coinswhenLoggedIn").css("display", "none")
      $("#bigScoreELb").css("display", "none")
    }
  })
    return (
      <div onLoad={gamefunction}>
        <MinigamesHeader />
        <div className="ttt_board" id="ttt_board">
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
        </div>
        <div
          className="fixed inset-0 flex items-center justify-center"
          id="winningMessage"
          style={{ display: "none" }}
        >
          <div className="bg-white max-w-md w-full p-6 text-center">
            <h1 className="text-4xl font-bold leading-none">
              <div data-winning-message-text>
                {" "}
                X WINS,
                <br /> GGs Only,
              </div>
              <span id="bigScoreELb">+9</span>
              <span id="notLoggedInScore"><Link to="/login"><span style={{"color": "#3B82F6"}}><em>Log in</em></span></Link> to earn coins</span>
            </h1>
            <p className="text-sm text-gray-700 mb-4" id="coinswhenLoggedIn">Coins </p>
            <div>
              <div
                className="bg-blue-500 text-white w-full
     py-3 rounded-full select-none cursor-pointer"
                id="restartButton"
                onClick={restartfunc}
              >
                RESTART
              </div>
            </div>
          </div>
        </div>
        <Link to="/tic-tac-toe-4x4">
          <div className="visit4">4X4 GRID</div>
        </Link>
      </div>
    );
  }


export default tictactoe;
