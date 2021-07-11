//Calcular juros compostos
let capital = 1000, imposto = 0.125, tempoEmMeses = 5;
const x = 1 + imposto;
const y = Math.pow(x, tempoEmMeses);
const montante =  capital * y;
console.log(montante);

