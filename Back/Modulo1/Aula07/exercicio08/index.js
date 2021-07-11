const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const novoArray = nomes.filter(function (valor) {
    return valor.substr(0, 1).toLowerCase() == 'a';
});

console.log(novoArray);