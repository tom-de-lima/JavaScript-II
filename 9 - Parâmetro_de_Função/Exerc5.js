/*Descrição:
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

->->modifique a função para permitir diferentes níveis de usuário ("VIP", "Admin", "Comum"), dependendo da entrada do usuário! 🚀*/

function cadastroDeUsuario(objeto) {
  let tipoDigitado = prompt(
    "Digite um tipo: \n - Admin; \n - Usuário; \n - Comum. "
  )

    /*tipoDigitado = tipoDigitado ? // Se `tipoDigitado` for válido (não null/não vazio)
                tipoDigitado.trim().toLowerCase() // Remove espaços e converte para minúsculas
                : ""; // Caso contrário, atribui uma string vazia
    */
    tipoDigitado = tipoDigitado ? tipoDigitado.trim().toLowerCase() : ""

  /*tiposValidos.includes(tipoDigitado): Se tipoDigitado estiver dentro do array tiposValidos, significa que o usuário digitou um tipo correto. Se não estiver, o tipo é inválido.

  Se o tipo for inválido (!tiposValidos.includes(tipoDigitado)): Define objeto.tipo = "Não há definição de tipo de operador";.
    */

    const tiposValidos = ["admin", "usuario", "comun"] //Array com apenas os valores que serão aceitos

    if(!tiposValidos.includes(tipoDigitado)) {
    objeto.tipo = "Não há definição de operador"
    }
    else{
        objeto.tipo = tipoDigitado
    }

 
    console.log("Nome:" + objeto.nome)
    console.log("email:" + objeto.email)
    console.log("Idade:" + objeto.idade + " anos") 
    console.log("Tipo:" + objeto.tipo)
}

let objeto = {
    nome: "Zé Ruela",
    email: "zeruelabuilding@buiding.com",
    idade: 56,
    tipo: ""
}

cadastroDeUsuario(objeto)