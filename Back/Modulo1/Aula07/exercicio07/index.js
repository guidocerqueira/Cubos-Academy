const fs = require('fs');

fs.writeFile('meuarquivo.txt', 'Estou aprendendo JavaScript na Cubos Academy', function (err) {
    if (err) {
        console.log(err.message);
    } else {
        console.log('arquivo criado');
    }
});