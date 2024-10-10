const vagasDeEmprego = []


//Função que cria a vaga
function criarVaga(){
    let nome = prompt("Digite o nome da vaga:")
    let descricao = prompt("Digite a descrição para a vaga:")
    let dataLimte = prompt("Digite a data limte para inscrição: (formato: DD/MM/AAAA)")

    const confirmacao = confirm("#### Confirme as informações: #### \n\n" + "\nNome da vaga: " + nome + "\nDescrição: " + descricao +  "\nData limite para inscrição :" + dataLimte + "\n----------------------------------------------------------------")

    if(confirmacao) {
        const vaga = {
            nome: nome,
            descricao: descricao,
            dataLimite: dataLimite,
            candidato: []
        }
        vagasDeEmprego.push(vaga)
        alert("Vaga criada com sucesso!")
    }
    else {
        alert("Operação cancelada. Nenhuma vaga foi adicionada.")
    }
}

//------------------------------------------------------------------------------------------------------------------------

//Função para listar a vaga
function listarVagas(){
    if(vagasDeEmprego.length === 0){
        alert("Não há vagas disponíveis no momento.")
    }
else {

    let vagasEmTexto = "Vagas disponíveis no momento: \n\n"

    //Aqui, vagasEmTexto += está fazendo o seguinte: Pega o valor atual da variável vagasEmTexto. Concatena (ou seja, junta) esse valor com o novo conteúdo (a string que contém informações da vaga, como nome, índice, etc.). Atribui o resultado de volta para a variável vagasEmTexto.
    for(let i = 0; i < vagasDeEmprego.length; i++){
        alert(vagasEmTexto += "Índice da vaga: " + i + 
        "\nNome da vaga: " + vagasDeEmprego[i].nome +
        "\nQuantidade de inscritos: " + vagasDeEmprego[i].candidatos.length + 
        "\n--------------------------------------------------------"
        )
        }
    }
}

//------------------------------------------------------------------------------------------------------------------------

//Função para vizualizar uma vaga

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