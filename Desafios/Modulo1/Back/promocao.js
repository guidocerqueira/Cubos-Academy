function solucao(precos) {
    if (precos.length < 3){
      console.log(precos.reduce((a, b) => a + b, 0))
    } else {
    
      let indiceMenor = 0
      for (let i = 0; i < precos.length; i++) {
          if (precos[i] < precos[indiceMenor]){
              indiceMenor = i
          }
      }
      precos[indiceMenor] = precos[indiceMenor] * 0.5
      console.log(precos.reduce((a, b) => a + b, 0))
    }
    
  }