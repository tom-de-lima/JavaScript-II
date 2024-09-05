// Declaração de objetos, variáveis e arrays

const listaImoveis = []

let running = true

// Looping

while(running) {
         
    let menu = parseInt(prompt("Quantidade de imóveis cadastrados no sistema: " + listaImoveis.length + "\n1 - Adicionar um imóvel; " + "\n2 - Exibir imóveis cadastrados; " + "\n3 - Sair do progama."), 10) // parseInt com Radix: Quando você chama parseInt("08", 10), o segundo parâmetro 10 especifica explicitamente que a string deve ser interpretada como um número decimal. Isso garante que "08" seja sempre convertido para o número decimal 8, independentemente do navegador ou da versão do JavaScript.

    switch(menu){
        case 1:
            let novoImovel = {
                nomeProprietario: prompt("Digite o nome do Proprietário: "),
                n_quartos: parseInt(prompt("Digite a quantidade de quartos: "), 10),
                n_banheiros: parseInt(prompt("Digite a quantidade de banheiros: "), 10),
                garagem: prompt("Há garagem (sim ou não)? ").toLowerCase() === "sim" ? "sim" : "não" // "... === 'sim' ": Verifica se a resposta convertida é exatamente igual a "sim". Se a resposta for "sim", a expressão será true. Para qualquer outra resposta (como "não", "nao", "no", etc.), a expressão será false. Observe o uso do operador ternário para substituir o true por sim e o false por não.
            }

            const confirmation = confirm("Deseja salvar o imóvel com as informações abaixo?" 
                + "\nNome do Proprietário: " + novoImovel.nomeProprietario
                + "\nQuantidade de quartos: " + novoImovel.n_quartos
                + "\nQuantidade de banheiros: " + novoImovel.n_banheiros
                + "\nHá garagem: " + novoImovel.garagem
            )

            if(confirmation) { // Se o usuário confirmar a operação
            listaImoveis.unshift(novoImovel) //Add elementos no início
            alert("Imóvel salvo com sucesso!")
            }
            break
            
        case 2:
            if(listaImoveis.length == 0) {
                alert("Nenhum imóvel cadastrado.")
            }
            else {
            for(let i = 0; i < listaImoveis.length; i++) {
                alert("Imóvel " + (i + 1) + 
                "\nNome do Proprietário: " + listaImoveis[i].nomeProprietario + 
                "\nQuantidade de quartos: " + listaImoveis[i].n_quartos + 
                "\nQuantidade de banheiros: " + listaImoveis[i].n_banheiros + 
                "\nHá garagem: " + listaImoveis[i].garagem + 
                "\n-----------------------------------------")
                }
            }
            break
            
        case 3:
            alert("Programa Encerrado")
            running = false
            break
            
        default:
            alert("Opção inválida!")
    }
    
}