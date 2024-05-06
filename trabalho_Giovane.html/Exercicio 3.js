// 3 - Escreva um programa em JavaScript que exiba na tela uma mensagem
// de acordo com a nota do usuário. Se a nota for menor do que 6, exiba
// "Reprovado". Se a nota for maior ou igual a 6 e menor do que 8, exiba
// "Aprovado". Se a nota for maior ou igual a 8, exiba "Aprovado com louvor".

// Solicita ao usuário que insira a nota
let nota = prompt("Digite a sua nota:");

// Converte o valor inserido pelo usuário em um número
nota = parseFloat(nota);

// Verifica se o valor inserido é um número válido
if (isNaN(nota)) {
    console.log("Por favor, insira uma nota válida.");
} else {
    // Verifica a faixa de notas e exibe a mensagem correspondente
    if (nota < 6) {
        console.log("Reprovado");
    } else if (nota >= 6 && nota < 8) {
        console.log("Aprovado");
    } else if (nota >= 8) {
        console.log("Aprovado com louvor");
    }
}
