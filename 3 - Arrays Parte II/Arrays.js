const array_1 = [
  "Elemento 1",
  "Elemento 2",
  "Elemento 3",
  "Elemento 4",
  "Elemento 5",
]
const array_2 = ["Bunda 1", "Bunda 2", "Bunda 3", "Bunda 4"]
// Declara dois arrays, array_1 e array_2, cada um contendo strings como elementos.

const array_concatenado = array_1.concat(array_2, "elemento_ousado")
// Usa o método concat() para combinar array_1 e array_2, além de adicionar o string "elemento_ousado" ao final.
// O resultado é armazenado em array_concatenado.
console.log(array_concatenado)
// Saída: ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5", "Bunda 1", "Bunda 2", "Bunda 3", "Bunda 4", "elemento_ousado"]

// Remove o elemento na posição 1 de array_concatenado e o substitui pelo texto fornecido.
const elementosRemovidos = array_concatenado.splice(1,1,"testers Substituição do elemento removido na posição 1")
// O método splice realiza duas operações aqui: (1) remove o elemento na posição 1 e (2) insere o novo texto em seu lugar.
// O elemento removido é armazenado em elementosRemovidos.
console.log(array_concatenado)
// Saída esperada após a substituição: ["Elemento 1", "testers Substituição do elemento removido na posição 1", "Elemento 3", "Elemento 4", "Elemento 5", "Bunda 1", "Bunda 2", "Bunda 3", "Bunda 4", "elemento_ousado"]

// Usa um loop for para percorrer todos os elementos em array_concatenado e exibir cada elemento com seu índice.
for (let varn = 0; varn < array_concatenado.length; varn++) {
  const elements = array_concatenado[varn]
  console.log(elements + " se encontra na posição " + varn)
}
// Esse loop for percorre o array usando uma variável chamada varn, que representa o índice atual do loop.
// A cada iteração, ele acessa o elemento do array correspondente a esse índice e o exibe junto com a posição.
