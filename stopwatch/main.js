const btnStart = document.querySelector('.btn-start')
const btnStop = document.querySelector('.btn-stop')
const btnReset = document.querySelector('.btn-reset')

const seconds = document.querySelector('.seconds')
const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')

const marks = document.querySelector('.marks')

let secondsCounter = 1
let minutesCounter = 0
let hoursCounter = 0


let isStarted = false 

function startTime(interval) {
  updateTimer();

  intervalId = setInterval(updateTimer, interval);
}

function updateTimer() {
  if (minutesCounter == 60) {
    hoursCounter++
    minutesCounter = 0
    minutes.innerText = `0${minutesCounter}`
    if (hoursCounter < 10) {
      hours.innerText = `0${hoursCounter}`
    } else {
      hours.innerText = hoursCounter
    }
  }
  if (secondsCounter == 59) {
    minutesCounter++
    if (minutesCounter < 10) {
      minutes.innerText = `0${minutesCounter}`
    } else {
      minutes.innerText = minutesCounter
    }
    secondsCounter = 0
  }
  if (secondsCounter < 10) {
    seconds.innerText = `0${secondsCounter}`
  } else {
    seconds.innerText = secondsCounter
  }
  secondsCounter++
}


function startFunction() {
  if (!isStarted) {
    btnStop.style.display = 'flex'
    btnReset.style.display = 'none'
    setTimeout(() => {
      startTime(1000)
    }, 1000);
  }
  isStarted = true
}

function stopFunction() {
  try {
    clearInterval(intervalId)
    isStarted = false
    btnStop.style.display = 'none'
    btnReset.style.display = 'flex'
  } catch (error) {
  }
}

function resetFunction() {
  secondsCounter = 0
  seconds.innerText = `0${secondsCounter}`
  minutesCounter = 0
  minutes.innerText = `0${minutesCounter}`
  hoursCounter = 0
  hours.innerText = `0${hoursCounter}`
  marks.innerHTML = ``
}



// ${hours.innerText}:${minutes.innerText}:${seconds.innerText}


function markFunction() {
  if (isStarted) {
    let newMark = document.createElement('div')
    newMark.classList.add('mark')
    marks.appendChild(newMark)
    
    let markNumber = document.createElement('div')
    markNumber.classList.add('markNumber')
    newMark.appendChild(markNumber)
    markNumber.innerText = '•'

    let MarkTime = document.createElement('div')
    MarkTime.classList.add('MarkTime')
    newMark.appendChild(MarkTime)
    MarkTime.innerText = `${hours.innerText}:${minutes.innerText}:${seconds.innerText}`

    let deleteMark = document.createElement('div')
    deleteMark.classList.add('deleteMark')
    newMark.appendChild(deleteMark)
    deleteMark.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>'
    marks.scrollTop = marks.scrollHeight;
    deleteMark.addEventListener('click', () => {
      marks.removeChild(newMark)
    })
  }
}