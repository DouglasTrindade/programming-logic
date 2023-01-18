const prompt = require('prompt-sync')();

const viewClients = (clients) => {
  clients.map((clients) => {
    console.log(`- ${clients.nome} (${clients.cpf})`)
  });

  console.log('\n')
};

const addClient = (clients) => {
  console.log('Cadastre-se preenchendo o formulário.\n')
  console.log('Digite seu nome: ');
  let nome = prompt('');
  console.log('Digite seu sobrenome: ');
  let sobrenome = prompt('');
  console.log('Digite seu CPF: ');
  let cpf = prompt('');
  console.log('Digite seu E-mail: ');
  let email = prompt('');
  console.log('Digite seu Sexo:')
  let genero = prompt('');
  console.log('--------------------------------------------------------------\n')
  let formClient = {nome, sobrenome, cpf, email, genero}
  clients.push(formClient);
};

const removeClient = (clients) => {
  console.log('Qual o Cliente que você deseja remover?');
  console.log('Digite uma das opções abaixo.\n');
  clients.map((clients, index) => {
    const numberClient = index + 1;
    console.log(`${numberClient} ${clients.nome} (${clients.cpf})`);
  });

  console.log('\n');
  let optionRemove = prompt('Opção: ');

  clients.splice(optionRemove - 1, 1);
};

const locateCar = (cars) => {
  console.log('Escolha o carro que você deseja alugar:\n')
  cars.map ((cars, index) => {
    const numberCar = index + 1;
    console.log(`${numberCar}. ${cars.nome}`)
  });
  
  console.log('\n');
  let selectedCar = prompt('Opção: ');

  console.log('\n');
  console.log('Escolha o Cliente que deseja alugar o carro:')
  console.log('\n');

  clients.map((clients, index) => {
    const numberClient = index + 1;
    console.log(`${numberClient}. ${clients.nome}`)
  });

  console.log('\n')
  let selectedClient = prompt('Opção: ');

  console.log(cars[selectedCar - 1].alugado);

 

  if (cars[selectedCar - 1].alugado === false) {
    cars[selectedCar - 1].alugado = true;
    console.log('Carro alugado com sucesso!')
  } else if (cars[selectedCar - 1].alugado === true) {
    console.log('Desculpe! Este carro já está alugado.')
  }

  console.log('\n')
};

const returnCar = () => {

};

console.log("___________________   _____________________________");
console.log("\\__    ___/\\_____  \\  \\_____  \\__    ___/\\____    /");
console.log("  |    |    /   |   \\  /   |   \\|    |     /     / ");
console.log("  |    |   /    |    \\/    |    \\    |    /     /_ ");
console.log("  |____|   \\_______  /\\_______  /____|   /_______ \\");
console.log("                   \\/         \\/                 \\/");
console.log("\nSistema feito para você gerenciar sua Locadora e seus Clientes\n")
console.log('--------------------------------------------------------------\n')
console.log("\nSelecione uma das opções abaixo: \n")

let cars = [
  {nome: 'Sandero', marca: 'Renault', ano: '2020', km: 34.555, alugado: false},
  {nome: 'Focus', marca: 'Ford', ano: '2021', km: 35.555, alugado: false},
  {nome: 'Palio', marca: 'Fiat', ano: '2023', km: 36.555, alugado: false}
];

let clients = [
  {nome: 'Adelino', sobrenome: 'Segundo', cpf: 09356702460, 
    email: 'adelinosegundo@hotmail.com', genero: 'Masculino'},
  {nome: 'Wendell', cobrenome: 'Pomplona', cpf: 09356702461, 
    email: 'wendellbarreto@hotmail.com', genero: 'Masculino'},
  {nome: 'Luan', sobrenome: 'Souza', cpf: 09356702462, 
    email: 'luansouza@hotmail.com', genero: 'Masculino'},
];

let exit = true;

while (exit == true) {
  console.log('1. Ver Clientes');
  console.log('2. Adicionar Cliente');
  console.log('3. Excluir Cliente');
  console.log('4. Alugar Carro');
  console.log('5. Devolver Carro');
  console.log('6. Sair\n');

  let selectedOption = prompt('Opção: ');
  console.log('\n');

  if (selectedOption == 1) {
    viewClients(clients);
  } else if (selectedOption == 2) {
    addClient(clients);
  } else if (selectedOption == 3) {
    removeClient(clients);
  } else if (selectedOption == 4) {
    locateCar(cars);
  } else if (selectedOption == 5) {

  } else if (selectedOption == 6) {
    exit = false;
  }
};


