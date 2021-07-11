const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];

const programadoresMaiorDe20anos = pessoas.filter(function (data) {
    return data.profissao == 'Programador' && data.idade > 20
});

console.log(programadoresMaiorDe20anos);

const jornalistasMaiorDe30anos = pessoas.filter(function (data) {
    return data.profissao == 'Jornalista' && data.idade > 30
});

console.log(jornalistasMaiorDe30anos);

const jornalistasProgramadoresJovens = pessoas.filter(function (data) {
    return (data.profissao == 'Jornalista' || data.profissao == 'Programador') && data.idade < 30
});

console.log(jornalistasProgramadoresJovens);