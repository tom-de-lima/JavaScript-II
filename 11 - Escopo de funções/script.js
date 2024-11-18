// Variável declarada no escopo mais externo do código:
let nome = "João Lucas"
// Declara uma variável chamada "nome" no escopo global, com o valor inicial "João Lucas".
// Essa variável pode ser acessada e modificada por qualquer função neste escopo.

function mudarNome() {
  // Variável acessada dentro da função (escopo mais interno):
  nome = "João Lucas Tavares de Lima"
  // Modifica o valor da variável global "nome" para "João Lucas Tavares de Lima".
  // Como "nome" foi declarada no escopo global, essa alteração é refletida fora da função também.
}

function criarAnimal() {
  let animal = {
    nome: "Cachorro",
    idade: 2,
    cor: "Preto e branco",
  }
  // Declara uma variável "animal" com escopo local dentro da função "criarAnimal".
  // Essa variável é um objeto com propriedades: "nome", "idade" e "cor".

  console.log(animal)
  // Exibe o objeto "animal" no console.
  // Se tentarmos acessar "animal" fora do escopo da função "criarAnimal", ocorrerá um erro,
  // pois "animal" está disponível apenas no escopo local da função.
}

// Chamando funções

console.log(nome)
// Exibe o valor atual da variável global "nome" no console.
// Saída esperada: "João Lucas"

mudarNome()
// Chama a função "mudarNome", que altera o valor da variável global "nome".

console.log(nome)
// Exibe o novo valor da variável global "nome" no console, após a execução de "mudarNome".
// Saída esperada: "João Lucas Tavares de Lima"
