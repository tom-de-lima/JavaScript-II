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
 */

function convertTemp() {
     let temp = parseInt(prompt("Qual a conversão que deseja realizar? \n1 - Celsius para Fahrenheit, \n2 - Fahrenheit para Celsius?").trim(), 10)

     if (temp === 1){
        let celsius = parseFloat(prompt("Digite a temperatura em Celsius: ").trim())
        return ((celsius * 9) / 5 + 32).toFixed(1)
     }
     else{
        let fahrenheit = parseFloat(prompt('Digite a temperatura em Fahrenheit: ').trim())
        return ((fahrenheit - 32) * (5 / 9)).toFixed(1)
     }
    }


console.log(convertTemp())

// ****ATENÇÃO! Coloque verificações para entradas inválidas na escolha da conversão e nos valores de temperatura digitados. Melhore a interação com o usuário.