const cpf = "12345678900";
const cnpj = "12345678900";

function validaCpf(cpf) {
    if (cpf.length != 11) {
        console.log('CPF inválido');
    } else {
        const cpfFormatado = `${cpf.substr(0, 3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}-${cpf.substr(9, 2)}`;

        console.log(cpfFormatado);
    }
}

validaCpf(cpf);

function validaCnpj(cnpj) {
    if (cnpj.length != 14) {
        console.log('CNPJ inválido');
    } else {
        const cnpjFormatado = `${cnpj.substr(0, 2)}.${cnpj.substr(2, 3)}.${cnpj.substr(5, 3)}/${cnpj.substr(8, 4)}-${cnpj.substr(12, 2)}`;

        console.log(cnpjFormatado);
    }
}

validaCnpj(cnpj);