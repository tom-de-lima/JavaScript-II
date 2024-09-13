
// Criando retornos para funções - vários exemplos

function media(a, b) { // <-- Função para calcular média usando uma variável para retorno
    let media = (a + b) /2
    return media
}

function media2(a, b) { // <-- Função para calcular média, que retorna o resultado do cálculo
    return (a + b) / 2;
}

function criarProduto(nome, preco) {
    let produto = {
        nome, // < -- equivale a: nome: nome,
        preco,
        estoque: 1
    }
    return produto;
}

function areaRetangular(base, altura) {
    return base * altura;
}

function areaQuadrado(lado) {
    return areaRetangular(lado, lado) // Retorno desta função é a chamada de uma função anterior, "areaRetangular", qual possui dois parâmetros.
}

function maiorIdade(idade) {
    if (idade >= 18) {
        return "Indivíduo maior de idade"
    } else {
        return "indivíduo menor de idade"
    }
}

// Chamando funções 

console.log("A média dos parâmetros a e b é: " + media(50, 50))
console.log("A média dos parâmetros a e b é: " + media2(50, 50))

// -----------------------------------------------------------------
console.log(criarProduto("Notebook Intel Core i9 32GB RTX 3050", 7900)) // #1

let produto = criarProduto("Notebook Acer Nitro V15", 4000) // #2
console.log(produto)

//----------------------------------------------------------------

console.log("A área do quadrado com lado 5 é: " + areaQuadrado(5)) // #3

let areaRet = areaRetangular(10, 15) // #4
console.log("A área do retângulo com base 10 e altura 15 é: " + areaRet) // #4

//----------------------------------------------------------------

console.log(maiorIdade(19)) // #5
console.log(maiorIdade(17)) // #5


