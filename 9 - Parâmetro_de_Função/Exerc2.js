/*Exercício 2: Criando um Cadastro de Usuário

Descrição:
Crie uma função chamada cadastrarUsuario() que recebe quatro parâmetros:

nome (string)
email (string)
idade (número)
tipo (padrão: "comum")
A função deve retornar um objeto contendo esses dados e exibi-lo no console.

Requisitos:

Use valores padrão para tipo.
Retorne um objeto com as informações do usuário.
Exiba o objeto no console após chamar a função.
 */


/*O objeto dadosDoUsuario{} já contém nome, email e idade, então a função pode simplesmente acessá-los sem precisar "declarar" novamente no escopo da função. */
function cadastroDeUsuario(objeto) {
    

    /*O operador lógico ! (negação) verifica se tipo está vazio ou indefinido. Ou seja, !objeto.tipo retorna true nos seguintes casos:

    ->Se tipo não foi declarado dentro do objeto.
    ->Se tipo tem um valor considerado falsy, como "" (string vazia), null ou undefined.*/
    if (!objeto.tipo){
        objeto.tipo = "Comum"
    }

    return objeto

}

const dadosDoUsuario = {
    nome: "José Condé",
    email: "josecondeboy@conde.com",
    idade: 40,
    tipo: ""
}

console.log(cadastroDeUsuario(dadosDoUsuario))
