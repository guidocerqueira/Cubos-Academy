function solucao(lista) {
    let menorIdade = 0;
    for (let i = 0; i < lista.length; i++){
      if (menorIdade < 18 && lista[i] >= 18 || (lista[i] < menorIdade && lista[i] >= 18)){
          menorIdade = lista[i]
      }
    }
    
    if (menorIdade > 17){
          console.log(menorIdade);
    } else {  
        console.log("CRESÇA E APAREÇA");
    }
  
  }