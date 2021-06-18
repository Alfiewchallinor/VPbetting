import { onSnake, expandSnake } from "./snakea";
import { randomGridPosition } from "./grid";
import $ from "jquery"

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
