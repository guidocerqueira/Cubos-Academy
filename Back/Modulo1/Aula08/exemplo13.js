const array = [
	{
		nome: 'Syl',
		idade: 52
	},
	{
		nome: 'juh',
		idade: 28
	},
	{
		nome: 'Cris',
		idade: 28
	},
	{
		nome: 'bah',
		idade: 25
	}
];

// - => A primeiro
// + => B primeiro


array.sort((a, b) => {
	if (a.idade < b.idade) {
		return -1;
	} else if (b.idade > a.idade) {
		return 1;
	} else {
		return a.nome.localeCompare(b.nome);
	}
});

console.log(array);