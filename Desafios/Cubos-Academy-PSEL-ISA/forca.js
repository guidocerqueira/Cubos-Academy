function solucao(palpite, palavra) {
	let qt = 0
    for (let indice=0; indice < palavra.length ; indice++){
        if (palavra[indice] === palpite){
            qt ++
        }
        
    }
            console.log(qt)
}