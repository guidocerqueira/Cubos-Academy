const numeros = [54, 22, 14, 87, 10, 284];

let tem = false
for ( let numb of numeros) {
    if (numb === 10) {
        tem = true;
        console.log(numeros.indexOf(10));
        break;
    }
}
if (!tem) {
    console.log(-1);
}

// Crie um array de números inteiros.

// Faça um programa que verifica se existe o número 10 nesse array. Caso exista, informa a posição (índice) em que o número 10 se encontra. Caso não exista, deverá ser impresso -1.

// Exemplos:

// **a)** Para o array **numeros** abaixo
// ```javascript=
// const numeros = [54, 22, 14, 87, 284];

// // seu codigo aqui
// ```
// Deverá ser impresso no console:
// ```
// -1
// ```

// **b)** Para o array **numeros** abaixo
// ```javascript=
// const numeros = [54, 22, 14, 10, 284];
// ```
// Deverá ser impresso no console:
// ```
// 3
// ```