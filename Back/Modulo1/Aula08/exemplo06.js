const array = [1, 2, 3, 4, 5];

const result = array.some(x => Math.sqrt(x) >= 0 && Math.sqrt(x) % 1 === 0});

console.log(result);