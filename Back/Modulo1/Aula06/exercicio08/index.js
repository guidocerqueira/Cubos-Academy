let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

identificador = identificador.padStart(6, '0');

let splitNome = nome.split(' ');

let nomeMaiusculo = [];

for (const nome of splitNome) {
    nomeMaiusculo.push(`${nome.substr(0, 1).toUpperCase()}${nome.substr(1).toLowerCase()}`);
}

nome = nomeMaiusculo.join(' ');

email = email.trim();

tags = tags.join(', ');

console.log(identificador);
console.log(nome);
console.log(email);
console.log(tags);