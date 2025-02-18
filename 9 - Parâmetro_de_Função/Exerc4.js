// Os Rest Parameters (...) permitem que uma função receba um número indefinido de argumentos como um array.
function multiplosArgumentos(...args) {
  return args
}

console.log(multiplosArgumentos(12, true, "Menina", 23.8))

//-------------------------------------------------------------------------------------------

function calcularmedia(...numeros) {
  //O método .reduce() percorre um array e acumula valores ao longo do tempo. acumulador → Armazena o resultado da soma ao longo do tempo.
    
    //->elementoAtual → Representa cada número do array durante a iteração.
    //->operação → Define o que será feito com cada elemento (neste caso, somar).
    //->valorInicial → O valor inicial do acumulador (0 no nosso caso).
  let soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
  let media = (soma / numeros.length).toFixed(2)

  return parseFloat(media)
}

console.log(calcularmedia(23.5, 67, 45.2, 12.5, 34.1, 48.2))
