// Declaração de variáeis em escopo externo de código

let running = true;

//Declaração de funções

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function areaRetangulo(base, altura) {
    return base * altura;
}

function areaQuadrado(lado) {
    return areaRetangulo(lado, lado);
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2); // "Math.PI" é uma propriedade do objeto Math que representa a constante valor de pi, "Math.pow(raio, 2)" é uma função que calcula o expoente de uma base, no caso, expoente 2 para o raio.
}

//Contrução do loopin

while (running) {

    let menu = parseInt(prompt("############ Calculadora Geométrica ############# " + " \n\n1 - Calcular área do triângulo; " + "\n2 - Calcular área do retângulo; " + "\n3 - Calcular área do quadrado; " + "\n4 - Calcular área do trapézio;" + "\n5 - Calcular área di círculo; " + "\n6 - Encerrar Programa."),10)

    if (isNaN(menu)) {
        alert("Valor inválido. Tente novamente.")
    }
    else {
        // Construção do menu

switch (menu){
    case 1:{
        let base =  parseFloat(prompt("Digite o valor da base: "))
        let altura = parseFloat(prompt("Digite o valor da altura: "))

        if (isNaN(base) || isNaN(altura)){
            console.log("Os valores digitados não são válidos. Tente novamente.")
        }
        else{
            let resultado = areaTriangulo(base, altura)
            console.log("Área do triângulo: " + resultado)
        }
        break;
    }    
    case 2:{
        let base =  parseFloat(prompt("Digite o valor da base: "))
        let altura = parseFloat(prompt("Digite o valor da altura: "))
        
        if (isNaN(base) || isNaN(altura)){
            console.log("Os valores digitados não são válidos. Tente novamente.")
        }
        else{
            let resultado = areaRetangulo(base, altura)
            console.log("Área do retângulo: " + resultado)
        }
        break;
    }

    case 3:{
        let lado =  parseFloat(prompt("Digite o valor do lado: "))

        if (isNaN(lado)){
            console.log("O valor digitado não é válido. Tente novamente.")
        }
        else{
            let resultado = areaQuadrado(lado)
            console.log("Área do quadrado: " + resultado)
        }
        break;
    }    
    case 4:{
        let baseMenor = parseFloat(prompt("Digite o valor da base menor: "))
        let baseMaior = parseFloat(prompt("Digite o valor da base maior: "))
        let altura = parseFloat(prompt("Digite o valor da altura: "))

        if (isNaN(baseMenor) || isNaN(baseMaior) || isNaN(altura)){
            console.log("Os valores digitados não são válidos. Tente novamente.")
        }
    else{
            let resultado = areaTrapezio(baseMenor, baseMaior, altura)
            console.log("Área do trapézio: " + resultado)
        }
        break;
    }
    case 5:{
        let raio =  parseFloat(prompt("Digite o valor do raio: "))

        if (isNaN(raio)){
            console.log("O valor digitado não é válido. Tente novamente.")
        }
        else{
            let resultado = areaCirculo(raio)
            console.log("Área do círculo: " + resultado)
        }
        break;
    }
    case 6:{
        console.log("Encerrando o programa...")
        running = false
        break;
    }
    
    default:
        console.log("Opção inválida!")
        break;
}
    }

}

