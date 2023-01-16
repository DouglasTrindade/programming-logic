const prompt = require('prompt-sync')();


const addMember = (programmers) => {
  console.log('Digite o nome do membro: ');
  let name = prompt('');
  console.log('Digite a expertise do membro: ');
  let expertise = prompt('');
  console.log('Digite a idade do membro: ');
  let age = prompt('');
  console.log('Digite o sexo do membro: ');
  let gender = prompt('');
  let membro = {name, expertise, age, gender};
  programmers.push(membro);
};

const viewMembers = (programmers) => {
  console.log(programmers);
};

const deleteMember = (programmers) => {
  console.log('Digite o nome do membro: ');
  let name = prompt('');
  for (let i = 0; i < programmers.length; i++) {
    if (programmers[i].name === name) {
      programmers.splice(i, 1);
    }
  }
};

let programmers = [
  {name: 'Wendell', expertise: 'Fulltack', age: 30, gender: 'Masculino', sexuality: 'straight'},
  {name: 'Adelino', expertise: 'Backend & DevOps', age: 28, gender: 'Masculino', sexuality: 'homo'},
  {name: 'Luan', expertise: 'Frontend', age: 32, gender: 'Masculino', sexuality: 'straight'}
];

let keep = true;

while (keep == true) {
  console.log('Escolha um número correspondente a opção desejada.');
  console.log('1. Adicionar membro');
  console.log('2. Listar membros');
  console.log('3. Remover membro');
  console.log('4. Sair');
  let selectedOption = prompt('');

  if (selectedOption == 1) {
    addMember(programmers);
  } else if (selectedOption == 2) {
    viewMembers(programmers);
  } else if (selectedOption == 3) { 
    deleteMember(programmers);
    console.log('Membro deletado.')
    viewMembers(programmers);
  } else if (selectedOption == 4) {
    keep = false;
  }
};
