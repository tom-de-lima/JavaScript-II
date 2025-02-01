let nomeFilmes = ["Star Wars", "Matrix", "Mr. Robot", "Inception", "The Matrix", "Interstellar", "The Godfather"]

console.log("Nome dos Filmes Presentes no Streaming: ")

for (let i = 0; i < nomeFilmes.length; i++) {
  console.log('\n' + (i +1) + " - " + nomeFilmes[i])
}

let novaLista1 = nomeFilmes.slice(0, 3)

console.log("\nNome dos Filmes Presentes no Streaming atual: ")

novaLista1.forEach((element, index) => console.log(`\n${index + 1} - ${element}`)) // .forEach() para percorrer um array chamado nomeFilmes e imprimir seus elementos no console, acompanhados de um índice formatado. 

// Sintaxe: array.forEach((elemento, indice) => bloco de comandos)


let novaLista2 = nomeFilmes.slice(-3) // Pegando os 3 últimos elementos

console.log("\nNome dos Filmes Presentes no Streaming atual: ")

novaLista2.forEach((filme, i) => console.log(`\n${i +1} - ${filme}`))