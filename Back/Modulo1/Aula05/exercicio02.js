//Crie um objeto que represente o cartão de consumo de um cliente. Deve ter:
// >Nome do cliente
// >Idade do cliente
// >Produtos consumidos
//Cada produto pode ter:
// >Nome do produto
// >Preço unitário (em centavos)
// >Quantidade comprada
//Pode inventar os dados. Coloque pelo menos 3 produtos.

const pessoa = {
    nome: "Marcella",
    idade: 28,
    consumo:[
                {
                    produto: "Tequila",
                    preco: 500,
                    quantidade: 3
                },
                {
                    produto: "Vodka",
                    preco: 500,
                    quantidade: 2,
                },
                {
                    produto: "Energético",
                    preco: 500,
                    quantidade: 4,
                }
            ]
};

console.log(pessoa);