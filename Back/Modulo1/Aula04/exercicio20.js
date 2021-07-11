const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

// // for (let i = 0; i < original.length; i++) {
// //     if (original[i] % 2 === 0) {
// //         pares.push(original[i]);
// //     } else {
// //         impares.push(original[i]);
// //     }
// // }

// let i = 0
// while (i < original.length) {
//     if (original[i] % 2 === 0) {
//                 pares.push(original[i]);
//             } else {
//                 impares.push(original[i]);
//             }
//     i++;
// }

for ( let indice of original) {
    if (indice % 2 === 0) {
        pares.push(indice);
    } else {
        impares.push(indice);
    }
}

console.log(pares);
console.log(impares);

// // // // Neste exercício deveremos ler um array de números para separar os pares dos ímpares. Para isso, verificaremos item por item do array original e se for par, adicionaremos o número em um array de pares, e se for ímpar, adicionaremos em um array de ímpares.

// // // // Ao final, deveremos imprimir primeiro o array de pares, e em seguida, imprimir o array de ímpares (Obs.: não é necessário imprimir item a item dos arrays, pode ser os arrays inteiros).

// // // // Portanto, para os arrays de exemplo abaixo
// // // // ```javascript=
// // // // const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // // const pares = [];
// // // // const impares = [];

// // // // // seu codigo aqui
// // // // ```

// // // // Deveremos imprimir no console
// // // // ```
// // // // [2, 4, 6, 8, 10]
// // // // [1, 3, 5, 7, 9]
// // // // ```
// // // // **PLUS:** Tente resolver o exercício usando os 3 tipos de loop aprendidos na aula, um de cada vez.