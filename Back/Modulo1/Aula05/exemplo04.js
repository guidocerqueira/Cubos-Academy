const pessoa = {
    nome: "Marcella",
    idade: 28,
    altura: 1.85,
    temCNH: false,
    apelidos: ["Cris", "Cherry"]
};

pessoa.nome = "Cristina";
pessoa.apelidos = ["Vixxen", "Mah"];
pessoa.apelidos[0] = "Cris";
pessoa.peso = 69;
console.log(pessoa);