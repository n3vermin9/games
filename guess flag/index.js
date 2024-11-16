import { flags } from './flags.js';

const flag = document.querySelector('.flag')
const input = document.querySelector('.input')
const skip = document.querySelector('.skip')

const lives = document.querySelector('.lives')
const score = document.querySelector('.score')
const time = document.querySelector('.time')

let livesCount = 3
let scoreCount = 0
let timeCount = 59

let isTimeStarted = false

window.onload = function(){
  input.value = ''
}

function timerStart() {
  isTimeStarted = true
  let intervalId = setInterval(() => {
    if (timeCount < 10) {
      time.innerText = `00:0${timeCount}`
    } else {
      time.innerText = `00:${timeCount}`
    }
    timeCount--
    if (timeCount == 0) {
      time.innerText = '00:00'
      clearInterval(intervalId)
    }
  }, 100);
}

let flagValue = Object.values(flags)
let flagKey = Object.keys(flags)

let randomInt = Math.floor(Math.random() * 100) + 1
flag.src = flagValue[randomInt]

input.addEventListener('input', ()=>{
  if (!isTimeStarted) {
    timerStart()
  }
  if (input.value == flagKey[randomInt]) {
    randomInt = Math.floor(Math.random() * 110) + 1
    flag.src = flagValue[randomInt]
    input.value = ''
    scoreCount++
    score.innerText = scoreCount
  }
})

skip.addEventListener('click', ()=>{
  console.log(flagKey[randomInt])
  randomInt = Math.floor(Math.random() * 110) + 1
  flag.src = flagValue[randomInt]
  input.value = ''
  livesCount--
  lives.innerText = livesCount
  if (livesCount == 0) {
    window.location.reload()
  }
})