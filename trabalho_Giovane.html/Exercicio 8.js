// 8 - Escreva um programa em JavaScript que exiba na tela uma mensagem de acordo com a escolha do usuário em um menu de opções. 
// O menu deve ter as opções "1. Opção 1", "2. Opção 2" e "3. Opção 3". Se o usuário escolher a opção 1, exiba "Opção 1 escolhida". 
// Se o usuário escolher a opção 2, exiba "Opção 2 escolhida". Se o usuário escolher a opção 3, exiba "Opção 3 escolhida". 
// Se o usuário escolher uma opção inválida, exiba "Opção inválida".

// Exibe o menu de opções para o usuário
let escolha = prompt("Escolha uma opção:\n1. Opção 1\n2. Opção 2\n3. Opção 3");

// Converte a escolha do usuário para um número inteiro
escolha = parseInt(escolha);

// Verifica a escolha do usuário e exibe a mensagem correspondente
switch (escolha) {
    case 1:
        console.log("Opção 1 escolhida");
        break;
    case 2:
        console.log("Opção 2 escolhida");
        break;
    case 3:
        console.log("Opção 3 escolhida");
        break;
    default:
        console.log("Opção inválida");
        break;
}
