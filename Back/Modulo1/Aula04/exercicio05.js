const nomes = ["José", "Maria", "Pedro", "João", "Oscar", "Thiago"];

let encontrado = false

for (let nome of nomes){
    if (nome === "João") {
    encontrado = true
    console.log("O índice de João é " + nomes.indexOf("João"));
    break;
    }
}

if (!encontrado) {
    console.log("Nome não encontrado.")
}