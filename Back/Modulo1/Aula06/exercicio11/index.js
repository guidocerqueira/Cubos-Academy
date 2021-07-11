const celular = 71999918888;

function formataCelular(numero) {
    let celular;

    if (numero.length === 8) {
        celular = `9 ${numero.substr(0, 4)}-${numero.substr(4, 4)}`;
        console.log(celular);
    } else if (numero.length === 9) {
        celular = `${numero.substr(0, 1)} ${numero.substr(1, 4)}-${numero.substr(5, 4)}`;
        console.log(celular);
    } else if (numero.length === 10) {
        celular = `(${numero.substr(0, 2)}) 9 ${numero.substr(2, 4)}-${numero.substr(6, 4)}`;
        console.log(celular);
    } else if (numero.length === 11) {
        celular = `(${numero.substr(0, 2)}) ${numero.substr(2, 1)} ${numero.substr(3, 4)}-${numero.substr(7, 4)}`;
        console.log(celular);
    } else {
        console.log('número inválido');
    }
    console.log(numero.length);
}

formataCelular(celular.toString());