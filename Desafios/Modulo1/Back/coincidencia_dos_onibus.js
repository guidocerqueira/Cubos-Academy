function solucao(a, b) {
    let resto;

    num1 = a;
    num2 = b;

    do {
        resto = num1 % num2;

        num1 = num2;
        num2 = resto;

    } while (resto != 0);

   console.log((a * b) / num1);

}