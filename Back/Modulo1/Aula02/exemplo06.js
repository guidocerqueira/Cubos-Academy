let x = 0, y = 0;

resultado = x / y; //NaN
console.log(`A divisão de ${x} e ${y} é ${resultado}`);

x = 10, y = 0;

resultado = x / y; //Infinity
console.log(`A divisão de ${x} e ${y} é ${resultado}`);