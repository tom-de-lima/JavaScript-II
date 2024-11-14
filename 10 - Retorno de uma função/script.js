// Criando retornos para funções - vários exemplos

function media(a, b) {
  let media = (a + b) / 2
  return media
}
// Função "media" calcula a média entre os parâmetros "a" e "b".
// O resultado é armazenado em uma variável "media" e retornado pela função.

function media2(a, b) {
  return (a + b) / 2
}
// Função "media2" realiza o mesmo cálculo da função "media", mas retorna o resultado diretamente, sem armazená-lo em uma variável.

function criarProduto(nome, preco) {
  let produto = {
    nome, // Equivalente a "nome: nome", abreviação usada quando chave e valor têm o mesmo nome.
    preco,
    estoque: 1, // Define um valor padrão de 1 para a propriedade "estoque".
  }
  return produto
}
// Função "criarProduto" cria e retorna um objeto "produto" com as propriedades nome, preco e estoque.
// O valor de "estoque" é definido como 1 por padrão.

function areaRetangular(base, altura) {
  return base * altura
}
// Função "areaRetangular" calcula e retorna a área de um retângulo, multiplicando a "base" pela "altura".

function areaQuadrado(lado) {
  return areaRetangular(lado, lado)
}
// Função "areaQuadrado" calcula a área de um quadrado chamando "areaRetangular" com ambos os parâmetros iguais a "lado".
// Isso demonstra o uso de uma função dentro de outra.

function maiorIdade(idade) {
  if (idade >= 18) {
    return "Indivíduo maior de idade"
  } else {
    return "indivíduo menor de idade"
  }
}
// Função "maiorIdade" verifica se a "idade" é maior ou igual a 18.
// Se for, retorna uma mensagem indicando que o indivíduo é maior de idade; caso contrário, retorna uma mensagem indicando menor de idade.

// Chamando funções

console.log("A média dos parâmetros a e b é: " + media(50, 50))
// Saída esperada: "A média dos parâmetros a e b é: 50"

console.log("A média dos parâmetros a e b é: " + media2(50, 50))
// Saída esperada: "A média dos parâmetros a e b é: 50"

// -----------------------------------------------------------------
console.log(criarProduto("Notebook Intel Core i9 32GB RTX 3050", 7900))
// #1 Cria e exibe o objeto do produto no console.
// Saída esperada: { nome: "Notebook Intel Core i9 32GB RTX 3050", preco: 7900, estoque: 1 }

let produto = criarProduto("Notebook Acer Nitro V15", 4000)
console.log(produto)
// #2 Armazena o objeto criado em uma variável "produto" e exibe o objeto no console.

//----------------------------------------------------------------

console.log("A área do quadrado com lado 5 é: " + areaQuadrado(5))
// #3 Chama a função "areaQuadrado" para calcular a área de um quadrado de lado 5.
// Saída esperada: "A área do quadrado com lado 5 é: 25"

let areaRet = areaRetangular(10, 15)
console.log("A área do retângulo com base 10 e altura 15 é: " + areaRet)
// #4 Calcula e armazena a área de um retângulo com base 10 e altura 15 na variável "areaRet", exibindo o valor no console.
// Saída esperada: "A área do retângulo com base 10 e altura 15 é: 150"

//----------------------------------------------------------------

console.log(maiorIdade(19))
// #5 Verifica se a idade 19 representa um maior de idade.
// Saída esperada: "Indivíduo maior de idade"

console.log(maiorIdade(17))
// #5 Verifica se a idade 17 representa um menor de idade.
// Saída esperada: "indivíduo menor de idade"
