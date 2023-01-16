const prompt = require('prompt-sync')();

let number1 = parseInt(prompt('Digite um número: '));
let number2 = parseInt(prompt('Digite outro número: '));

let nRandom = parseInt(Math.random() * 2);

/*
switch(number) {
  case 1: 
    console.log('Boa escolha');
    break;
  case 2: 
    console.log('quase');
    break;
  case 3: 
    console.log('errou');
    break;
  default: 
    console.log('Escolha de 1 a 3');
}
*/

/*
if ((nRandom === 0 && number1 < number2) || (nRandom === 1 && number1 > number2)) {
  console.log('The player 1 Win')
} else {
  console.log('The player 2 Win')
}

console.log('nRandom: ' + nRandom);
*/