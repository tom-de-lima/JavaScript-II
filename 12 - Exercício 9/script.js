// Declaração de variáeis em escopo externo de código

let looping = true;

//Declaração de funções

function isValidNumber(input){ //Função que verifica se um número é válido ou não
        return !isNaN(input) && input.toString().trim() === parseFloat(input).toString()
}

function getValidateInput(message){
    let input = parseFloat(prompt(message))
    if (!isValidNumber(input)){
        console.log("Os valores digitados não são válidos. Tente novamente.")
        return null
    }
    else{
        return input
    }
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 
        

function areaRetangulo(base, altura) {
    return base * altura;
}

function areaQuadrado(lado) {
    return areaRetangulo(lado, lado); // Chana uma função dentro de outra função passando os parâmetros.
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCirculo(raio) {
        return Math.PI * Math.pow(raio, 2) // "Math.PI" é uma propriedade do objeto Math que representa a constante valor de pi, "Math.pow(raio, 2)" é uma função que calcula o expoente de uma base, no caso, expoente 2 para o raio.
        }

//Contrução do loopin

while (looping) {

    let menu = parseInt(prompt("############ Calculadora Geométrica ############# " + " \n\n1 - Calcular área do triângulo; " + "\n2 - Calcular área do retângulo; " + "\n3 - Calcular área do quadrado; " + "\n4 - Calcular área do trapézio;" + "\n5 - Calcular área do círculo; " + "\n6 - Encerrar Programa."),10)

    if (isNaN(menu)) {
        alert("Valor inválido. Tente novamente.")
    }
    else {
        
        // Construção do menu

switch (menu){
    case 1:{
        let base =  getValidateInput("Digite o valor da base: ")
        let altura = getValidateInput("Digite o valor da altura: ")
        
        if (base !== null && altura !== null) {
            console.log("Área do triângulo: " + areaTriangulo(base, altura));;
        }
    }
    break

    case 2:{
        let base =  getValidateInput("Digite o valor da base: ")
        let altura = getValidateInput("Digite o valor da altura: ")

        if (base !== null && altura !== null) {
            console.log("Área do retângulo: " + areaRetangulo(base, altura))
        }
    }
    break;

    case 3:{
        let lado =  getValidateInput("Digite o valor do lado: ")
        
        if (lado !== null){
        console.log("Área do quadrado: " + areaQuadrado(lado))
        }
    }
    break;   

    case 4:{
        let baseMaior = getValidateInput("Digite o valor da base maior: ")
        let baseMenor = getValidateInput("Digite o valor da base menor: ")
        let altura = getValidateInput("Digite o valor da altura: ")
        
        if (baseMaior!== null && baseMenor!== null && altura!== null) {
            console.log("Área do trapézio: " + areaTrapezio(baseMaior, baseMenor, altura) )
        }
    }
    break;
    case 5:{
        let raio =  getValidateInput("Digite o valor do raio: ")
        
        if (raio!== null){
        console.log("Área do círculo: " + areaCirculo(raio))
        }
    }
    break;

    case 6:{
        console.log("Encerrando o programa...")
        looping = false 
    }
    break;
    
    default:
        console.log("Opção inválida!")
        break;
}
    }

}

