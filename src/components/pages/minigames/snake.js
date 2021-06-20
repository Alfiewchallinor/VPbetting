 import React from "react";
import MinigamesHeader from "../../master/minigamesHeader";
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED,
getSnakeHead, snakeIntersection } 
from './snake/snakea'
import { outsideGrid } from './snake/grid'
import { update as updateFood, draw as drawFood } from './snake/food'
import $ from "jquery"

const  snake = () => {
   const  game = () => {
     $("#clicker").hide()
    let lastRenderTime = 0
    let gameOver = false
    const gameBoard = document.getElementById('game-board')
    const modalL = document.querySelector('#modalL')
    const startGameBtnB = document.querySelector('#startGameBtnB')
    
    function main(currentTime) {
    
        if (gameOver) {
            modalL.style.display = 'flex'
            return   
    }
        window.requestAnimationFrame(main)
        const secondsSinceLastRender = (currentTime - lastRenderTime) / 250
        if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
        lastRenderTime = currentTime
        update()
        draw()   
    }
    window.requestAnimationFrame(main)
    
    function update() {
        updateSnake()
        updateFood()
        checkDeath()
    }
    function draw() {
        gameBoard.innerHTML = ''
        drawSnake(gameBoard)
        drawFood(gameBoard)
    }
    
    function checkDeath() {
        gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
    }
    
    startGameBtnB.addEventListener('click',() => {
        window.location.reload()
    }) 
  }

  const linkchanger = () => {
    $("#game-board").css("background-image", "url('../images/image0.jpg')")
  }
  const leo = () => {
    $("#game-board").css("background-image", "url('../images/leoard.png')")
  }
    return (
      <div className="bodydivblack">
        
        <MinigamesHeader />
        <div id="score">0 </div>
        <div id="game-board" style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "../images/snake-background.png"
            })`,
          }}> </div>
        <div
          onClick={linkchanger}
          className="snakered"
        >
          FREDBOAT BACKGROUND
        </div>
        <div onClick={leo} className="snakered tyy">
          LEOARDLADD BACKGROUND
        </div>
        <div  id="clicker"className="fixed inset-0 flex items-center justify-center" >
    <div className="bg-white max-w-md w-full p-6 text-center">
      <h1 className="text-4xl font-bold leading-none">
        <span /><span id="bigScoreEl" /> 
      </h1> 
      <p className="text-sm text-gray-900 mb-4">SNAKE</p> 
      <div>
        <div className="bg-blue-500 text-white w-full cursor-pointer
     py-3 rounded-full" id="startGameBtn" onClick= {game}>CLICK TO START GAME</div>
      </div>
    </div>
  </div>
        <div id="filler1" />
        <div
          className="fixed inset-0 flex items-center justify-center"
          id="modalL"
          style={{ display: "none" }}
        >
          <div className="bg-white max-w-md w-full p-6 text-center">
            <h1 className="text-4xl font-bold leading-none">
              <span>+</span>
              <span id="bigScoreElB">0</span>
            </h1>
            <p className="text-sm text-gray-700 mb-4">Coins </p>
            <div>
              <div
                className="bg-blue-500 text-white w-full
     py-3 rounded-full cursor-pointer"
                id="startGameBtnB"
              >
                RESTART
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default snake;
