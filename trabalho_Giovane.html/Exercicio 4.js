// 4 - Escreva um programa em JavaScript que exiba na tela a média dos números de um vetor.

// Função para calcular a média dos números em um vetor
function calcularMedia(vetor) {
    // Verifica se o vetor está vazio
    if (vetor.length === 0) {
        console.log("O vetor está vazio. Não é possível calcular a média.");
        return; // Retorna para interromper a execução da função
    }

    let soma = 0;

    // Itera sobre cada elemento do vetor e calcula a soma dos números
    for (let i = 0; i < vetor.length; i++) {
        // Verifica se o elemento do vetor é um número válido
        if (typeof vetor[i] === 'number') {
            soma += vetor[i];
        } else {
            console.log(`O elemento ${vetor[i]} não é um número válido.`);
        }
    }

    // Calcula a média dividindo a soma pelo número de elementos no vetor
    const media = soma / vetor.length;

    // Exibe a média na tela
    console.log(`A média dos números no vetor é: ${media}`);
}

// Exemplo de uso da função calcularMedia
const numeros = [10, 8, 7, 5, 9]; // Vetor de números
calcularMedia(numeros); // Chamada da função para calcular e exibir a média
