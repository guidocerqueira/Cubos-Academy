const original = [5, 7, 13, 17, 26, 34, 118, 245];

const x = []
for ( let i = 0 ; i < original.length ; i++) {
    if ((original[i] > 10 && original[i] < 20) || original[i] > 100) {
        x.push(original[i]);
    }
}

console.log(x);
// Declare um array contendo alguns números quaisquer.

// Depois crie um novo array que contenha apenas os números do array original que estejam entre 10 e 20 ou que sejam maiores que 100. Ao final, imprima a variável que guarda o novo array.

// Exemplo:

// Para o array **original** abaixo:
// ```javascript=
// const original = [5, 7, 13, 17, 26, 34, 118, 245];

// // seu codigo aqui
// ```
// Deverá ser impresso no console:
// ```
// [13, 17, 118, 245]
// ```
// Teste também alterando os números do array original! =)
