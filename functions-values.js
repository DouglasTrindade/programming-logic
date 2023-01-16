const prompt = require('prompt-sync')();


/*
const calcArea = (width, height) => {
  areaResult = width * height;
  console.log(`O resultado da área é:  ${width} x ${height} = ${areaResult}`)
}

let w = parseFloat(prompt('Digite a largura: '));
let h = parseFloat(prompt('Digite a altura: '));

calcArea(w, h);
*/


const calcArea = (width, height) => {
  if (width === undefined || height === undefined) {
    throw new Error('Para calcular a área é necessário dois números.');
  }
  if (isNaN(width) || isNaN(height)) {
    throw new Error('Apenas números!');
  }

  let areaResult = width * height;
  console.log(`O resultado da área é:  ${w} x ${h} = ${areaResult}`);
};

let w = parseFloat(prompt('Digite um número: '));
let h = parseFloat(prompt('Digite outro número: '));

try {
  calcArea(w, h);
} catch (e) {
  console.log(`${e.message}`);
}