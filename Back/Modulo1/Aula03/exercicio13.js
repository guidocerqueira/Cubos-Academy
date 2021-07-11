//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    let valor = valorDoProduto * 0.95 / 100;
    console.log(`Valor a ser pago: R$${valor.toFixed(2)}`);
} else if (tipoDePagamento === "cheque") {
    let valor = valorDoProduto * 0.97 / 100;
    console.log(`Valor a ser pago: R$${valor.toFixed(2)}`);
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    let valor = valorDoProduto * 0.9 / 100;
    console.log(`Valor a ser pago: R$${valor.toFixed(2)}`);
} else {
    console.log("Forma de pagamento inválida.")
}


// A Loja do Juninho está com uma super promoção. E na compra de qualquer produto você ganha desconto conforme a forma de pagamento seguindo a tabela seguinte.

// | Forma de Pagamento | Desconto |
// | ------------------ | -------- |
// | credito            | 5%       |
// | cheque             | 3%       |
// | debito ou dinheiro | 10%      |

// **a)** Faça um programa que verifica o tipo de desconto, calcule o valor do produto com o desconto e imprima o resultado.

// Lembre-se de cuidar para que o valor monetário tenha sempre duas casas decimais, apenas.

// ```javascript=
// //tipo de pagamento (dinheiro, credito, debito, cheque).
// const tipoDePagamento = "credito";

// //valor da mercadoria (centavos)
// const valorDoProduto = 13000;
// ```

// Para o exemplo acima, o programa deve imprimir a mensagem:

// `Valor a ser pago: R$123.50`

// Teste seu programa para outras entradas.


// Faça commit do programa.