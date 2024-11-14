const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
// Declara uma matriz 2D (array de arrays), onde cada subarray representa uma linha com elementos identificados por sua linha e coluna.

console.table(matriz)
// Usa o método console.table para exibir a matriz em formato de tabela no console.
// Isso facilita a visualização dos dados organizados por linha e coluna.

const matrizEditada = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4", "l1, c5"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4", "l2, c5"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4", "l3, c5"],
]
// Cria uma nova matriz, matrizEditada, que adiciona um novo elemento em cada linha, aumentando o número de colunas para 5.

matrizEditada[2].push("Inserido ao final")
// Usa o método push para adicionar um novo elemento ("Inserido ao final") ao final do terceiro subarray (linha 3) em matrizEditada.

console.log(matrizEditada)
// Exibe a matriz editada no console, agora com o novo elemento adicionado ao último subarray (linha).

// Utiliza um loop aninhado para percorrer todos os elementos em matrizEditada.
for (let i = 0; i < matrizEditada.length; i++) {
  // Percorre as linhas da matriz.
  for (let j = 0; j < matrizEditada[i].length; j++) {
    // Percorre as colunas de cada linha da matriz.
    const elemento = matrizEditada[i][j] // Armazena o elemento na posição [i][j] da matriz.
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    // Exibe a posição do elemento e seu valor em um formato estruturado.
  }
}
