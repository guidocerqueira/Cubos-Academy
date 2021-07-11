const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const numerosEmOrdemCrescente = numeros.sort(function (a, b) {
    return a - b;
});
console.log(numerosEmOrdemCrescente);

const numerosEmOrdemDecrescente = numeros.sort(function (a, b) {
    return b - a;
});
console.log(numerosEmOrdemDecrescente);

const numerosEmOrdemCrescenteUnicode = numeros.sort();
console.log(numerosEmOrdemCrescenteUnicode);


const frutasEmOrdemAlfabetica = frutas.sort(function (a, b) {
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    return 0;
});
console.log(frutasEmOrdemAlfabetica);

const frutasEmOrdemAlfabeticaDecrescente = frutas.sort(function (a, b) {
    if (a.toLowerCase() > b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
        return 1;
    }
    return 0;
});
console.log(frutasEmOrdemAlfabeticaDecrescente);

const frutasEmOrdemAlfabeticaPorCaracteres = frutasEmOrdemAlfabetica.sort(function (a, b) {
    if (a.length > b.length) {
        return 1;
    }
    if (a.length < b.length) {
        return -1;
    }
    return 0;
});
console.log(frutasEmOrdemAlfabeticaPorCaracteres);