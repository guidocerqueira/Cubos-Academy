function solucao(produtos, valorMaximo, avaliacaoMinima) {
    let indice = 0
    let fim = []
        while (indice < produtos.length) {
            if(produtos[indice].valor <= valorMaximo && produtos[indice].avaliacao >= avaliacaoMinima){
                fim.push(produtos[indice])
            }
            indice++
        }
        console.log(fim)
      
    }