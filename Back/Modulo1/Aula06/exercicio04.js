function imprimirReverso(texto) {
    const arrayLetras = texto.split("");
    arrayLetras.reverse();
    
    let resultado = ""
    
    for (let letra of arrayLetras){
        resultado += letra;
        //resultado = resultado + letra
    }
}

imprimirReverso("Cubos Academy");