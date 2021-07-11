const valor = 100000;
const parcelas = 6;

if (parcelas === 1){
    let totalAVista = valor * 0.9 / 100;
    console.log(`Como seu pagamento é à vista, você ganhou um desconto de 10% e deve pagar ${totalAVista} reais`);
} else if (parcelas <= 6) {
    let totalAPrazo = (valor / parcelas / 100).toFixed(2);
    console.log (`Parcelando em ${parcelas}x de ${totalAPrazo} fica um total de ${parcelas*totalAPrazo} reais.`);
} else {
    console.log ("só parcelamos em até 6x");
}