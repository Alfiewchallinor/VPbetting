import { onSnake, expandSnake } from "./snakea";
import { randomGridPosition } from "./grid";
import $ from "jquery"
import firebase from "firebase"
import { auth } from "../../../../firebase";
var firestore = firebase.firestore();

let food = getRandomFoodPosition();
let score = 0;
let bigScoreElB = 0;

const EXPANSION_RATE = 2;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
    score++;
    document.getElementById("score").innerHTML = score;
    bigScoreElB += 6;
    document.getElementById("bigScoreElB").innerHTML = bigScoreElB;
    console.log(bigScoreElB);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const docRef = firestore.doc("users/" + auth.currentUser.uid + "pointsNumber")
        docRef.update({
          pointsNumber: firebase.firestore.FieldValue.increment(6)
        }).then(function () {
          console.log("worked")
        }).catch(function(error){
          console.log("error! end of the world incomming:", error)
        })
      } else {
        
      }
    });

  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
  $(".food").css("background-image", "url('../images/coin.png')")
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
