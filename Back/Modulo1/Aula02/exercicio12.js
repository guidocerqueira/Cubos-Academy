//Casos de COVID-19
let Po = 1000; // a população incial de pessoas infectadas 
let x = 4; //  quantidade de pessoas paras as quais um paciente infectado pode transmitir 
let t = 100; // tempo percorrido
const potencia = t / 7;

const P = Po * Math.pow(x, potencia);
console.log(`A quantidade de pessoas infectadas após ${t} dias será de ${P}`);