function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
    const dicionario = {
        "SALGADO": 0.9,
        "DOCE": 0.85,
        "BEBIDA": 0.7,
    }
    let somaProdutos = 0
        for (let indice=0; indice < produtos.length ; indice++) {
            let cat = produtos[indice].categoria
            somaProdutos += produtos[indice].valor * produtos[indice].quantidade * dicionario[cat]
        }
                let cupom = 0
                let frete = 0
                let total = 0
                if (ehPrimeiraCompra === true && somaProdutos >= 3000 && cupomDesconto === "NATAL10"){
                    cupom = somaProdutos * 0.9
                    frete = distanciaRestaurante * 120
                    total = cupom + frete
                } else if (ehPrimeiraCompra === true && somaProdutos >= 4500 && cupomDesconto === "NATAL20"){
                    cupom = somaProdutos * 0.8
                    frete = distanciaRestaurante * 120
                    total = cupom + frete
                } else if (ehPrimeiraCompra === true && somaProdutos >= 6000 && cupomDesconto === "NATAL30"){
                    cupom = somaProdutos * 0.7
                    frete = distanciaRestaurante * 120
                    total = cupom + frete
                }  else if (ehPrimeiraCompra === true && somaProdutos >= 8000 && cupomDesconto === "NATALSUPREMO"){
                    cupom = somaProdutos * 0.7
                    total = cupom
                } else {
                    frete = distanciaRestaurante * 120
                    total = somaProdutos + frete
                }
                    console.log(total)
            
}