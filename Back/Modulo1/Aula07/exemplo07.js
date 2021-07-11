let contagem = 10;

function bomba() {
	if (contagem === 0) {
		console.log(`KABUUUUUUUM!!!!`);
		clearInterval(intervalId);
	} else {
		console.log(`A bomba explodirá em ${contagem} segundo${contagem===1 ? "" : "s"}`);
		contagem--;
	}
}

bomba();

const intervalId = setInterval(bomba, 1000);