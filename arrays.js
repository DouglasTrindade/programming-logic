const prompt = require('prompt-sync')();

/*
let products = ['Caneta', 'Lapis', 'Borracha', 'Caderno'];
products.push('pipoca');

let msg = '';

for ( i = 0; i < products.length; i++) {
  msg += 'products ' + (i + 1) + ': ' + products[i];
}

console.log(msg);
*/

/*
let days = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta',
 'sexta-feira', 'sábado'];

let today = new Date();

let dayWeek = today.getDay();

console.log(`Bem-vindo! Hoje é ${days[3]}`);
*/

/*
const sumPair = (arr) => {
  let sum = 0;
  
  for(i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i]);
  
    if (!isNaN(arr[i]) && arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }

  return sum;
};

let number = [1, 2, 3, 5, 2];
let sumOfPar = sumPair(number);

console.log(`A soma dos pares é: ${sumOfPar}`);
*/

/*
let nameProducts = ['Lapis', 'Caderno'];

let priceProducts = [2, 1.6, 4]

nameProducts = ['borracha', 'Caneta', 'Lapis'];

let caneta = new Object();
caneta.name = 'caneta';
caneta.price = 2;


console.log(caneta.name);
*/



let car = new Object();
car.name = 'L200';
car.price = 27.000;
car.stock = 100;

car.comprar = function(qtd) {
  if (!qtd) {
    qtd = 1;
  }

  console.log('comprou o carro');
  this.stock = this.stock - qtd;
  console.log(this.stock);
};

car.comprar();


/*
let role = {frontend: 'Douglas', backend: 'David', fullstack: 'Wendell'};

let tootz = [role, {frontend: {backend: ['david', 'segundo']}, backend: 'David', fullstack: 'Wendell'}];

//console.log(tootz.length);
//console.log(tootz[0].frontend.backend[1]);

console.log(tootz[1].frontend.backend[1]);
*/

let products = [
  {name: 'Monitor', price: 1.555, dimension: '45x25', brand: 'LG', Hz: 75},
  {name: 'Teclado', price: 325, switch: 'brown', brand: 'T-dagger', Ms: 1},
  {name: 'Mouse', price: 222, buttons: 4, brand: 'Razer', weight: '100g'}
];

for (let index = 0; index < products.length; i++) { 
  console.log(`Produto: ${products[i].name}`);
  console.log(`Preço: ${products[i].price}`);
}