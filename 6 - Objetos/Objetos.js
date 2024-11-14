
let variavel = 345
// Declara uma variável chamada "variavel" e a inicializa com o valor numérico 345.

const array = ["Elemento 1", false, 23, "Elemento 2", 23.67]
// Declara um array chamado "array" contendo diferentes tipos de dados: string, boolean, número inteiro e número decimal.

let objeto = {}
// Declara um objeto vazio chamado "objeto".

objeto.chave = "Valor"
// Adiciona uma propriedade chamada "chave" ao objeto e atribui a ela o valor "Valor".

console.log(objeto) 
// Exibe o objeto completo no console. Saída: { chave: "Valor" }

console.log(objeto.chave) 
// Exibe o valor da propriedade "chave" do objeto diretamente. Saída: "Valor"

const objeto1 = []
// Declara uma variável "objeto1" como um array vazio. Note que arrays em JavaScript são tratados como objetos do tipo "object".

objeto1.nome = "Antônio" 
objeto1.idade = 28 
objeto1.sexo = "Masculino" 
objeto1.capacidades = ["Programação", "Análise de dados", "Consciência corporal"]
// Embora "objeto1" seja um array, propriedades foram adicionadas diretamente a ele como se fosse um objeto comum.
// Agora "objeto1" possui propriedades semelhantes a um objeto literal, com chaves e valores.

console.log("Tipo de dado: " + typeof objeto1)
// Exibe o tipo de dado de "objeto1" no console, que será "object", pois arrays são uma forma especial de objeto em JavaScript.

console.log(objeto1)
// Exibe o conteúdo de "objeto1" no console, incluindo suas propriedades personalizadas.
// Saída esperada:
// {
//   0: undefined,
//   nome: "Antônio",
//   idade: 28,
//   sexo: "Masculino",
//   capacidades: ["Programação", "Análise de dados", "Consciência corporal"]
// }
