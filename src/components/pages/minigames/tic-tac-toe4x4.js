import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase"
import { auth } from "../../../firebase";
import $ from "jquery"
var firestore = firebase.firestore();

class TicTacToe4 extends React.Component {
  game = () => {
    $(".userMustClickHeader").css("display", "none")
    const X_CLASS = "x";
    const CIRCLE_CLASS = "circle";
    const WINNING_COMBINATIONS = [
      //QUICK NOTE: ALL COMBINATIONS ARE IN THE
      //order of TL, TR, BL, BR
      //horizontal line combinations
      [0, 1, 2],
      [1, 2, 3],
      [4, 5, 6],
      [5, 6, 7],
      [8, 9, 10],
      [9, 10, 11],
      [12, 13, 14],
      [13, 14, 15],
      //vertical line combinations
      [0, 4, 8],
      [4, 8, 12],
      [1, 5, 9],
      [5, 9, 13],
      [2, 6, 10],
      [6, 10, 14],
      [3, 7, 11],
      [7, 11, 15],
      //diagonal line combinations, (TL=>BR)
      [4, 9, 14],
      [0, 5, 10],
      [5, 10, 15],
      [1, 6, 11],
      //diagonal line combinations, (TR=>BL)
      [2, 5, 8],
      [3, 6, 9],
      [6, 9, 12],
      [7, 10, 13],
    ];
    const cellElements = document.querySelectorAll("[data-cell]");
    const board = document.getElementById("ttt_boarda");
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
            pointsNumber: firebase.firestore.FieldValue.increment(2)
          }).then(function () {
            
            console.log("worked")
          }).catch(function(error){
            console.log("error! end of the world incomming:", error)
          })
        } else {
          
        }})
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

  restartGame = () => {
    window.location.reload();
  };
  render() {
    return (
      <div onDoubleClick={this.game}>
        <div className="ttt_boarda" id="ttt_boarda">
          <div className="cella" data-cell />
          <div className="cella" data-cell />
          <div className="cella" data-cell />
          <div className="cella" data-cell />
          <div className="cella" data-cell />
          <div className="cella" data-cell />
          <div className="cella" data-cell />
          <div className="cella" data-cell />
          <div className="cella" data-cell />
          <div className="cella" data-cell />
          <div className="cella" data-cell />
          <div className="cella" data-cell />
          <div className="cella" data-cell />
          <div className="cella" data-cell />
          <div className="cella" data-cell />
          <div className="cella" data-cell />
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
                <br /> GGs Only!
              </div>
              
              <span id="bigScoreElB">+12</span>
            </h1>
            <p className="text-sm text-gray-700 mb-4">Coins </p>
            <div>
              <div
                className="bg-blue-500 text-white w-full
     py-3 rounded-full cursor-pointer"
                onClick={this.restartGame}
                id="restartButton"
              >
                RESTART
              </div>
            </div>
          </div>
        </div>
        <Link to="/tictactoe">
          <div className="visit4">3x3 GRID</div>
        </Link>
        <h1 className="userMustClickHeader">DOUBLE CLICK ON BOARD TO START GAME</h1>

      </div>
    );
  }
}

export default TicTacToe4;
