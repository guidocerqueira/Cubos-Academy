const palavra = "amarelinha"

let encontrado = false;
let x = 0
for (let letra of palavra) {
    if (letra === "a"){
        encontrado = true;
        x++;
    }
}

console.log(`Tem ${x} letras a`);

if (!encontrado) {
    console.log("Não tem a letra h.")
}
