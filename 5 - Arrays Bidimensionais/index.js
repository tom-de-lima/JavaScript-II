// Arrays com elementos sendo outros arrays

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]

console.table(matriz) // exibir os elementos do array em um formato de linhas e colunas

const matrizEditada = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4", "l1, c5"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4", "l2, c5"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4", "l3, c5"],
]

matrizEditada[2].push("Inserido ao final") // acessa a posição 3 do array principal e insere elemento no array da posição

console.log(matrizEditada)

// Percorrendo Arrays dentro de um Array principal

for (let i = 0; i < matrizEditada.length; i++) {
  for (let j = 0; j < matrizEditada[i].length; j++) { //Acessa e percorre os elementos do array mais interno na posição x do array principal
    const elemento = matrizEditada[i][j]; //armazena o lemento na posição i do array principal e na posição j do array secundário
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento) // Concatenação para exibir elementos do subarray na posição do array principal

  }
  
}

