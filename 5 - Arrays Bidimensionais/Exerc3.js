/* Exercício 3: Somando os Elementos da Matriz
Descrição:
Crie um programa que some todos os elementos de uma matriz 3x3 e exiba o resultado no console.

Requisitos:

Declare uma matriz 3x3 contendo números inteiros.
Percorra a matriz utilizando loops for aninhados.
Calcule a soma de todos os elementos.
Exiba o resultado final no console.*/

let matriz_3x3 = [[10,4,76], [90,12,8], [23,34,78]]
let somaDosElementos = 0

console.log('Valores presentes na matriz:');
console.table(matriz_3x3)


for (let i = 0; i < matriz_3x3.length; i++) {
    for (let j = 0; j < matriz_3x3[i].length; j++){ //Necessário que o segundo for use o ínidce do primeiro para que não haja erro ao percorrer as colunas
        somaDosElementos += matriz_3x3[i][j]
    }
}

console.log('Soma dos elementos da matriz: ', somaDosElementos)
