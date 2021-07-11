const numeros = [3, 24, 1, 8, 11, 7, 15];

let resultado = 0
for ( let i = 0 ; i < numeros.length ; i++) {
    
    if( numeros[i] > resultado) {
        resultado = numeros[i]
        
    }
}
console.log(resultado)


// Declare um array com alguns números quaisquer.

// Depois, faça um programa que encontre o maior número desse array e o imprima no console.

// Exemplo:

// Para o array **numeros** abaixo
// ```javascript=
// const numeros = [3, 4, 1, 8, 11, 7, 5];

// // seu codigo aqui
// ```
// Deverá imprimir no console:
// ```
// 11
// ```
// Teste também alterando os números! =)
