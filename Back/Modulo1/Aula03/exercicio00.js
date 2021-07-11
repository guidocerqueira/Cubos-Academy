const valor = 100000;
const parcelas = 10;

if (parcelas === 1){
    let totalAVista = valor * 0.9 / 100;
    console.log(`Como seu pagamento é à vista, você ganhou um desconto de 10% e deve pagar ${totalAVista} reais`);
} else if (parcelas <= 6) {
    let totalAPrazo = (valor / parcelas / 100).toFixed(2);
    console.log (`Parcelando em ${parcelas}x de ${totalAPrazo} fica um total de ${parcelas*totalAPrazo} reais.`);
} else if (parcelas <= 12) {
    let M = valor / 100 * Math.pow((1.01), parcelas)
    let totalComJuros = (M / parcelas).toFixed(2);
    console.log (`Parcelando em ${parcelas}x de ${totalComJuros} fica um total de ${(parcelas*totalComJuros).toFixed(2)} reais.`);
} else {
    console.log ("Só parcelamos em até 12x");
}