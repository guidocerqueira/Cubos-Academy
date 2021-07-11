function solucao(precos) {
    
    
    
    
    
    let compra = 0
    let venda = 0
    let preju2 = 0
    let preju = 100
    for (let indiceCompra = 0 ; indiceCompra < precos.length - 1 ; indiceCompra++){
        compra = precos[indiceCompra]
        for (let indiceVenda = indiceCompra + 1 ; indiceVenda < precos.length ; indiceVenda++){
        venda = precos[indiceVenda]
            preju2 = compra - venda
             if (preju2 > 0 && preju > preju2 ){
            preju = preju2
            }
        }

    }
    console.log(preju)
    
    
    
    
    
}
