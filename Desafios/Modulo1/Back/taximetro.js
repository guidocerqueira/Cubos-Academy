function solucao(min, km) {
    let corrida = 50 * min + 70 * km
    
    if(km > 10){
        corrida -= 20 * (km-10)
    }
    if(min > 20){
        corrida -= 20 * (min-20)    
    }
    console.log(corrida)

}