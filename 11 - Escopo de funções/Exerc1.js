/*Exercício 1: Modificando uma Variável Global dentro de uma Função
Descrição:
Crie uma variável global chamada contador e inicialize-a com o valor 0. Depois, crie uma função chamada incrementarContador() que aumenta o valor do contador em 1 cada vez que for chamada.

Requisitos:

A função deve modificar diretamente a variável global.
Após cada chamada da função, exibir o valor atualizado de contador no console. */


//desafio extra, tente modificar a função para permitir que o usuário escolha se deseja incrementar ou decrementar o contador! 🚀

var contador = 0

function incrementarContador(){

    let escolher = parseInt(prompt('1 - Incrementar ou 2 - Decrementar'), 10)

    escolher = escolha(escolher)

    if (escolher === 1){
        console.log('Função incrementar escolhida')
        contador++
    }
    else{
        console.log('Função decrementar escolhida')
        contador--
    }

    return `O valor incrementado é: ${contador}` 

}

function escolha(valor){
    

    while (valor !== 1  && valor !== 2){
        console.log('Digite um valor válido.')
        valor = parseInt(prompt("1 - Incrementar ou 2 - Decrementar"), 10)
    }

    return valor
}



console.log(incrementarContador())