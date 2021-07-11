const pessoa = {
    nome: "Marcella",
    idade: 28,
    altura: 1.85,
    temCNH: false,
    apelidos: ["Cris", "Cherry"]
};

const propriedade = "nome";
console.log(`Bem-vinda, ${pessoa[propriedade]}! Você tem ${pessoa["idade"]} anos.`);