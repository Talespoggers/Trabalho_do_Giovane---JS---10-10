// 9 - Escreva um programa em JavaScript que exiba na tela o maior número de um vetor.


// Função para encontrar o maior número em um vetor
function encontrarMaiorNumero(vetor) {
    // Verifica se o vetor está vazio
    if (vetor.length === 0) {
        console.log("O vetor está vazio.");
        return; // Retorna para interromper a execução da função
    }

    let maior = vetor[0]; // Assume que o primeiro elemento é o maior

    // Percorre o vetor para encontrar o maior número
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]; // Atualiza o maior número encontrado
        }
    }

    return maior; // Retorna o maior número encontrado
}

// Exemplo de uso da função para encontrar o maior número em um vetor
const numeros = [10, 5, 8, 15, 3, 9];
const maiorNumero = encontrarMaiorNumero(numeros);

if (maiorNumero !== undefined) {
    console.log(`O maior número no vetor é: ${maiorNumero}`);
}
