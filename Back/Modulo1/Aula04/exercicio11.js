const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let pares = []

for( let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) {
       pares.push(numeros[i]);
    }
    
}

let soma = 0
for ( let i in pares) {
    soma += pares[i]
}
console.log(soma)


// Declare um array com alguns números inteiros quaisquer.

// Depois, percorra este array e calulcule a soma dos números pares presentes nesse array.

// Exemplo:

// Para o array **numeros** abaixo
// ```javascript=
// const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

// // seu codigo aqui
// ```
// Deverá ser impresso no console:
// ```
// 28
// ```

// Teste variando os números do array **numeros** também! =)
