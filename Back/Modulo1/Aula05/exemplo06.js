let pessoa = {
    nome: "Marcella",
    idade: 28,
    profissao: "professora",
    altura: 1.85,
};

if (pessoa.idade < 29) {
    idade = "uma jovem";
} else if (pessoa.idade < 60) {
    idade = "uma adulta";
} else {
    idade = "sou uma idosa";
}

console.log(`Olá! Meu nome é ${pessoa.nome}, sou ${idade} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);