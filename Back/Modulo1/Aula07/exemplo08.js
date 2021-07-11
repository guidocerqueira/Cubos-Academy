const fs = require('fs');
const erro = "Erro no programa";

fs.writeFile("./exemplo8.txt", erro, () => {
	console.log("Arquivo foi escrito");
});