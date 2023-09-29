/*
No JavaScript, map e reduce são métodos de array que facilitam a manipulação e transformação de arrays.

map: O método map cria uma nova array com os resultados de chamar uma função fornecida para cada elemento na array original. Ele não modifica a array original.

Exemplo:
*/

let numeros1 = [1, 2, 3, 4, 5];

// Duplica cada número da array
let numerosDobrados = numeros1.map(function(numero) {
    return numero * 2;
});

console.log(numeros1)
console.log(numerosDobrados); // Saída: [2, 4, 6, 8, 10]


/*
Aqui, map é usado para criar uma nova array (numerosDobrados) na qual cada elemento é o dobro do elemento correspondente na array original.

reduce: O método reduce executa uma função redutora (fornecida por você) em cada elemento da array, resultando em um único valor de retorno. 
Ele é frequentemente usado para somar todos os elementos da array, concatenar strings ou realizar outras operações de agregação.

Exemplo:
*/

let numeros2 = [1, 2, 3, 4, 5];

// Soma de todos os elementos da array
let soma = numeros2.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0); // O segundo argumento (0) é o valor inicial do acumulador

console.log(soma); // Saída: 15

/*

Neste exemplo, reduce é usado para somar todos os elementos da array. 
O segundo argumento de reduce é o valor inicial do acumulador, que neste caso é 0.

Ambos map e reduce são poderosos e versáteis, e são frequentemente usados em programação funcional para transformar e 
processar dados de forma concisa e elegante.
*/