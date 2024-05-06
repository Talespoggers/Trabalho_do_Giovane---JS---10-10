
// entrada de dados
let valor_x = prompt("Digite o primeiro número:");
let valor_Y = prompt("Digite o segundo número:");

// Processamento de dados
valor_x = parseFloat(valor_x);
valor_Y = parseFloat(valor_Y);

// processamento e saida de dados
if (valor_x > valor_Y) {
    console.log(`O maior número é: ${valor_x}`);
} else if (valor_Y > valor_x) {
    console.log(`O maior número é: ${valor_Y}`);
} else {
    console.log("Os números são iguais.");
}
