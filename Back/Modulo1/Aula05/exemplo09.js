function verificarMaioridade(nome, idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let nome2 = "Cris";
let idade2 = 19;

let ehMaiorDeIdade = verificarMaioridade(nome2, idade2);

console.log(ehMaiorDeIdade);
