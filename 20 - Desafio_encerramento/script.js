const vagasDeEmprego = []

let looping = true

//Funções

//Função criar a vaga
function criarVaga(){
    let nome = prompt("Digite o nome da vaga:")
    let descricao = prompt("Digite a descrição para a vaga:")
    let dataLimite = prompt("Digite a data limte para inscrição: (formato: DD/MM/AAAA)")

    const confirmacao = confirm("#### Confirme as informações: #### \n\n" + "\nNome da vaga: " + nome + "\nDescrição: " + descricao +  "\nData limite para inscrição :" + dataLimite + "\n----------------------------------------------------------------")
        
    if(confirmacao) {
        const vaga = {
            nome: nome,
            descricao: descricao,
            dataLimite: dataLimite,
            candidatos: []
        }
        vagasDeEmprego.push(vaga)
        alert("Vaga criada com sucesso!")
    }
    else {
        alert("Operação cancelada. Nenhuma vaga foi adicionada.")
    }
}

//Função listar a vaga
function listarVagas(){
    if(vagasDeEmprego.length === 0){
        alert("Não há vagas disponíveis no momento.")
    }
else {

    let vagasEmTexto = "Vagas disponíveis no momento: \n\n"

    //Aqui, vagasEmTexto += está fazendo o seguinte: Pega o valor atual da variável vagasEmTexto. Concatena (ou seja, junta) esse valor com o novo conteúdo (a string que contém informações da vaga, como nome, índice, etc.). Atribui o resultado de volta para a variável vagasEmTexto.
    for(let i = 0; i < vagasDeEmprego.length; i++){
        vagasEmTexto += "Índice da vaga: " + i + 
        "\nNome da vaga: " + vagasDeEmprego[i].nome +
        "\nQuantidade de inscritos: " + vagasDeEmprego[i].candidatos.length + 
        "\n--------------------------------------------------------"
        }
        alert(vagasEmTexto) 
    }
}

//Função visualizar uma vaga
function visualizarVaga(){
    let indexVaga = parseInt(prompt("Digite o índice da vaga que deseja visualizar:"), 10)
    if(isNaN(indexVaga) || indexVaga < 0 || indexVaga >= vagasDeEmprego.length){
        alert("Índice inválido. Tente novamente.")
    }
    else {
        const vaga = vagasDeEmprego[indexVaga]

        let detalhesDaVaga = "Nome da vaga: " + vaga.nome +
                             "\nDescrição da vaga: " + vaga.descricao +
                             "\nData limite para inscrição: " + vaga.dataLimite +
                             "\nQuantidade de inscritos: " + vaga.candidatos.length +
                             "\n--------------------------------------------------------"
        
        //Verificando se há nomes de candidatos inscritos
        if(vaga.candidatos.length > 0){
            detalhesDaVaga += "Candidatos inscritos na vaga: \n\n"

            for(let i = 0; i < vaga.candidatos.length; i++){
                detalhesDaVaga += (i + 1) + " " + vaga.candidatos[i] + "\n"
            }
        }
        else{
            detalhesDaVaga += "\nNenhum candidato inscrito na vaga."
        }
        
        alert(detalhesDaVaga)
    }
}

//Função cadastrar um candidato em uma vaga
function cadastroCandidato() {
    let indexVaga = parseInt(prompt("Digite o índice da vaga que deseja inscrever um candidato:"), 10)
    if(isNaN(indexVaga) || indexVaga < 0 || indexVaga >= vagasDeEmprego.length){
        alert("Índice inválido. Tente novamente.")
    }
    else {
        const vaga = vagasDeEmprego[indexVaga]
        let nomeCandidato = prompt("Digite o nome do candidato:")

        const confirmacao = confirm("##### Confirme o nome do candidato ####" + nomeCandidato + 
            "\n----------------------------------------------------------------")

        if(confirmacao){
            vaga.candidatos.push(nomeCandidato)
            alert("Candidato inscrito com sucesso!")
        }
        else {
            alert("Operação cancelada. Nenhum candidato foi inscrito.")
        }
    }
}

//Função remover uma vaga da lista
function removerVaga(){
    let indexVaga = parseInt(prompt("Digite o índice da vaga que deseja remover:"), 10)
    if(isNaN(indexVaga) || indexVaga < 0 || indexVaga >= vagasDeEmprego.length) {
        alert("Índice inválido. Tente novamente.")
    }
    else {
        const vaga = vagasDeEmprego[indexVaga]
        const confirmacao = confirm("##### Tem certeza que deseja remover a vaga '" + vaga.nome + "'? ####")

        if(confirmacao) {
            vagasDeEmprego.splice(indexVaga, 1)
            alert("Vaga removida com sucesso!")
        }
        else {
            alert("Operação cancelada. Nenhuma vaga foi removida.")
        }
    }
}

//Loop do programa com menu
while (looping) {
  let menu = parseInt(
    prompt(
      "######## VAGAS DE EMPREGO DISPONÍVEIS ########" +
        "\n\n1 - Vagas Disponíveis;" +
        "\n2 - Criar Nova Vaga;" +
        "\n3 - Visualizar Vaga;" +
        "\n4- Inscrever Candidato em Vaga;" +
        "\n5 - Excluir uma Vaga;" +
        "\n6 - Sair"
    ),
    10
  )

  if (isNaN(menu) || (menu < 1 && menu > 6)) {
    alert("invalid value. Please, try again")
  } else {
    switch (menu) {
      case 1:
        listarVagas()
        break
      case 2:
        criarVaga()
        break
      case 3:
        visualizarVaga()
        break
      case 4:
        cadastroCandidato()
        break
      case 5:
        removerVaga()
        break
      case 6:
        alert("Exiting Program")
        looping = false
        break
      default:
        alert("Invalid option. Please, try again")
        break
    }
  }
}
