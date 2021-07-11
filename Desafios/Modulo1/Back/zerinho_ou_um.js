function solucao(jogadores) {
    let lista0 = [], lista1 = []
      
      lista0 = jogadores.filter(j => j.jogada == 0);
      lista1 = jogadores.filter(j => j.jogada == 1);
      
    if(lista0.length == 1)
    {
      console.log(lista0[0].nome)
    }
    else if (lista1.length == 1){
      console.log(lista1[0].nome)  
    }
    else {
      console.log("NINGUEM")
    }
  }