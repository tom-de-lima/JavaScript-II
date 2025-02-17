/*Exercício 2: Função de Saudação Personalizada
Descrição:
Crie uma função chamada saudar() que recebe um nome como parâmetro e exibe no console a mensagem "Olá, [nome]!". Se nenhum nome for fornecido, a função deve exibir "Olá, visitante!".

Requisitos:

A função deve aceitar um parâmetro chamado nome.
Se nome for passado, deve exibir "Olá, [nome]!".
Se nome não for passado, deve exibir "Olá, visitante!". */

function saudacoes (nome = "Visitante") {
  nome = nome.charAt(0).toUpperCase() + nome.slice(1) //// Formatar o nome para ter a primeira letra maiúscula
  return `Olá, ${nome}`
}

console.log(saudacoes())
console.log(saudacoes("neto"))