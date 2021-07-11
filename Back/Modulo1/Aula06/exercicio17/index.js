const cpf = "011.022.033-44";

function removerMascara(numero) {
    console.log(numero.replace('-', '').split('.').join(''));
}

removerMascara(cpf);