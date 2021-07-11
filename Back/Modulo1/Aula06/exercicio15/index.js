const nome = "Marcella Syrdahl";

function gerarNickname(nome) {
    const nickname = nome.trim().toLowerCase().substr(0, 13).split(' ').join('');
    console.log(`@${nickname}`);
}

gerarNickname(nome);