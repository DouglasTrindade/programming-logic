const prompt = require('prompt-sync')();

// Functions
const viewStudents = (students) => {
  for (i = 0; i < students.length; i++) {
    console.log(`${students[i].nome}`);
    console.log(`${students[i].idade}`);
  }
};

const addStudent = (students) => {
  console.log('Digite o nome do aluno: ');
  let nome = prompt('');
  console.log('Digite a idade do aluno: ');
  let idade = prompt('');
  console.log('Digite o CPF do aluno: ');
  let cpf = prompt('');
  let student = {nome, idade, cpf};
  students.push(student);
};

const removeStudent = (students) => {
  console.log('Escolha o aluno a ser excluído: ');
  students.map((student, index) => {
    const number = index + 1
    console.log(`${number}. ${student.nome}\n`);
  })

  let numberRemove = prompt('');

  students.splice(numberRemove - 1, 1);
};

const checkinStudent = (students) => {
  console.log('Check-in \n');
  console.log('Digite seu CPF: ');
  let cpf = prompt('');
  const index = students.findIndex(student => student.cpf == cpf);
  students[index].checks.push({type: 'in', date: new Date()});
  console.log(students);
};

const checkoutStudent = (students) => {
  console.log('Checkout \n');
  console.log('Digite seu CPF: ');
  let cpf = prompt('');
  const index = students.findIndex(student => student.cpf == cpf);
  students[index].checks.push({type: 'out', date: new Date()});
  console.log(students);
};

const checksHistoric = (students) => {
   console.log('Histórico de Check-in & Checkout do aluno. \n');
   console.log('Digite o CPF do aluno para ver o histórico: ')
   let cpf = prompt('');
   const index = students.findIndex(student => student.cpf == cpf);
   console.log(students[index].checks);
}

// Program
console.log("___________________   _____________________________");
console.log("\\__    ___/\\_____  \\  \\_____  \\__    ___/\\____    /");
console.log("  |    |    /   |   \\  /   |   \\|    |     /     / ");
console.log("  |    |   /    |    \\/    |    \\    |    /     /_ ");
console.log("  |____|   \\_______  /\\_______  /____|   /_______ \\");
console.log("                   \\/         \\/                 \\/");
console.log("\nGestão de alunos da academia Tootz Gym, selecione uma das opções abaixo:\n")

let students = [
  {nome: 'Douglas', idade: '29', cpf: '09356702460', checks: []},
  {nome: 'Wendell', idade: '29', cpf: '09356702461', checks: []},
  {nome: 'Adelino', idade: '29', cpf: '09356702462', checks: []},
];

let exit = true;

while (exit == true) {
  console.log('1. Ver alunos');
  console.log('2. Cadastrar aluno');
  console.log('3. Remover aluno');
  console.log('4. Fazer Check-in');
  console.log('5. Fazer Check-out');
  console.log('6. Ver histórico check-in/check-out');
  console.log('7. Sair\n');
  let selectedOption = prompt('Opção: ');
  console.log('\n');

  if (selectedOption == 1) {
    viewStudents(students);
  } else if (selectedOption == 2) {
    addStudent(students);
  } else if (selectedOption == 3) {
    removeStudent(students);
    console.log('Aluno removido!\n')
  } else if (selectedOption == 4) {
    checkinStudent(students);
  } else if (selectedOption == 5) {
    checkoutStudent(students);
  } else if (selectedOption) {
    checksHistoric(students);
  } else if (selectedOption == 7) {
    exit = false;
  }
};