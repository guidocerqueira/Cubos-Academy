const nomeArquivo = 'Foto do Role.zip';

function validarArquivo(arquivo) {
    const arquivosValidos = ['jpg', 'jpeg', 'gif', 'png'];
    const extensao = arquivo.substr(arquivo.lastIndexOf('.') + 1);

    if (arquivosValidos.includes(extensao)) {
        console.log('Arquivo válido!');
    } else {
        console.log('Arquivo inválido!');
    }
}

validarArquivo(nomeArquivo);