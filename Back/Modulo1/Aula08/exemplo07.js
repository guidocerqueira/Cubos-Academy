const array = [0, 1, 2, 3, 4, 5];

// let somaTotal = array[0];
// for (let i = 1; i < array.lenght; i++) {
// 	let item = array[i];
// 	somaTotal = somaTotal + item;
// }


const somaTotal = array.reduce((acc, item) => acc + item);

console.log(somaTotal);
