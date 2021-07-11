const original = "1,350,000,000";

let resultado = original;
let resultadoAnterior = "";

while (resultado !== resultadoAnterior) {
    resultadoAntrior = resultado;
    resultado = original.replace(",",".");
}

console.log(resultado);