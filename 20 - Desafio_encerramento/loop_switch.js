// Criando o Looping para o menu com verificaçaõ de valor numérico

let looping = true

while (looping) {

    let menu = parseInt(prompt("######## VAGAS DE EMPREGO DISPONÍVEIS ########" + "\n\n1 - Vagas Disponíveis;" + "\n2 - Criar Nova Vaga;" + "\n3 - Vizualizar Vaga;" + "\n4- Inscrever Candidato em Vaga;" + "\n5 - Excluir uma Vaga;" + "\n6 - Sair"), 10)

    if (isNaN(menu)){
        alert("invalid value. Please, try again")
    }
    else {
        switch (menu) {
            case 1:
                alert("Opção 1")
                break;
            case 2:
                alert("Opção 2")
                break;
            case 3:
                alert("Opção 3")
                break;
            case 4:
                alert("Opção 4")
                break;
            case 5:
                alert("Opção 5")
                break;
            case 6:
                alert("Exiting Program")
                looping = false
                break;
            default:
                alert("Invalid option. Please, try again")
                break;
        }
    }
}

