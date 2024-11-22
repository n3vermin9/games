const input = document.querySelector('.input')
const btnGenerate = document.querySelector('.generate')
const btnCopy = document.querySelector('.copy')


window.addEventListener('load', ()=>{
  input.value = ''
})

let source = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
  'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7',
  '8', '9'
]

let res = ''

btnGenerate.addEventListener('click', () => {
  res = ''
  for (let i = 0; i < 20; i++) {
     res+= source[Math.floor(Math.random() * source.length)]
  }
  input.value = res
})

btnCopy.addEventListener('click', ()=>{
  input.select();
  document.execCommand("copy");
})