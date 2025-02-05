/* Exercício 3: Removendo Elementos Específicos
Descrição:
Crie um array contendo oito palavras aleatórias. O programa deve remover todas as palavras a partir da quarta posição, deixando apenas as três primeiras palavras no array.

Requisitos:

Use .splice() para remover os elementos.
Exiba a lista final no console.*/ 

let palavrasAleatórias =['Dinheiro', 'Amor', 'Felicidade', 'Trabalho', 'Saúde', 'Paz', 'Família', 'Amigos']

console.log('Palavras presentes no array original: ',palavrasAleatórias)

let palavrasRemovidas = palavrasAleatórias.splice(3)

console.log('Palavras presentes no array original após a remoção: ',palavrasAleatórias)

console.log('Palavras retiradas do array original: ',palavrasRemovidas)
