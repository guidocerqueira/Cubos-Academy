const alturaEmCm = 185;

if (alturaEmCm > 205) {
    console.log("CENTRAL");
} else if (alturaEmCm > 195 ) {
    console.log("OPOSTO");
} else if (alturaEmCm > 185) {
    console.log("PONTEIRO");
} else if (alturaEmCm >= 180) {
    console.log("LÍBERO");
} else {
    console.log("REPROVADO");
}
// Após passar na primeira fase de uma peneira de vôlei, os candidatos aprovados são separados em grupos diferentes, de acordo com suas alturas, para serem testados para posições específicas. Faça um programa que, dada a altura de um determinado candidato, diga para qual posição ele deverá fazer o teste.

// Caso o jogador tenha menos de 180cm, o programa deve imprimir **REPROVADO**
// Caso tenha entre 180cm e 185cm, o programa deve imprimir **LÍBERO**
// Caso tenha entre 186cm e 195cm, o programa deve imprimir **PONTEIRO**
// Caso tenha entre 196cm e 205cm, o programa deve imprimir **OPOSTO**
// Caso tenha mais de 205cm, o programa deve imprimir **CENTRAL**

// ```javascript=
// const alturaEmCm = 185;

// //seu código aqui

// ```

// Neste exemplo a resposta correta é **LÍBERO**

