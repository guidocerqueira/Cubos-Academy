const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const list = []
for(let i = 0; i < nomes.length; i++ ) {
    let nome = nomes[i]
    if(nome[0] === "A" || nome[0] === "a" ) {
        list.push(nome)
    }
  
}
console.log(list)


// Declare um array com alguns nomes quaisquer.

// Depois, crie um novo array a partir do primeiro que contenha apenas os nomes que começam com a letra "A" ou "a"(maiúscula ou minúscula).
// Ao final, imprima a variável que guarda o array.

// Exemplo

// Para o array **nomes** abaixo
// ```javascript=
// const nomes = ["Ana", "Joana", "Carlos", "amanda"];

// // seu codigo aqui
// ```
// Deverá ser impresso no console:
// ```
// ["Ana", "amanda"]
// ```
// Teste também variando os nomes e incluindo outros nomes que comecem com "A" ou "a". =)

// ---