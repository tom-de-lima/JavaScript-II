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
            dataLimite: dataLimite
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
    for(let i = 0; i < vagasDeEmprego.length; i++){
        alert("Índice da vaga: " + (i+1) + 
        "\nNome da vaga: " + vagasDeEmprego[i].nome + "\nQuantidade de inscritos: " + inscritosPorvagas + "\n--------------------------------------------------------"
        )
}
}
}

//------------------------------------------------------------------------------------------------------------------------

//Função que mostra a quantidade de inscritos por vaga
const inscritosPorvagas = vagasDeEmprego.reduce(function(acumulador, vaga) {
    if(acumulador[vaga.nome]){
        acumulador[vaga.nome]++
    }
    else {
        acumulador[vaga.nome] = 1
    }
    return acumulador
}, 0)

//------------------------------------------------------------------------------------------------------------------------

//Função para vizualizar uma vaga