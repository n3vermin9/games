import { flags } from './flags.js';

const flag = document.querySelector('.flag')
const input = document.querySelector('.input')

let res = Object.values(flags)

flag.innerText = res[115]