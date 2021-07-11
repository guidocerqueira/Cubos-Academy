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

console.log(pessoa.nome);   //Imprima o nome do cliente
console.log(pessoa.idade);  //Imprima a idade do cliente
pessoa.idade = 29;          //Modifique a idade do cliente
console.log(pessoa.idade);  //Imprima a nova idade do cliente
console.log(pessoa.consumo[0].produto); //Imprima o nome do primeiro produto consumido
console.log(pessoa.consumo[pessoa.consumo.length -1].preco);    //Imprima o preço unitário do último produto consumido por ele
