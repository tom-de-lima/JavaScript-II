/*Exercício 1: Criando um Método para Atualizar Dados de um Objeto
Descrição:
Crie um objeto chamado carro com as seguintes propriedades:

marca (string)
modelo (string)
ano (número)
Dentro do objeto, crie um método chamado atualizarAno(novoAno) que recebe um número como parâmetro e atualiza a propriedade ano do carro.

Requisitos:

O método deve modificar diretamente a propriedade ano usando this.ano.
Após a atualização, exiba uma mensagem indicando o novo ano do carro. 

desafio extra, tente adicionar um método modificarModelo(novoModelo) para permitir atualizar o modelo do carro dinamicamente! 🚀*/

let carro = {

    marca: 'Toyota',
    modelo: '',
    ano: 0,      //Lembrar de separar por vírgula também os método

    atualizarAno(novoAno){

        this.ano = novoAno

    },

    atualizarModelo(){
       let novoModelo

        do{

             novoModelo = prompt('Digite um novo modelo pra o carro: ').trim()

             if(!novoModelo){

                alert('Digite um modelo para o carro. O modelo não pode ser vazio.')

             }


        }while(!novoModelo)
        
             
            this.modelo = novoModelo

    },

    exibirDados(){

        console.log(`
           🚗 Dados do Carro: 
           -Marca: ${this.marca} 
           -Modelo: ${this.modelo} 
           -Ano: ${this.ano}`)
}
}

carro.atualizarAno(2022)
carro.atualizarModelo()
carro.exibirDados()