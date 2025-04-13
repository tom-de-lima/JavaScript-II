/*Exercício 3: Criando e Modificando uma Variável Global e uma Variável Local
Descrição:
Crie uma variável global chamada mensagem e defina um valor inicial para ela. Depois, crie uma função chamada modificarMensagem() que:

Declara uma variável local chamada mensagem dentro da função e a modifica.
Exibe mensagem dentro da função e depois exibe a variável global mensagem fora da função.
Isso ajudará a entender a diferença entre variáveis globais e locais com o mesmo nome.

Requisitos:

A função deve criar uma variável local com o mesmo nome da variável global.
Exibir o valor dentro e fora da função para notar a diferença.*/

//desafio extra, tente modificar a função para que ela adicione um novo texto à mensagem existente, em vez de sobrescrevê-la! 🚀

//---------------------------------------------------------------------------------------------------------------------

let menssagem = 'Piloto Profissional de Drones'

function modificarMensagem(){

    let mensagem = 'Eu serei um '
    
    let modifica = prompt('Digite a mensagem que deseja acrescentar a variável: ').trim()

    if (!modifica){
        console.log('Nenhuma menssagem definida')
    }
    else {
        menssagem += modifica
    }

    console.log('A menssagem atual é: ', menssagem)


}

modificarMensagem()

console.log('A menssagem atual é: ', menssagem)