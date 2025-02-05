/*Exercício 1: Combinando Listas de Alunos
Descrição:
Crie dois arrays contendo nomes de alunos de duas turmas diferentes. Em seguida, combine os dois arrays em um único array e adicione um aluno extra ao final da lista.

Requisitos:

Use .concat() para combinar os arrays.
Adicione um aluno extra manualmente na concatenação.
Exiba a lista final no console.
 */

let array1 =[
    'João', 
    'Maria', 
    'Pedro', 
    'José', 
    'Ana', 
    'Paulo']

let array2 = ['Bunda', 'Cuzão', 'Pinto', 'Pau']

console.log('Lista de elementos no array1:', array1)
console.log('Lista de elementos no array2:', array2)    

let arrays_concatenados = array1.concat(array2, 'Fuck') // concatena e add um elemento novo no final.

console.log('Lista de elementos após a concatenação:', arrays_concatenados)

