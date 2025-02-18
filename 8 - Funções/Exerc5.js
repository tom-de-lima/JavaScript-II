//modifique a função para permitir que o usuário escolha entre diferentes idiomas ("Olá", "Hello", "Bonjour", etc.)!

function saudacoes() {
  nome = prompt("Qual seu nome?").trim()
  nome = nome.charAt(0).toUpperCase() + nome.slice(1) //// Formatar o nome para ter a primeira letra maiúscula
  idioma = parseInt(prompt("Escolha um idioma: \n1- Inglês; \n2 - Françês; \n3 - Alemão"), 10)

  if (idioma === 1 ){
    return `Hello, ${nome}`
  }
  else if (idioma === 2) {
    return `Bonjour, ${nome}`
  }
  else if (idioma === 3){
    return `Hallo, ${nome}`
  }
  else{
    return "Idioma desconhecido. Insira um idioma válido."
  }
  
}

console.log(saudacoes())

