const nota = 8.5;

if (nota < 4) {
    console.log ("O estudante obteve conceito E");
} else if (nota < 6) {
    console.log ("O estudante obteve conceito D");
} else if (nota < 8) {
    console.log ("O estudante obteve conceito C");
} else if (nota < 9) {
    console.log ("O estudante obteve conceito B");
} else {
    console.log ("O estudante obteve conceito A");
}

// Num colégio está sendo feita uma migração de notas (que variam de 0 a 10) para conceitos (que variam de A até E).

// Para não perder o histórico de alunos antigos e mantê-lo condizente com a nova forma conceitual de avaliar, você deve fazer um programa que transforma uma nota em conceito, de acordo com a seguinte tabela:

// | Nota | Conceito |
// | --- | --- | 
// | 9 a 10 | A |
// | 8 a 8,9 | B |
// | 6 a 7,9 | C |
// | 4 a 5,9 | D |
// | menos que 4 | E |


// ```javascript=
// const nota = 8.5;
// ```

// No exemplo acima, o seu programa deve imprimir a mensagem:
// `O estudando obteve conceito B`