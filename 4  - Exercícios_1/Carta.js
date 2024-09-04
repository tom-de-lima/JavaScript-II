const cartasBaralho = [
  'Ás de Copas', '2 de Copas', '3 de Copas', '4 de Copas', '5 de Copas', '6 de Copas',
  'Ás de Ouros', '2 de Ouros', '3 de Ouros', '4 de Ouros', '5 de Ouros', '6 de Ouros',
]

let running = true

do {

    if (cartasBaralho.length === 0) {
        console.log('Baralho vazio! Game encerrado.')
        running = false
        break
    }

    console.log("Quantidade de cartas no baralho: " + cartasBaralho.length)

    let menu = parseInt(prompt("\n1 - Adcionar uma carta; \n2 - Puxar uma carta; \n3 - Sair."))

    switch(menu) {
        case 1:
            let cartaAdicionada = prompt("Digite a carta que deseja adicionar: ")
            cartasBaralho.unshift(cartaAdicionada)
            break;
        case 2:
            let cartaPuxada = cartasBaralho.shift()
            console.log("Carta puxada: " + cartaPuxada)
            break;
        case 3:
            console.log("Encerrando o programa...")
            running = false
            break;
        default:
            console.log("Opção inválida!")
    }

    console.log("Cartas no baralho: " + cartasBaralho)

    // Simulação de delay para demonstrar a interatividade

// Pausa para a próxima interação
setTimeout(() => {
    
}, 1000);

}while (running)