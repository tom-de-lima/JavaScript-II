/* Exercício 1: Gerenciando uma Lista de Compras
Descrição:
Crie um programa que permita ao usuário gerenciar uma lista de compras. O programa deve:

Criar um array inicial com três itens de supermercado.
Adicionar um novo item ao final da lista.
Adicionar um novo item no início da lista.
Remover o último item da lista.
Remover o primeiro item da lista.
Exibir o array final no console.
Requisitos:

Utilize push(), unshift(), pop(), e shift() para modificar o array.
Exiba o array atualizado no console.*/

let listaMercado = ['Arroz', 'Feijão', 'Macarrão']

listaMercado.push('Carne')
listaMercado.unshift('Pão')

console.log(listaMercado)

listaMercado.pop()
listaMercado.shift()

console.log(listaMercado)