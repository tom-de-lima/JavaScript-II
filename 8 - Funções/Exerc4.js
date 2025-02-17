/*tente modificar a função para permitir um intervalo de números e listar todos os pares dentro desse intervalo! z */

function IntervaloEntreNumeros(numero1, numero2) {

  let intervaloNumerico = []

  //garante que o menor número fique armazenado na variável inicio e o maior número na variável fim. Isso é útil para situações onde precisamos definir um intervalo numérico ordenado, independentemente da ordem em que numero1 e numero2 são fornecidos. Bom
  let inicio = Math.min(numero1, numero2)
  let fim = Math.max(numero1, numero2)

  while (inicio <= fim) {
    intervaloNumerico.push(inicio)
    inicio++
  }

  return intervaloNumerico
}

console.log(IntervaloEntreNumeros(30, 20))


