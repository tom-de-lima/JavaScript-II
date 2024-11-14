// Criando funções

function dobro(x) {
  console.log("O dobro de " + x + " é: " + x * 2)
}
// Função "dobro" recebe um parâmetro "x" e exibe o dobro de "x".
// O operador "*" multiplica "x" por 2 e o valor resultante é exibido no console.

function ola(name = "valor_padrao") {
  console.log("Olá " + name + "!")
}
// Função "ola" possui um parâmetro "name" com valor padrão "valor_padrao".
// Se o parâmetro "name" não for fornecido na chamada da função, ele assumirá "valor_padrao".
// A função exibe uma saudação personalizada com o nome fornecido.

function soma(a, b, c) {
  console.log(
    "A soma de " + a + " " + b + " " + c + " é igual a " + (a + b + c)
  )
}
// Função "soma" recebe três parâmetros, "a", "b" e "c".
// A função exibe a soma desses três valores no console.

function criarUsuario(name, email, password, type = "nivel_3") {
  const usuario = {
    name,
    email,
    password,
    type,
  }
}
// Função "criarUsuario" recebe quatro parâmetros: "name", "email", "password", e "type" (com valor padrão "nivel_3").
// Cria um objeto "usuario" com as propriedades fornecidas.
// Esse código usa a sintaxe abreviada para propriedades que têm o mesmo nome que a chave e o valor, facilitando a criação do objeto.

// Dica para criar função com muitos parâmetros

function muitosParametros(
  nome,
  telefone,
  endereco,
  aniversario,
  email,
  senha,
  tipo = "tipo1"
) {
  console.log("Nome: " + nome)
  console.log("Telefone: " + telefone)
  console.log("Endereço: " + endereco)
  console.log("Aniversário: " + aniversario)
  console.log("Email: " + email)
  console.log("Senha: " + senha)
  console.log("Tipo: " + tipo)
}
// Função "muitosParametros" recebe múltiplos parâmetros. O último, "tipo", possui valor padrão "tipo1".
// A função exibe cada parâmetro no console. Essa abordagem, com muitos parâmetros, pode tornar o código mais difícil de ler e manter.

function objetoComoParametro(objeto) {
  // Essa função é projetada para receber um objeto como parâmetro.
  // Dessa forma, podemos passar todas as informações necessárias em um único parâmetro, reduzindo o número de parâmetros na função.
}

const dadosDoUsuario = {
  nome: "",
  telefone: "",
  endereco: "",
  aniversario: "",
  email: "",
  senha: "",
  tipo: "",
}
// Objeto "dadosDoUsuario" criado para ser passado como parâmetro para a função "objetoComoParametro".
// Contém várias propriedades que representam informações do usuário.

// Chamando as funções

dobro(2)
// Saída esperada: "O dobro de 2 é: 4"

dobro(200)
// Saída esperada: "O dobro de 200 é: 400"

ola()
// Saída esperada: "Olá valor_padrao!"
// Como nenhum parâmetro foi passado, a função usa o valor padrão "valor_padrao".

ola("João")
// Saída esperada: "Olá João!"
// Aqui o valor "João" é passado como argumento e substitui o valor padrão.

soma(10, 20, 30)
// Saída esperada: "A soma de 10 20 30 é igual a 60"

criarUsuario("Antônio", "antonio@email.com", "senha123")
// Chamada da função "criarUsuario" com os valores dos parâmetros obrigatórios.
// Como "type" possui um valor padrão, não é necessário passá-lo, e o padrão "nivel_3" será utilizado.

objetoComoParametro(dadosDoUsuario)
// Passa o objeto "dadosDoUsuario" como parâmetro para a função "objetoComoParametro".
// Essa prática facilita a passagem de vários valores para a função de forma organizada e clara.
