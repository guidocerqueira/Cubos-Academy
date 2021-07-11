const hello = ["oi", "olá", "e ai", "fala mano"];

const encontrado = hello.find(x => x.lenght > 5);

	if (encontrado) {
	console.log(` A palavra com mais de 5 caracteres é ${encontrado}`);
	} else {
		console.log(`Não há itens com mais de 5 caracteres`);
	}
