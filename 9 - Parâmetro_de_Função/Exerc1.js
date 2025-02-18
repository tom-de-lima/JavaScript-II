/*Exercício 1: Criando uma Função de Média
Descrição:
Crie uma função chamada calcularMedia() que recebe três números como parâmetros e retorna a média aritmética deles. Exiba o resultado no console.

Requisitos:

A função deve aceitar três parâmetros numéricos.
Deve calcular e retornar a média aritmética dos três números.
O resultado deve ser exibido no console. */

function CalcularMedia(n1, n2, n3) {
  let media = ((n1 + n2 + n3) / 3).toFixed(2) // .toFixed(2) arredonda o resultado para duas casas decimais, mas o transfoma em string.
  return parseFloat(media) // convertendo novamente em número com parseFloat()
}

console.log(CalcularMedia(10.4, 8.3, 7.6))