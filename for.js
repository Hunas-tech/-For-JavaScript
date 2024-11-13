/*
const regularArray = [2,5,2,7,1,3,4,7];

//let count =0;
for (let count = 0; count < regularArray.length; count++) {
    regularArray[count] +=count
//count++;
}
console.log('O array atual é!', regularArray);


const frutas = ["maça", "banana", "laranja", "uva"];

for (let i = 0; i <frutas.length; i++){
    console.log(frutas[i]);

}


//////////

let soma = 0;

for(let i =1; i<=10; i++){
    soma += i
}

console.log("A soma de 1 a 10 é:", soma);

/////////

const pessoa = {
    nome: "Hunas",
    idade: 17,
    profissão: "Desenvolvedor"
};

for(let propriedade in pessoa) {
console.log(`${propriedade}: ${pessoa[propriedade]}`);
}


///////

const prompt = require('prompt-sync')(); // Importa o pacote prompt-sync

// Pergunta quantas vezes o usuário deseja inserir números
const numIteracoes = parseInt(prompt("Quantas vezes você quer inserir um número? "));

// Variável para armazenar a soma
let somaTotal = 0;

// Laço de repetição para pedir os números
for (let i = 1; i <= numIteracoes; i++) {
    // Pede ao usuário para inserir um número
    const numero = parseFloat(prompt(`Digite o número ${i}: `));
    
    // Adiciona o número inserido à soma total
    somaTotal += numero;
}

// Exibe a soma total
console.log(`A soma total dos números inseridos é: ${somaTotal}`);

*/

/*//exercicio-1

const alunos = ['thiago','gabriel','carla','isabella','yuri'];

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
}


//exercicio-2

const num = 5;

for (let i = 0; i <= 10; i++) {
    console.log(num + "x" + i + "=" +(num *i))
}


//exercicio-3

const prompt1 = require('prompt-sync')();
let notas = []

for (let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt1(`Digite a nota ${i + 1}: `));
    notas.push(nota);
    let soma = notas.reduce((a, b) => a + b, 0);
    let media = soma / notas.length;
    console.log(`A média das notas é: ${media.toFixed(2)}`);
}


//exercicio-4

const prompt7 = require('prompt-sync')();

let contagem =[];

for(let i = 10 ; i >= 1; i--){
    console.log([i]);
}


//exercicio-5

let par = []

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}


//exercicio-6

let material =["caneta, lapis, borracha, mochila, caderno, tesoura"];

for (let i = 0; i <material.length; i++){
    console.log(material[i]);
}


//exercicio-7

const prompt8 = require('prompt-sync')(); 

let N = parseFloat(prompt("Digite um numéro: "))
let somageral = 0

for (let i = 1; i <= N ; i++) {
    somageral += i;

}
console.log(`A soma total dos números de 1 até ${N} é: ${somageral}`);


//exercicio-8

const prompt9 = require('prompt-sync')();

let num = []
let fatorial = 1

let n = parseInt(prompt('Digite um número: '))
for (let i = 1; i <= n; i++) {
    num.push(i)
    fatorial *= i
    }

 console.log(fatorial)


//exercicio-9

const prompt10 = require('prompt-sync')();

let vogal = "livro"

for (let i = 0; i < vogal.length; i++) {
    if (vogal[i] == "a" || vogal[i] == "e"
        || vogal[i] == "i" || vogal[i] == "o" ||
        vogal[i] == "u") {
        console.log(`A palavra ${vogal} tem as vogais: ${vogal[i]}`);
    }
}



//exercicio-10
const prompt = require('prompt-sync')();

let continuar = 's';

while (continuar === 's') {
    let n = parseInt(prompt('Digite um número: '));
    let fatorial = 1;

    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${n} é: ${fatorial}`);

    continuar = prompt('Deseja calcular outro fatorial? (s/n): ').toLowerCase();
}

console.log('cabo');

*/


