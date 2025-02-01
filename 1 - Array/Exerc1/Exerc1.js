/* Exercício 1: Criando e Modificando um Array
Descrição:
Crie um programa que declare um array contendo os nomes de três cidades. Em seguida, modifique a segunda cidade e adicione uma quarta cidade ao final do array. Por fim, exiba o array atualizado no console.

Requisitos:

Declare um array contendo três nomes de cidades.
Modifique o valor do segundo elemento.
Adicione um novo elemento ao final do array.
Exiba o array atualizado com console.log().*/ 

let array = ['Caruaru', 'Campina grande', 'João Pessoa']

array[1] = 'Florianópolis'
array.push('São Paulo')

console.log(array)