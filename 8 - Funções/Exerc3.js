/*Exercício 3: Função para Verificar Números Pares
Descrição:
Crie uma função chamada ehPar() que recebe um número como parâmetro e retorna true se o número for par ou false se for ímpar. Depois, chame a função com diferentes valores e exiba os resultados no console.

Requisitos:

A função deve aceitar um número como parâmetro.
Deve retornar true se o número for par e false se for ímpar.
Exiba os resultados no console ao chamar a função com diferentes números. */

function ehPar (numero){

    if (numero % 2 === 0) {
        return `Número ${numero} é par!`
    }
    else {
        return `Número ${numero} é ímpar!`
    }
}

console.log(ehPar(14))