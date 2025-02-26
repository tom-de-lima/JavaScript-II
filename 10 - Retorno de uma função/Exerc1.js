/*Exercício 1: Criando uma Função de Conversão de Temperatura
Descrição:
Crie uma função chamada celsiusParaFahrenheit() que recebe uma temperatura em graus Celsius como parâmetro e retorna o equivalente em Fahrenheit.

Fórmula de conversão:


F=(C×9/5)+32
C=(°F - 32) × 5/9
Requisitos:

A função deve aceitar um valor numérico (temperatura em Celsius).
Deve retornar a temperatura convertida para Fahrenheit.
Exiba o resultado no console.

**Se quiser um desafio extra, tente modificar a função para converter também de Fahrenheit para Celsius, permitindo que o usuário escolha a conversão desejada!
 */

function principalConvertTemp() {
        
        let escolha  = auxiliarValidacaoEscolha()

        if (escolha === 1) {
            let celsius = auxiliarValidacaoTemp("Celsius")
            let celsiusToFahrenheit = ((celsius * 9) / 5 + 32).toFixed(1)
            return `A temperatura em Fahrenheite é ${celsiusToFahrenheit}Fº`
        } 
        else {
            let fahrenheit = auxiliarValidacaoTemp("Fahrenheit")
            let fahrenheitToCelsius = ((fahrenheit - 32) * (5 / 9)).toFixed(1)
            return `A temperatura em Celsius é ${fahrenheitToCelsius}Cº`
        }

     
    }


// FUNÇÕES AUXILIARES

function auxiliarValidacaoEscolha() {
  let escolha = parseInt(
    prompt(
      "Qual a conversão que deseja realizar? \n1 - Celsius para Fahrenheit, \n2 - Fahrenheit para Celsius?"
    ).trim(),
    10
  )

  while (isNaN(escolha) || (escolha !== 1 && escolha !== 2)) {
    alert("Erro! Digite uma escolha entre 1 e 2")
    escolha = parseInt(
      prompt(
        "Qual a conversão que deseja realizar? \n1 - Celsius para Fahrenheit, \n2 - Fahrenheit para Celsius?"
      ).trim(),
      10
    )
  }
  return escolha
}

function auxiliarValidacaoTemp(escala) {
  let valor = parseFloat(prompt(`Digite o valor da temperatura em ${escala}`).trim())

  while (isNaN(valor)) {
    alert("Valor inváido! Digite um valor numérico: ")
    valor = parseFloat(
      prompt(`Digite o valor da temperatura em ${escala}`).trim()
    )
  }
  return valor
}

//Chamada a função

console.log(principalConvertTemp())