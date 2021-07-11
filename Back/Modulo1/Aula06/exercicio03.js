function imprimirData(dia, mes, ano){
    const diaString = `${dia}`.padStart(2, "0");
    const mesString = `${mes}`.padStart(2, "0");

    console.log(`${diaString}/${mesString}/${ano}`);
}

imprimirData(1,1,2020);
imprimirData(13,1,2020);
imprimirData(1,11,2020);
