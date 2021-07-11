//Calcular a distância entre dois pontos
let x1 = 1, x2 = 1, y1 = 1, y2 = 4;
const a = x2 - x1, b = y2 - y1;
const x = Math.pow(a, 2), y = Math.pow(b, 2);
const raiz = x + y;
const distancia = Math.sqrt(raiz);
console.log(distancia);