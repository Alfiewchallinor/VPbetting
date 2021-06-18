import React from "react";
import MinigamesHeader from "../../master/minigamesHeader";
import Levels from './levels'
import { gsap } from "gsap";

class circleShooterEasy extends React.Component {

    gameMedium = () => {
    
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')


canvas.width = window.innerWidth 
canvas.height = window.innerHeight 

const startGameBtn = document.querySelector('#startGameBtn')
const startGameBtnA = document.querySelector('#startGameBtnA')
const modalEl = document.querySelector('#modalEl')
const bigScoreElA = document.querySelector('#bigScoreElA')
const modalR = document.querySelector('#modalR')



class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius,
            0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()    
    }
}
class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y 
        this.radius = radius
        this.color = color 
        this.velocity = velocity
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius,
            0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()   
    }

    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

class Enemy {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y 
        this.radius = radius
        this.color = color 
        this.velocity = velocity
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius,
            0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()   
    }

    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}


const friction = 0.99
class Particle {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y 
        this.radius = radius
        this.color = color 
        this.velocity = velocity
        this.alpha = 1
    }

    draw() {
        c.save()
        c.globalAlpha = this.alpha
        c.beginPath()
        c.arc(this.x, this.y, this.radius,
            0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()  
            c.restore() 
    }

    update() {
        this.draw()
        this.velocity.x *= friction
        this.velocity.y *= friction
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        this.alpha -=0.01
    }
}

const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 13, 'white')
const projectiles =[]
const enemies = []
const particles = []

function spawnEmemies() {
   setInterval(() =>{
        const radius = Math.random() * (33 - 6) + 6

        let x
        let y

        if(Math.random() <0.5) {
        x = Math.random() <0.5 ? 0 - radius : canvas.width + radius
        y = Math.random() * canvas.height
        } else {
            x = Math.random() * canvas.width
            y = Math.random() <0.5 ? 0 - radius : canvas.height + radius

        }
        const color = `hsl(${Math.random() * 360}, 50%, 50%)`
        
        const angle = Math.atan2(
            canvas.height / 2 - y,
            canvas.width / 2 - x
            )
            const velocity = {
                x: Math.cos(angle) * 2,
                y: Math.sin(angle) * 2
            }
        enemies.push(new Enemy(x, y, radius, color, velocity))
    }, Math.random()* (1300 - 1150) + 1150,)
}

let animationId
var score = 0
function animate() {
    animationId = requestAnimationFrame(animate)
    c.fillStyle = 'rgba( 0, 0, 0, 0.1)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
    particles.forEach((particle, index) => {
        if(particle.alpha <= 0) {
            particles.splice(index, 1)
        } else {
          particle.update()  
        }
    })
    projectiles.forEach((projectile, index) =>{
         projectile.update()
        //remove from edges of the screen
         if(
            projectile.x + projectile.radius < 0 
            ||
            projectile.x - projectile.radius > canvas.width
            ||
             projectile.y + projectile.radius < 0
             ||
             projectile.y - projectile.radius > canvas.height) {
            setTimeout(() => {
                 projectiles.splice(index, 1)
                }, 0)
            }
        })
        enemies.forEach((enemy, index) => {
            enemy.update()
            
            const dist = Math.hypot(player.x - enemy.x,
                player.y - enemy.y)
                //end game
                if(dist - enemy.radius - player.radius< 1) {
                    cancelAnimationFrame(animationId)
                    modalR.style.display = 'flex'
                    bigScoreElA.innerHTML = score
                }

            projectiles.forEach((projectile, projectileIndex) => {
             const dist = Math.hypot(projectile.x - enemy.x,
                     projectile.y - enemy.y)
                     //objects collide
                     if(dist - enemy.radius - projectile.radius< 1)
                     {
                         // create explosion
                        for(let i = 0; i < enemy.radius * 2; i++) {
                            particles.push(
                                new Particle(projectile.x,
                                projectile.y, Math.random() * 2, enemy.color, {x:
                                (Math.random() -0.5) * (Math.random() * 5), y: (Math.random() -0.5) * (Math.random() * 5) }))
                        }

                        if(enemy.radius -10 > 9) {

                            //increase score 
                        score += 1
                        document.getElementById('scoreel').innerHTML = score

                            gsap.to(enemy, {
                                radius: enemy.radius - 15
                            })
                            setTimeout(() => {
                                 projectiles.splice(projectileIndex, 1)
                                }, 0)
                        }
                        else {
                            score += 5/2
                        document.getElementById('scoreel').innerHTML = score
                        
                            setTimeout(() => {
                                enemies.splice(index, 1)
                                 projectiles.splice(projectileIndex, 1)
                                }, 0) 
                        }
                  }
            })
        })
}

window.addEventListener('click', (event) => {
    const angle = Math.atan2(
        event.clientY - canvas.height /
         2,
        event.clientX - canvas.width / 2
        )
        const velocity = {
            x: Math.cos(angle) * 4.5,
            y: Math.sin(angle) * 4.5
        }
    projectiles.push(new Projectile(
        canvas.width / 2, canvas.height
         / 2, 9, 'white', velocity)
    )
})

startGameBtn.addEventListener('click', () => {
    animate()
    spawnEmemies()
    modalEl.style.display = 'none'

})


startGameBtnA.addEventListener('click', () => {
    window.location.reload()
})
    }
    
    render() {
        return(<div>
            <MinigamesHeader />
             
  <div className="scorecs"><span>COINS: </span><span id="scoreel">0</span></div>
  <div className="fixed inset-0 flex items-center justify-center" id="modalEl">
    <div className="bg-white max-w-md w-full p-6 text-center">
      <h1 className="text-4xl font-bold leading-none">
        <span /><span id="bigScoreEl" /> 
      </h1> 
      <p className="text-sm text-gray-900 mb-4">CIRCLE SHOOTER, LEVEL = EASY</p>
      <div>
        <div className="bg-blue-500 text-white w-full cursor-pointer
     py-3 rounded-full" id="startGameBtn" onClick= {this.gameMedium}> DOUBLE CLICK TO START GAME</div>
      </div>
    </div>
  </div>
  <div className="fixed inset-0 flex items-center justify-center" id="modalR" style={{display: 'none'}}>
    <div className="bg-white max-w-md w-full p-6 text-center">
      <h1 className="text-4xl font-bold leading-none">
        <span>+</span><span id="bigScoreElA">0</span> 
      </h1> 
      <p className="text-sm text-gray-700 mb-4">Coins </p>
      <div>
        <div className="bg-blue-500 text-white w-full
     py-3 rounded-full" id="startGameBtnA">RESTART</div>
      </div>
    </div>
  </div>
  <Levels />
  <canvas />
</div>

        )
    }

}

export default circleShooterEasy;