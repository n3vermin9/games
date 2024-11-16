import { flags } from './flags.js';

const flag = document.querySelector('.flag')
const finishText = document.querySelector('.finish')

const playAgain = document.querySelector('.play-again')

const input = document.querySelector('.input')
const skip = document.querySelector('.skip')

const lives = document.querySelector('.lives')
const score = document.querySelector('.score')
const time = document.querySelector('.time')

let livesCount = 3
let scoreCount = 0
let timeCount = 60

let isTimeStarted = false

window.onload = function(){
  input.value = ''
}

if (localStorage.getItem('score') === null) {
  localStorage.setItem('score', '0');
}

function timerStart() {
  isTimeStarted = true
  let intervalId = setInterval(() => {
    timeCount--
    if (timeCount < 10) {
      time.innerText = `00:0${timeCount}`
    } else {
      time.innerText = `00:${timeCount}`
    }
    if (timeCount == 0) {
      time.innerText = '00:00'
      stopGame()
      clearInterval(intervalId)
    }
  }, 1000);
}

let flagValue = Object.values(flags)
let flagKey = Object.keys(flags)

let randomInt

function generateFlag() {
  randomInt = Math.floor(Math.random() * 110) + 1
  flag.src = flagValue[randomInt]
}

function stopGame() {
  flag.style.display = 'none'
  finishText.style.display = 'block'
  if (scoreCount > localStorage.getItem('score')) {
    localStorage.setItem('score', scoreCount)
    finishText.innerText = `New Score: ${localStorage.getItem('score')}`
  } else {
    finishText.innerText = `Your Score: ${scoreCount}
    best Score: ${localStorage.getItem('score')}
    `
  }
  input.style.display = 'none'
  skip.style.display = 'none'
  playAgain.style.display = 'flex'
}

generateFlag()

input.addEventListener('input', ()=>{
  if (!isTimeStarted) {
    timerStart()
  }
  if (input.value == flagKey[randomInt]) {
    generateFlag()
    input.value = ''
    scoreCount++
    score.innerText = scoreCount
  }
})

skip.addEventListener('click', ()=>{
  if (!isTimeStarted) {
    timerStart()
  }
  generateFlag()
  input.value = ''
  livesCount--
  lives.innerText = livesCount
  if (livesCount == 0) {
    stopGame()
  }
})

playAgain.addEventListener('click', () => {
  window.location.reload()
})