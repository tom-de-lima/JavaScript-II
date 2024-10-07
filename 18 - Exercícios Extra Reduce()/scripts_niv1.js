//Exercício 1 - Somar Números
const numeros = [10, 20, 30, 40, 50]

let soma = numeros.reduce(function (acumulado, numeros) {
    return acumulado + numeros
}, 0)

console.log("Soma dos valores: " + soma) 

//Exercício 2 - Contar letras

const frase = "banana e o tomate brigaram com o pepino em frente ao abacaxi"

const palavra = frase.split(" ")

console.log(palavra.length)

//----------------------------------------------------------------

const letras = frase.split("")

console.log(letras)
console.log(letras.length)

//----------------------------------------------------------------

const quantidadeTipoLetras = letras.reduce(function(acumulador, letras) {
    if (acumulador[letras] && letras !== " ") {
        acumulador[letras]++;
    } else if (letras !== " ") {
        acumulador[letras] = 1;
    }
    return acumulador;
},
{})

console.log(quantidadeTipoLetras)




