const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

// for (let index = 0; index < jogadores.length; index++) {
//     const tempo = (index + 1) * (10 / jogadores.length) * 1000;
//     setTimeout(function () {
//         console.log(jogadores[index]);
//     }, tempo);

//     if (jogadores.length - 1 === index) {
//         setTimeout(function () {
//             console.log('A rodada terminou!');
//         }, tempo);
//     }
// }

let i = 0;
function rodada() {
    if (i < jogadores.length) {
        console.log(jogadores[i]);
        i++;
    } else {
        console.log('A rodada terminou!');
        clearInterval(intervalId);
    }
}


const intervalId = setInterval(rodada, (10 / jogadores.length) * 1000)