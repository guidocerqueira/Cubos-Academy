let marcella = {
    nome: "Marcella",
    idade: 28,
    profissao: "professora",
    altura: 1.85,
    faixaEtaria: function () {
        if (this.idade < 25) {
            return "jovem";
        } else if (this.idade < 65) {
            return "adulta";
        } else {
            return "idosa";
        }
    },
    apresentacao: function () {
        console.log(`Olá! Meu nome é ${this.nome}, sou uma pessoa ${this.faixaEtaria(this.idade)} de ${this.idade} anos, ${this.altura}m de altura e sou ${this.profissao}.`);
    },
};

marcella.apresentacao();