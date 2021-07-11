// const opcoes = ["eu", "você", "ele"];
// const resultado = opcoes.join(" ou ");

// console.log(resultado);
// //eu ou você ou ele

function imprimirReverso (texto) {
    const arrayLetras = texto.split();
    arrayLetras.reverse();
    console.log(arrayLetras.join(""));
}

imprimirReverso("Marcella Cristina");