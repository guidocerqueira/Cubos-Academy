const localizacao = "Salvador-BA";
const endIndex = localizacao.indexOf("-");
const cidade = localizacao.slice(0, endIndex);

console.log(cidade);