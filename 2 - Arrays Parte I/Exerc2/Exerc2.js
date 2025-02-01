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
