
// Importa a função calcularIMC do arquivo calculoIMC.js
import calcularIMC from './exercicio03.js';

// Exemplo de utilização
const peso = 92; // em kg
const altura = 1.70; // em metros

// Chama a função calcularIMC e armazena o resultado
const imc = calcularIMC(peso, altura);

// Exibe o resultado no console
console.log(`O IMC é: ${imc}`);
