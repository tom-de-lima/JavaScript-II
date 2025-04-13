/*Exercício 2: Criando um Método para Exibir Informações Formatadas
Descrição:
Crie um objeto chamado produto com as seguintes propriedades:

nome (string)

preco (número)

estoque (número)

Dentro do objeto, crie um método chamado exibirInfo(), que exibe os dados do produto no console de maneira formatada.

Requisitos:

O método deve acessar as propriedades usando this.nome, this.preco e this.estoque.

A exibição deve ser clara e organizada, usando template literals.


#####Se quiser um desafio extra, adicione um método aplicarDesconto(porcentagem) que atualize o preço do produto com base em um desconto fornecido pelo usuário! 🚀

 */

let produto = {

    nome: "Notebook Gamer",
    preco: 5000,
    estoque: 34,

    exibirInfo() {

        console.log(
        `===============PRODUTO===============
            - Nome do produto: ${this.nome}
            - Preço do produto: ${this.preco.toLocaleString("pt-BR", {
           style: "currency",
           currency: "BRL",
         })}
           - Quantidade em Estoque: ${this.estoque}
        ========================================`
        )

    },
    
    aplicarDesconto() {

        let valordesconto  = parseFloat(prompt('Digite o percentual de desconto na compra:').trim())

        while (isNaN(valordesconto) || valordesconto < 0 || valordesconto > 100) {

            console.log('Valor de desconto inválido. Digite um valor numério, maior que 0 e menor que 100')

            let valordesconto = parseFloat(
              prompt("Digite o percentual de desconto na compra:").trim()
            )
        }

        let desconto = (this.preco * valordesconto) / 100

        let novoPreco =  this.preco - desconto

        this.preco = novoPreco
    }

    

}

produto.aplicarDesconto()
produto.exibirInfo()