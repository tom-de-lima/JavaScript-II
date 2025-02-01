/* Exercício 2: Soma de Números em um Array
Descrição:
Crie um programa que declare um array contendo cinco números inteiros. Use um laço for para percorrer o array e calcular a soma de todos os elementos. No final, exiba a soma no console.

Requisitos:

Declare um array com cinco números inteiros.
Utilize um for para percorrer o array e somar os valores.
Exiba o resultado final com console.log().*/

let numeros = []
let soma = 0

for (let i = 0; i < 5; i++) {
   let numero = Math.floor(Math.random() * 10)
    numeros.push(numero)
    soma += numero
}


console.log(`Os números gerados foram ${numeros} e a soma deles é ${soma}`)