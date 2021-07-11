const letras = ["A", "a", "B", "C", "E", "e"];

let encontrado = false
let total = 0
for ( let letra of letras) {
    if (letra === "E" || letra === "e" ) {
        encontrado = true;
        total++;        
    }
}

console.log(`Foram encontradas ${total} ${(total===1? "letra" : "letras")} "E" ou "e".`);

if (!encontrado) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
}

// Declare uma nova variável que contem um array contendo algumas letras.

// Faça um programa que conta quantas letras "E" ou "e" existem nessa palavra.

// Imprima mensagens bonitinhas para mostrar o resultado, por favor. Inclusive quando nenhuma letra for encontrada.

// Exemplos:

// **a)** Quando não houver nenhuma letra "E" ou "e" como no array **letras**
// ```javascript=
// const letras = ["A", "a", "B", "C", "L", "z"];

// // seu codigo aqui
// ```
// Deverá ser impresso no console:
// ```
// Nenhuma letra "E" ou "e" foi encontrada.
// ```

// **b)** Quando forem encontradas as letras "E" ou "e" no array **letras**
// ```javascript=
// const letras = ["A", "e", "B", "C", "E", "z"];

// // seu codigo aqui
// ```
// Deverá ser impresso no console:
// ```
// Foram encontradas 2 letras "E" ou "e".
// ```