// 6 - Escreva um programa em JavaScript que exiba na tela a soma dos
// elementos de uma matriz.


// Definindo uma matriz (array bidimensional)
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Função para calcular a soma dos elementos da matriz
function calcularSomaMatriz(matriz) {
    let soma = 0;

    // Percorrendo cada linha da matriz
    for (let i = 0; i < matriz.length; i++) {
        // Percorrendo cada elemento da linha atual
        for (let j = 0; j < matriz[i].length; j++) {
            // Adicionando o valor do elemento à soma
            soma += matriz[i][j];
        }
    }

    return soma;
}

// Chamando a função para calcular a soma dos elementos da matriz
const resultadoSoma = calcularSomaMatriz(matriz);

// Exibindo o resultado da soma na tela
console.log(`A soma dos elementos da matriz é: ${resultadoSoma}`);
