const texto = "Aprenda programar do zero na Cubos Academy";

function transformarTextoEmUrl(texto) {
    const url = texto.toLowerCase().split(' ').join('-');
    console.log(url);
}

transformarTextoEmUrl(texto);