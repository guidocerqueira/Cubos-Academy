function solucao(ganhos, serasaScore, mesesParaPagar) {
    // 1ª faixa (Score menor que 300), juros = 3%;
    // 2ª faixa (Score menor que 700), juros = 9%;
    // 3ª faixa (Score maior ou igual a 700), juros = 15%;
    
        let juros = 0
    
        if (serasaScore < 300){
            juros = 3
        } else if (serasaScore < 700){
            juros = 9
        } else {
            juros = 15
        }
      let parcela = ( ganhos * 3 + ( ganhos * ( juros / 100 ))) / mesesParaPagar
     
      console.log(parcela)
    }