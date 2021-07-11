// let saldo = -2;

// if (saldo >= 2) {
//     console.log(`Seu saldo é de ${saldo} reais.`);
// } else if (saldo === 1) {
//     console.log(`Seu saldo é de ${saldo} real.`);
// } else if (saldo === 0) {
//     console.log(`Sem saldo`);
// } else if (saldo === -1) {
//     saldo = saldo * -1
//     console.log(`Você está DEVENDO ${saldo} real.`);
// } else {
//     saldo = saldo * -1
//     console.log(`Você está DEVENDO ${saldo} reais.`);
// }

const saldo = 10;

console.log(`Seu saldo é de ${saldo} ${saldo === 1 ? "real" : "reais"}.`);
