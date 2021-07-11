const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//fiquem apenas os pares maiores que 5

const arrayFiltrado = array.filter(x => x>5).filter(x => x%2 ===0);

console.log(arrayFiltrado);