// 10 - Escreva um programa em JavaScript que exiba na tela a média dos elementos de uma matriz.

// Função para calcular a média dos elementos de uma matriz
function calcularMediaMatriz(matriz) {
    // Verifica se a matriz está vazia
    if (matriz.length === 0 || matriz[0].length === 0) {
        console.log("A matriz está vazia ou tem dimensões inválidas.");
        return; // Retorna para interromper a execução da função
    }

    let soma = 0;
    let quantidadeElementos = 0;

    // Percorre cada linha da matriz
    for (let i = 0; i < matriz.length; i++) {
        // Percorre cada elemento da linha atual
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]; // Adiciona o elemento à soma
            quantidadeElementos++; // Incrementa a quantidade de elementos
        }
    }

    // Calcula a média dividindo a soma pela quantidade de elementos
    const media = soma / quantidadeElementos;

    return media; // Retorna a média calculada
}

// Exemplo de uso da função para calcular a média dos elementos de uma matriz
const matriz = [
    [5, 10, 15],
    [20, 25, 30],
    [35, 40, 45]
];

const mediaMatriz = calcularMediaMatriz(matriz);

if (mediaMatriz !== undefined) {
    console.log(`A média dos elementos da matriz é: ${mediaMatriz}`);
}
