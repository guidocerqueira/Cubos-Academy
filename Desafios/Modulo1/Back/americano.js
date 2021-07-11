function solucao(numeros) {
    let soma = 0;
   for (let i = 0; i < numeros.length; i++){
       soma += numeros[i];
   }    
       
   if (soma > numeros.length){
       let pos = soma % numeros.length
       if(pos == 0)
           pos = numeros.length;
       console.log(pos);
   } 
   else {
       console.log(soma);
   }
       
}