// Concatenando arrays

const array_1 = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5"]
const array_2 = ["Bunda 1", "Bunda 2", "Bunda 3", "Bunda 4"]

// Concatenando os dois arrays em uma variável

const array_concatenado = array_1.concat(array_2, "elemento_ousado")
console.log(array_concatenado) // ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5", "Bunda 1", "Bunda 2", "Bunda 3", "Bunda 4", "Elemento_ousado"]


//Substituição dos elementos (função splice )

const elementosRemovidos = array_concatenado.splice(1, 1, "testers Substituição do elemento removido na posição 1")

// iterar (percorrer) elementos no array usando for

for (let varn = 0; varn <= array_concatenado.length; varn++){
const elements = array_concatenado[varn]
console.log(elements + " se encontra na posição " + varn)
}