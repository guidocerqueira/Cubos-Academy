const pessoa = {
    nome: "Marcella",
    idade: 28,
    altura: 1.85,
    temCNH: false,
    apelidos: ["Cris", "Cherry", "Vixxen", "Mah"]
};

// let cnh = 0
// if (pessoa.temCNH) {
//     cnh = "tem CNH";
// } else {
//     cnh = "não tem CNH";
// }

// console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m, ${cnh} e os seguintes apelidos:
// - ${pessoa.apelidos[0]}
// - ${pessoa.apelidos[1]}`);

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m,${pessoa.temCNH ? "" : " não"} tem CNH e os seguintes apelidos:`);

// for (let i = 0 ; i < pessoa.apelidos.length; i++) {
//     console.log(`- ${pessoa.apelidos[i]}`);
// }

for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}

