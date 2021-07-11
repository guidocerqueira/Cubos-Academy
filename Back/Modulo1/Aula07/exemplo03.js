const fs = require('fs');

console.log("começar a ler o arquivo")

fs.readFile('./m01a07e03.txt', (err, data) => {
    if(!err) {
        console.log(data.toString());
    }
});

console.log("opa")