const pessoa = {
    nome: "Marcella",
    idade: 28,
    consumo:[
                {
                    produto: "Tequila",
                    preco: 500, // 15 reais
                    quantidade: 3
                },
                {
                    produto: "Vodka",
                    preco: 500, // 10 reais
                    quantidade: 2,
                },
                {
                    produto: "Energético",
                    preco: 500, // 20 reaiss
                    quantidade: 4,
                }
            ]
};

//Faça um programa que imprime uma mensagem amigável (que inclui chamar o cliente pelo nome) que informa o valor que ele deve pagar.

let comanda = 0;
for (let i = 0 ; i < pessoa.consumo.length; i++) {
    x = pessoa.consumo[i].preco * pessoa.consumo[i].quantidade;
    comanda = comanda + x;
}

// let comanda = 0;
// for(let item of pessoa.consumo){
//   comanda = comanda + (item.quantidade * item.preco);
// // comanda += item.quantidade * item.preco;
// }


console.log(`Olá ${pessoa.nome}! Sua comanda deu o total de R$${(comanda/100).toFixed(2)}`);
