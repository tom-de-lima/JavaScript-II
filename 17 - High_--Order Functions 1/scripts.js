// Array - Manipulando com High Order Functions

const arrayPersonagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

  // Craindo um novo array com uma chave do array anterior # Forma 1 de criar usando for:

  const  nomePersonagens = []

  for (let i = 0; i < arrayPersonagens.length; i++) {

    nomePersonagens.push(arrayPersonagens[i].nome)

  }

  console.log(nomePersonagens) 

  // Criando um novo array utilizando o "MAP", High-Order Function #Forma 2 de criar usando o método MAP:

  
 const racaPersonagens = arrayPersonagens.map(function (personagem) { //Method MAP
    return personagem.raca
  })

  console.log(racaPersonagens) 

  // Novos exemplos de uso de High-Order Function

  const orcs = arrayPersonagens.filter(function(personagem) { // Method filter
    return personagem.raca === 'Orc'
  })

  console.log(orcs) // Orcs

  //Outra forma de transformar arrays usando o método Reduce:

  // Reduce - Observe os parãmetros: 1 - Function e 2 - 0 / Como se trata de um método que acumula, na primeira iteração, ainda não tem nenhum valor acumulado, portanto o segundo parâmetro do método reduce(), que é o 0 apresentado no exemplo, diz que o primeiro valor acumulado será 0.

  const niveisSomados = arrayPersonagens.reduce(function(valorAcumulado, personagem) { 
    return valorAcumulado + personagem.nivel;
  }, 0)

  console.log(niveisSomados) // Soma dos níveis de todos os personagens

  // Usando o Reduce para outras tarefas - Agrupando os elementos do array em um objeto por raças
  // reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final

const racas = arrayPersonagens.reduce(function (acumulador, personagem) {
    if (acumulador[personagem.raca]) {
      acumulador[personagem.raca].push(personagem)
    } else {
      acumulador[personagem.raca] = [personagem]
    }
    return acumulador
  }, {})

console.log(racas)

//----------------------------------------------------------------

//Método Sort(): É utilizado para ordenar o array em crescente ou decrescente

//Apenas ordenar o array original:

arrayPersonagens.sort(function(a, b) {
  return a.nivel - b.nivel;
})

console.log(arrayPersonagens)

// Ordenando o array em uma nova variável:

const arrayOrdenado = arrayPersonagens.slice().sort(function(a, b) { 
  return b.nivel - a.nivel;
})

console.log(arrayOrdenado) // Array ordenado decrescente