const lives = document.querySelector('.lives')

const input = document.querySelector('.input-num')
const btnGuess = document.querySelector('.guess')

const btnMore = document.querySelector('.btnMore')
const btnLess = document.querySelector('.btnLess')

const playAgain = document.querySelector('.play-again')
const finish = document.querySelector('.finish')

window.addEventListener('load', ()=>{
  input.value = ''
})

let secretNum = Math.floor(Math.random() * 100)
let found = false

let liveCount = 10

for (let p = 0; p < liveCount; p++) {
  let heart = document.createElement('img')
  heart.src = 'https://static.vecteezy.com/system/resources/thumbnails/013/640/968/small_2x/pixel-heart-pixelart-png.png'
  lives.appendChild(heart)
  heart.id = `heart${p}`
  heart.classList.add('heart')
}

input.addEventListener('input', ()=> {
  input.value = input.value.replace(/[^0-9]/g, '');
  if (input.value > 100) {
    input.value = 100
  }
})

function guessNum() {
if (input.value.length == 0) {
  return
} else {
  if (input.value < secretNum) {
    btnMore.style.background = '#484848'
    btnLess.style.background = '#383838'
  } else if (input.value > secretNum) {
    btnLess.style.background = '#484848'
    btnMore.style.background = '#383838'
  } else if (input.value == secretNum) {
    found = true
    finish.innerText = `
    You won!
    Answer: ${secretNum}`
    stopGame()
  }
  if (!found) {
    if (liveCount == 1) {
      finish.innerText = `
      You lose
      Answer: ${secretNum}`
      stopGame()
    }
    liveCount--;
    try {
      let toRemove = document.getElementById(`heart${liveCount}`)
      toRemove.style.filter = 'opacity(.2)'
    } catch (error) {
    }
  }
}
}

function hideMe(elem) {
  elem.style.display = 'none'
}

function stopGame() {
  hideMe(input)
  hideMe(btnGuess)
  hideMe(btnMore)
  hideMe(btnLess)
  hideMe(lives)
  playAgain.style.display = 'flex'
  finish.style.display = 'flex'
}

btnGuess.addEventListener('click', ()=> {
  guessNum()
})

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    guessNum()
  }
});


playAgain.addEventListener('click', () => {
  window.location.reload()
})