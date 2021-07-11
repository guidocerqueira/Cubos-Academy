const jogada1 = "pedra"
const jogada2 = "tesoura"

if ((jogada1 === "pedra" && jogada2 === "tesoura") || (jogada1 === "tesoura" && jogada2 === "papel") || (jogada1 === "papel" && jogada2 === "pedra")) {
    console.log(jogada1);
} else if ((jogada2 === "pedra" && jogada1 === "tesoura") || (jogada2 === "tesoura" && jogada1 === "papel") || (jogada2 === "papel" && jogada1 === "pedra")) {
    console.log(jogada2);
} else {
    console.log("Empate");
}
//seu código aqui

// **Pedra, papel ou tesoura.** Duas pessoas estão jogando pedra, papel ou tesoura. Você deve imprimir o nome da jogada vencedora, ou "empate", em caso de empate. 

// ```javascript=
// const jogada1 = "pedra"
// const jogada2 = "tesoura"

// //seu código aqui
// ```


// Neste caso seu código deveria imprimir **pedra**. Lembre-se de testar seu código para outras variações de entrada.
