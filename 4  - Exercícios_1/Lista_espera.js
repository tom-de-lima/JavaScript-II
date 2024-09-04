const listaEspera = []
let running = true
let pacientes = ""


do {

   for(let pos = 0; pos < listaEspera.length; pos++) {
    pacientes = pacientes + (pos + 1) + ": " + listaEspera[pos] + "\n"
   }

   let menu = parseInt(prompt("Pacientes:\n\n" + pacientes + "\n1 - Inserir novo paciente \n2 - Consultar paciente \n3 - Sair"))
   
   
    switch(menu) {
        case 1:
            let newName = prompt("Digite o nome do paciente: ")
            listaEspera.push(newName)
            break;
        case 2:
            const consultado = listaEspera.shift()
            alert("Paciente consultado: " + consultado)
            break
        case 3:
           alert("Encerrando o programa...")
            running = false
            break;
        default:
            alert("Opção inválida!")
            break;
    }

    if (listaEspera.length === 0){
        console.log("Nenhum paciente na lista de espera! Consultas encerradas")
        running = false
        break
    }
    
}while (running)

alert("Programa Encerrado")