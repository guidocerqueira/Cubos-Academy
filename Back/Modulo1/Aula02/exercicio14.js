//Soma dos ângulos internos de um polígono
let n = 6;
const s = (n - 2) * 180;
const angulos = s / n;
console.log(`Um Hexagono tem ${n} lados, ângulos e arestas. A soma dos ângulos internos é de ${s} e se ele for um polígono regular terá ${n} ângulos de ${angulos}°`);