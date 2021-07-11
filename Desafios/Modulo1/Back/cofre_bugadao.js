function processData(input) {
    let lines = input.split("\n")
    
    let senhaEscondida = ''
    let j = 0
    
    for(let i = 0; i < lines[1].length; i++)
    {
        if(lines[0][j] == lines[1][i]){
            senhaEscondida += lines[1][i]
            j++;
        }
    }
    
    if(senhaEscondida == lines[0]){
        console.log("SIM")
    }else{
        console.log("NAO")
    }
    

} 