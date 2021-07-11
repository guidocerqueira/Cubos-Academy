const ladoA = 6;
const ladoB = 3;

if (ladoA === ladoB && ladoA === 0) {
    console.log("É uma bucha branca.")
} else if (ladoA === ladoB && ladoA === 1) {
    console.log("É uma bucha ás.")
} else if (ladoA === ladoB && ladoA === 2) {
    console.log("É uma bucha duque.")
} else if (ladoA === ladoB && ladoA === 3) {
    console.log("É uma bucha terno.")
} else if (ladoA === ladoB && ladoA === 4) {
    console.log("É uma bucha quadra.")
} else if (ladoA === ladoB && ladoA === 5) {
    console.log("É uma bucha quina.")
} else if (ladoA === ladoB && ladoA === 6) {
    console.log("É uma bucha sena.")
} else  {
    console.log("Não é uma bucha");
}



// Modifique o código anterior para que, quando a pedra for uma bucha, digamos qual o "nome" da bucha. Para quem não constuma jogar dominó, segue um glossário:

// | Bucha de | Nome   |
// | -------- | ------ |
// | 0        | Branco |
// | 1        | Ás     |
// | 2        | Duque  |
// | 3        | Terno  |
// | 4        | Quadra |
// | 5        | Quina  |
// | 6        | Sena   |