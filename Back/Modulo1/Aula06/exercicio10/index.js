const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const arrayInverso = frutas.reverse().join(', ');
console.log(arrayInverso);

//remove primeiro
frutas.shift();
console.log(frutas);

//remove ultimo
frutas.pop();
console.log(frutas);

//adiciona melão
frutas.push('Melão');
console.log(frutas);