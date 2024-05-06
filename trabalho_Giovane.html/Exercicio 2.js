// 2 - Escreva um programa em JavaScript que exiba na tela o maior número entre dois números fornecidos pelo usuário.

// Solicita ao usuário que insira o primeiro número
let numero1 = prompt("Digite o primeiro número:");

// Converte o valor inserido pelo usuário em um número
numero1 = parseFloat(numero1);

// Verifica se o valor inserido é um número válido
if (isNaN(numero1)) {
    console.log("Por favor, insira um número válido para o primeiro número.");
} else {
    // Solicita ao usuário que insira o segundo número
    let numero2 = prompt("Digite o segundo número:");

    // Converte o valor inserido pelo usuário em um número
    numero2 = parseFloat(numero2);

    // Verifica se o valor inserido é um número válido
    if (isNaN(numero2)) {
        console.log("Por favor, insira um número válido para o segundo número.");
    } else {
        // Compara os dois números e exibe o maior
        if (numero1 > numero2) {
            console.log(`O maior número é: ${numero1}`);
        } else if (numero2 > numero1) {
            console.log(`O maior número é: ${numero2}`);
        } else {
            console.log("Os números são iguais.");
        }
    }
}
