const prices = [100, 131 2542];

const valido = prices.every(x => {
	const positivo = x >= 0;
   const inteiro = x % 1 === 0;
	
	if (positivo && inteiro) {
		return true;
	} else {
		return false;
	}
	});

console.log(valido);