const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const novoArray = numeros.filter(function (valor) {
    return valor > 0;
});

console.log(novoArray);