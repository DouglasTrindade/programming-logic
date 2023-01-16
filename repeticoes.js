const prompt = require('prompt-sync')();

// while = Enquanto
// do/while = Se eu quiser que seja executado pelo menos uma vez

/*
let number = parseFloat(prompt('Digite um número: '));

let index = 501;

while (index <= 500) {
  let multiplication = (number * index);
  console.log(`${number} x ${index} = ${multiplication}`);
  index++;
}

console.log('exited the loop');
*/

/*
for (let i = 20; i < 500; i++) { 
  let multiplication = (number * i);
  console.log(`${number} x ${i} = ${multiplication}`);
}

console.log('exited the loop');
*/


let number = parseFloat(prompt('Digite um número: '));
let index = 1;

while (index <= 1000) {
  let multiplication = (number * index);
  console.log(`${number} x ${index} = ${multiplication}`);
  

  if (index % 10 === 0 && index > 0) {
    console.log('-------------------------------------');  
  }
  index++; 
}

console.log('exited the loop');


// Exercício

/*
let year = 1004

while (year <= 2023) {
  if (!(year % 100 === 0) || (year % 400 === 0)) {
    console.log(year);
  } else {
    console.log(`${year} - Não é ano bissexto!`);
  }
  year += 4;
}
*/
