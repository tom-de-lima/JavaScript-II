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

*/


//FUNÇÃO PRINCIPAL
function criarLivro(titulo, autor, anoPublicacao) {
    //Forma que se declara a criação de um objeto quando os valores são repassados como parâmetors
    let livro = {
        titulo, //titulo, = titulo: titulo
        autor,
        anoPublicacao
    }

    return livro
}



// FUNÇÃO AUXILIAR
function auxiliarExibirLivro(livro) {

    console.log (`
        Livro:
        - Título: ${livro.titulo}
        - Autor: ${livro.autor}
        - Ano de Publicação: ${livro.anoPublicacao}
        `)
}


//CHAMADAS A FUNÇÕES

let livro1 = criarLivro("Sexo Selvagem - Orgasmos Femininos Violentos", "Penetrador", 2020)

auxiliarExibirLivro(livro1)


