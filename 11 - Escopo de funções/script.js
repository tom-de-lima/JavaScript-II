// Variável declarada no escopo mais externo do código:

let nome = "João Lucas"

function mudarNome() {
    // Variável acessada dentro da função (escopo mais interno):
    nome = "João Lucas Tavares de Lima"
}

function criarAnimal() {
    let animal = {
        nome: "Cachorro",
        idade: 2,
        cor: "Preto e branco",
    }
    
    console.log(animal) //se tentar acessar a variável "animal" fora do escopo local da função será retornado um erro.
}



// Chamando funções

console.log(nome)
mudarNome()
console.log(nome)

criarAnimal()