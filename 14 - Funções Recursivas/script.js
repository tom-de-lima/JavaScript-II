let continuarLoop = true
let fatorialResultado = ""

function calcularFatorial(num) {
    if (num === 0 || num === 1) { // Pois o fatorial de 1 e 0 é sempre igual a 1
        return 1;
    } else {
        return num * calcularFatorial(num - 1); // Aqui acontece a chamada recursiva
    }
}

function solicitarNumero(){

    let numero = parseInt(prompt("Digite um número inteiro não negativo para calcular seu fatorial"), 10);

    if (isNaN(numero) || numero < 0) {
        console.log("Número inválido. Tente novamente.")
        return null
    } else {
        return numero
}

}

while (continuarLoop) { 

    let numero = solicitarNumero()

    if (numero !== null) {
        fatorialResultado = calcularFatorial(numero)
        console.log("O fatorial de " + numero + " é " + fatorialResultado)
        continuarLoop = confirm("Deseja calcular outro fatorial?")
    }
}

