/*Exercício 2: Procurando Elementos em um Array
Descrição:
Crie um programa que armazene nomes de cinco países em um array. O programa deve pedir ao usuário que insira o nome de um país e, em seguida:

Verificar se o país está no array.
Exibir uma mensagem informando se o país foi encontrado e, se sim, mostrar sua posição.
Requisitos:

Utilize includes() para verificar a existência do país no array.
Utilize indexOf() para obter a posição do país encontrado.
Use prompt() para capturar a entrada do usuário e alert() para exibir o resultado.*/

let nomePais = prompt("Digite o nome de um país: ").trim()

let nomePaises = ["EUA", "Brasil", "Japão", "Alemanha", "Itália"]

if (!nomePais) {
  // Verifica se a entrada está vazia
  alert("Nenhum país foi digitado")
} else {
  let nomePaisFormatado =
    nomePais.charAt(0).toUpperCase() + nomePais.slice(1).toLowerCase()

  if (nomePaises.includes(nomePaisFormatado)) {
    alert(
      `O país ${nomePaisFormatado} está na lista na posição ${nomePaises.indexOf(
        nomePaisFormatado
      )}`
    )
  } else {
    alert(`O país ${nomePaisFormatado} não está na lista`)
  }
}
