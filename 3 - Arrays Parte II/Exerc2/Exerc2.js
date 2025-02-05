/* Exercício 2: Gerenciando um Estoque de Produtos
Descrição:
Crie um array que contenha cinco nomes de produtos. O programa deve permitir:

Remover um produto da terceira posição.
Adicionar um novo produto na segunda posição.
Exibir o array atualizado no console.
Requisitos:

Use .splice() para remover e adicionar elementos.
Certifique-se de que a lista final contenha cinco produtos.
Exiba o resultado final com console.log().*/

let produtosEmEstoque = ['Notebook', 'Tablet', 'Celular', 'Smartwatch', 'Câmera']

console.log('Produtos em estoque:', produtosEmEstoque)

let produtosRemovidos = produtosEmEstoque.splice(2, 1)

console.log('Produtos removidos do estoque: ', produtosRemovidos)
console.log('Estoque atualizados após remoçõ; ', produtosEmEstoque)

produtosEmEstoque.splice(1, 0, 'Drone')

console.log('Estoque atualizados: ', produtosEmEstoque)