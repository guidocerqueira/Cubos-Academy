//Taxa de juros
let m = 90000, c = 60000, n = 24;
const mc = m / c, pow = 1 / n;
const i = (Math.pow(mc, pow) - 1) * 100;
console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${i}% ao mês, pois após ${n} mêses você teve que pagar ${m} reais.`);