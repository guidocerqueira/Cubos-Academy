//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorParcelas = valorDoProduto / 100 / quantidadeDoParcelamento;
const parcelasRestantes = quantidadeDoParcelamento - (valorPago/valorParcelas)
console.log(`Restam ${parcelasRestantes} parcelas de R$${valorParcelas.toFixed(2)}`);

// **a)** Dado o valor de um produto, a quantidade de parcelas escolhida e quanto já foi pago, Faça um programa que ajude a Fernanda a saber o valor restante para pagamento e quantas parcelas faltam pagar.

// ```javascript=
// //valor do produto comprado.
// const valorDoProduto = 100000;

// //quantidade de parcelas
// const quantidadeDoParcelamento = 10;

// //valor pago
// const valorPago = 300;
// ```

// Para o exemplo acima, o programa deve imprimir a mensagem:

// `Restam 7 parcelas de R$100`

// Teste seu programa para outras entradas.

// Faça commit do programa.