/*Exercício 3: Criando um Método para Modificar uma Propriedade com Condição
Descrição:
Crie um objeto chamado usuario com as propriedades:

nome (string)

email (string)

status (booleano, true para ativo e false para inativo)

Dentro do objeto, crie um método chamado alterarStatus(), que inverte o valor de status (true → false, false → true).

Requisitos:

O método deve modificar this.status.

Após a mudança, exiba uma mensagem indicando o novo status ("Usuário ativado" ou "Usuário desativado").
 */


let usuario = {
  nome: prompt("Digite um nome: ").trim(),
  email: prompt("Digite um email: ").trim(),
  status: true,

  alterarStatus() {

    let setStatus = prompt("Mude o status para true ou false: ").toLowerCase().trim()

    while (setStatus !== "true" && setStatus !== "false") {
        console.log('Digite apenas true ou false')
        setStatus = prompt(
          "Mude o status para true ou false: "
        ).toLowerCase().trim() 
    }

    if (setStatus === "true") {

      this.status = true

    }
    else {
      this.status = false
    }

  },

  exibirInfos() {

    console.log(`\n - Nome: ${this.nome}
        \n - E-mail: ${this.email}
        \n - Status: ${this.status}`)

  }
}

usuario.alterarStatus()
usuario.exibirInfos()