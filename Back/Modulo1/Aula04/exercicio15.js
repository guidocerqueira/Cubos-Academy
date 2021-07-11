const numeros = [8, 11, 4, 1];

let maior = 0;
let menor = 0;

for ( let i = 0 ; i < numeros.length ; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i] 
            menor = numeros[i] 
    }
}

for ( let i = 0 ; i < numeros.length ; i++) {
    if (numeros[i] < menor) { 
        menor = numeros[i] 
}
}

console.log(maior - menor);
// Declare um array com alguns números inteiros quaisquer.

// Depois, faça um programa que calcule a maior diferença entre dois números desse array.

// Exemplo:

// Para o array **numeros** abaixo:
// ```javascript=
// const numeros = [8, 11, 4, 1];

// // seu codigo aqui
// ```
// Deverá ser impresso no console:
// ```
// 10
// ```
// (pois a maior diferença é 11 - 1 = 10)

// Teste também alterando os números. =)
