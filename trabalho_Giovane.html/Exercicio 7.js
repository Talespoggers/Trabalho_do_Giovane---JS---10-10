// 7 - Escreva um programa em JavaScript que exiba na tela o fatorial de um número fornecido pelo usuário.

// Função para calcular o fatorial de um número
function calcularFatorial(numero) {
    // Verifica se o número é não negativo
    if (numero < 0) {
        return "O fatorial não está definido para números negativos.";
    }

    let fatorial = 1;

    // Calcula o fatorial
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

// Solicita ao usuário que insira um número para calcular o fatorial
let numero = prompt("Digite um número para calcular o fatorial:");

// Converte o valor inserido pelo usuário em um número inteiro
numero = parseInt(numero);

// Verifica se o valor inserido é um número válido
if (isNaN(numero)) {
    console.log("Por favor, insira um número válido.");
} else {
    // Chama a função calcularFatorial com o número inserido e exibe o resultado
    const resultadoFatorial = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} é: ${resultadoFatorial}`);
}
