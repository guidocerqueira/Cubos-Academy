const numeros = [0, 122, 4, 6, 7, 8, 44];

const arrayNumerosPares = numeros.every(function (valor) {
    return valor % 2 == 0;
});

if (arrayNumerosPares) {
    console.log('array válido');
} else {
    console.log('array inválido');
}