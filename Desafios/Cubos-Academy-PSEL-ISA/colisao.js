function solucao(velocidade, aceleracao, distanciaObjeto) {
    let derrapagem = ( -1 * velocidade * velocidade ) / ( 2 * aceleracao ) 
    if ( distanciaObjeto < derrapagem  ){
        console.log("COLISAO A FRENTE")
    } else if ( distanciaObjeto === derrapagem ){
        console.log("NAO ACELERE")
    } else {
        console.log("CAMINHO SEGURO")
    }
  }