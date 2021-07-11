const original = [1, 4, 12, 21, 53, 88, 112];

let pares = []

for( let i = 0; i < original.length; i++) {
    if(original[i] % 2 === 0) {
       pares.push(original[i]);
    }
    
}

console.log(pares)


// Declare um array com alguns números inteiros quaisquer.

// Depois, crie um novo array que contenha apenas os números pares do array original.

// Ao final, imprima a variável do array no console.

// Exemplo:

// Para o array **original** abaixo
// ```javascript=
// const original = [1, 4, 12, 21, 53, 88, 112];

// // seu codigo aqui
// ```
// Deverá ser impresso no console:
// ```
// [4, 12, 88, 112]
// ```

// Teste variando os números do array original também! =)
