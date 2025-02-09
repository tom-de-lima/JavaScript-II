/*Exercício 2: Modificando Elementos da Matriz
Descrição:
Crie um programa que peça ao usuário para informar uma linha e uma coluna (de 0 a 2) e substitua o valor presente nessa posição da matriz por "X".

Requisitos:

Inicialize uma matriz 3x3 com números de 1 a 9.
Peça ao usuário uma posição (linha e coluna) usando prompt().
Substitua o valor na posição informada por "X".
Exiba a matriz atualizada no console com console.table().
 */

let matriz_3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log('Matriz com valores originais:')
console.table(matriz_3x3)

let valorSolicitado = parseInt(prompt('Digite un valor para ser acrescentado a matriz: '))
let linha = parseInt(prompt('Digite a posição da linha que deseja modificar (0 a 2): '))
let coluna = parseInt(prompt('Digite a posição da coluna que deseja modificar(0 a 2): '))

matriz_3x3[linha].splice(coluna, 1, valorSolicitado)

console.log('Matriz com valores alterados:')
console.table(matriz_3x3)
