const prices = [100, 131, 2542];

const valido = prices.every(x => x >= 0 && x === Math.floor(x));

console.log(valido);