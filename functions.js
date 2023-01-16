const prompt = require('prompt-sync')();

/*
function multiplicationTables() {
  let exit = 'N';
  
  while(exit != 'S') {
    let number = parseFloat(prompt('Digite um número: '));
  
    for (let index = 1; index < 1000; index++) {
      let multiplicationTables = (number * index);
      console.log(`${number} x ${index} = ${multiplicationTables}`);
    }
    
    exit = prompt('Deseja sair? S/N: ');
    console.clear();
  }
};
multiplicationTables();
*/

// Exercício 


let number1 = parseFloat(prompt('Digite um número: '));

function sum() {
  let numberSum = parseFloat(prompt('Digite outro número: '));
  let multiplication = number1 * numberSum;
  console.log(`${number1} x ${numberSum} = ${multiplication}`);
}
sum();

