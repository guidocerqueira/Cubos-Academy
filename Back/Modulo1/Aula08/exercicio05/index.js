const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const existeBebidaAlcoolica = palavras.some(function (valor) {
    return valor == 'cerveja' || valor == 'vodka';
});

if (existeBebidaAlcoolica) {
    console.log('revise sua lista, joão. possui bebida com venda proibida!');
} else {
    console.log('tudo certo, vamos as compras');
}