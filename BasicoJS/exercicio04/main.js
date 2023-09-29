
// Importa a função verificarAprovacao do arquivo calculoAprovacao.js
import { verificarAprovacao } from './exercicio04.js';

// Notas para as disciplinas
const notasNodeJS = [75, 80, 90];
const notasDesenvolvimentoWeb = [60, 55, 70];
const notasAlgoritmos = [45, 50, 55];

// Chama a função verificarAprovacao para cada disciplina
const resultadoNodeJS = verificarAprovacao(notasNodeJS);
const resultadoDesenvolvimentoWeb = verificarAprovacao(notasDesenvolvimentoWeb);
const resultadoAlgoritmos = verificarAprovacao(notasAlgoritmos);

// Exibe os resultados no console
console.log(`Node.js: ${resultadoNodeJS}`);
console.log(`Desenvolvimento Web: ${resultadoDesenvolvimentoWeb}`);
console.log(`Algoritmos: ${resultadoAlgoritmos}`);
