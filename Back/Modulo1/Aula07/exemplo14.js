const pessoas = [
	{
		nome: "Juliana",
		idade: 29,
		altura: 160
	},
	{
		nome: "Marcella",
		idade: 28,
		altura: 185
	},
	{
		nome: "Giovanna",
		idade: 9,
		altura: 130
	},
	];

const pessoasNew = pessoas.map(x => {
	return {
		nome: x.nome,
		idade: `${x.idade} anos.`,
		altura: `${x.altura/100}m`,
		maioridade: (x.idade >= 18 ? "É Maior de idade" : "É menor de idade")
	}
});

console.log(pessoasNew);