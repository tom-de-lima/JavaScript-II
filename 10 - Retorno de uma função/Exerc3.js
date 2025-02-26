/*Exercício 2: Criando uma Função que Retorna um Objeto
Descrição:
Crie uma função chamada criarLivro() que recebe três parâmetros:

titulo (string)
autor (string)
anoPublicacao (número)
A função deve retornar um objeto representando o livro com essas informações.

Requisitos:

Use sintaxe curta para definir as propriedades do objeto.
Retorne o objeto criado.
Exiba o objeto no console. 

-->######tente expandir a função para permitir que o usuário insira os dados do livro dinamicamente via prompt()! 🚀#####*/

function criarLivro() {
    
    let livro = {
        titulo: '',
        autor: '',
        anoPublicacao: 0
    }

    dadosLivro(livro)

    return livro    
}

//FUNÇÕES AUXILIARES

function dadosLivro(livro){
  livro.titulo = prompt("Digite o título do livro: ").trim()
  livro.autor = prompt("Digite o nome do autor do livro: ").trim()

  let ano = parseInt(prompt("Digite o ano de publicação do livro: ").trim(), 10)

  //Verifica se o ano é um número, se é positivo e da data de hoje, extrai o ano e verifica se o ano não é do futuro.

  /* 1 - new Date() cria um objeto com a data atual.
     2 - .getFullYear() extrai apenas o ano atual (por exemplo, em 26 de fevereiro de 2025, retorna 2025).
     Essa parte verifica se ano é maior que o ano atual. */
  while (isNaN(ano) || ano < 0 || ano > new Date().getFullYear()) {

    alert("Ano inválido! Digite um ano válido para a publicação")
    let ano = parseInt(
      prompt("Digite o ano de publicação do livro: ").trim(),
      10
    )

  }

  livro.anoPublicacao = ano
}

function exibirlivro(livro){
    console.log(`
        Livro
        - Título: ${livro.titulo}
        - Autor: ${livro.autor}
        - Ano de Publicação: ${livro.anoPublicacao}`)
}

let livro1 = criarLivro()
exibirlivro(livro1)