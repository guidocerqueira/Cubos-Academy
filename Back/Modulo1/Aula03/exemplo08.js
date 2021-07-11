const temIngresso = true;
const taComPais = true;
const censura = 16;
const idade = 13;

//ter ingressos E idade maior ou igual à censura ou estar com pais

if (temIngresso){
    if (idade >= censura || taComPais) {
        console.log("pode entrar.");
    } else {
        console.log("censurado.");
    }
} else {
    console.log("sem ingressos.");
}