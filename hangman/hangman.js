const keyBtn = document.querySelectorAll('.keyboard-btn')
const inputWord = document.querySelector('.inputWord')
const hangman = document.querySelector('.hangman')
const label = document.querySelector('.label')
const refresh = document.querySelector('.refresh')

document.addEventListener('DOMContentLoaded', () => {
})

const nouns = [
  "abyss", "agent", "anchor", "arcane", "artifact",
  "ascent", "beacon", "bistro", "cactus", "candle",
  "cavern", "cipher", "clutch", "cortex", "cradle",
  "crown", "curtain", "dagger", "dancer", "decade",
  "demon", "docket", "drama", "duplex", "echo",
  "ellipse", "elixir", "emperor", "empire", "essence",
  "fable", "fathom", "faucet", "flick", "glimpse",
  "glisten", "goddess", "golem", "gothic", "grotto",
  "guitar", "hallow", "horizon", "huddle", "impala",
  "indicator", "injury", "jacket", "jewel", "jigsaw",
  "jungle", "kettle", "kernel", "lizard", "mantra",
  "marble", "mend", "mosaic", "muffin", "nectar",
  "night", "oasis", "obscure", "octave", "optics",
  "oracle", "overlap", "palace", "pavilion", "pencil",
  "pepper", "phantom", "plasma", "quasar", "quilt",
  "radius", "rebel", "refrain", "refuge", "regret",
  "repose", "riddle", "rocket", "scepter", "shroud",
  "silk", "sliver", "symphony", "tango", "tapestry",
  "target", "thicket", "throne", "tidal", "tonic",
  "tornado", "torque", "torrent", "trance", "trophy",
  "tundra", "turret", "unison", "vanguard", "vertex",
  "vessel", "vortex", "whimsy", "wisp", "wisdom",
  "wraith", "yacht", "zenith", "zodiac", "archer",
  "beetle", "bison", "canyon", "celery", "chimera",
  "citadel", "crony", "dynamo", "falcon", "ferret",
  "gavel", "herald", "hymn", "jungle", "lotus",
  "magnet", "mantis", "monk", "ogre", "peacock",
  "pillow", "plume", "raven", "scythe", "serpent",
  "shiver", "skein", "sphinx", "stardust", "summit",
  "tide", "turtle", "velvet", "vortex", "wander",
  "whisper", "wyvern", "abyss", "quasar", "forge",
  "glider", "maverick", "handle", "quicksand", "verge",
  "warden", "amber", "breeze", "canvas", "enigma",
  "fresco", "grotto", "haze", "paradigm", "pylon",
  "phantom", "viewport", "cloud", "synergy", "stitch",
  "turkey", "baffle", "bramble", "cadence", "chisel",
  "cinder", "fissure", "whistle", "boomerang", "silo",
  "sickle", "volcano", "cortex", "helix", "jaunt",
  "quarry", "cobalt", "mosaic", "archaic", "murmur",
  "nascent", "plush", "quaint", "explicit", "elder"
];

function resetGame() {
  location.reload();
}

const randomFrom = Math.floor(Math.random() * nouns.length)

let newWord = nouns[randomFrom]
let counter = 7
let isLose = false;


for (let p = 0; p < counter; p++) {
  let heart = document.createElement('img')
  heart.src = 'https://static.vecteezy.com/system/resources/thumbnails/013/640/968/small_2x/pixel-heart-pixelart-png.png'
  hangman.appendChild(heart)
  heart.id = `heart${p}`
  heart.classList.add('heart')
}


refresh.addEventListener('click', () => {
  resetGame()
})


for (let i = 0; i < nouns[randomFrom].length; i++) {
  let letterCell = document.createElement('div')
  inputWord.appendChild(letterCell)
  letterCell.classList.add('letter-cell')
  letterCell.id = `cell${i}`
}


function disableBtns(btn) {
  btn.innerText = ''
  btn.disabled = true;
}

keyBtn.forEach(element => {
  element.addEventListener('click', function() {
    disableBtns(element)
  })
});


function guess(elem) {
  if (isLose) {
    return
  }
  // if lose
  if (counter == 1) { 
    hangman.innerText = 'You lose(╥﹏╥)'
    for (let result = 0; result < newWord.length; result++) {
      document.getElementById(`cell${result}`).innerText = newWord[result];
      isLose = true
    }
    keyBtn.forEach(element => {
      disableBtns(element)
    });
  }
  let found = false;
  for (let letter = 0; letter < newWord.length; letter++) {
    if (newWord[letter] === elem) {
      document.getElementById(`cell${letter}`).innerText = elem;
      found = true;
    }
  }
  if (!found) {
    counter--;
    try {
      let toRemove = document.getElementById(`heart${counter}`)
      toRemove.style.filter = 'opacity(.2)'
    } catch (error) {
    }
  }
}