function solucao(jogadas) {
    let zero = 0
    let um = 0
    for (let indice=0; indice < jogadas.length ; indice++){
        if (jogadas[indice] === 0){
            zero ++
        } else {
            um ++
        }
        
    }
    if (zero===um) {
            console.log(true)
        } else {
            console.log(false)
        }
}