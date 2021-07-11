const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const novoArray = cidades.filter(function (valor) {
    return valor.length <= 8;
});

console.log(novoArray);

const arrayFormatado = novoArray.join(', ');

console.log(arrayFormatado);