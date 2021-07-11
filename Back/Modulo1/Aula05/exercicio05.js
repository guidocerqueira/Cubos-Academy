function apresentacao(pessoa) {
    if (pessoa.idade < 25) {
        idade = "jovem";
    } else if (pessoa.idade < 65) {
        idade = "adulta";
    } else {
        idade = "idosa";
    }
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou uma pessoa ${idade} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
}

let marcella = {
    nome: "Marcella",
    idade: 28,
    profissao: "professora",
    altura: 1.85,
};

let pedro = {
    nome: "Pedro",
    idade: 24,
    profissao: "programador",
    altura: 1.75,
};

let thiago = {
    nome: "Thiago",
    idade: 30,
    profissao: "TI",
    altura: 1.85,
};

apresentacao(marcella);
apresentacao(pedro);
apresentacao(thiago);