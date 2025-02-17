/*Exercício 1: Criando e Modificando um Objeto
Descrição:
Crie um objeto chamado pessoa com as seguintes propriedades:

nome (string)
idade (número)
profissao (string)
Após criar o objeto, modifique a propriedade idade e adicione uma nova propriedade chamada hobby (string). Exiba o objeto atualizado no console.

Requisitos:

Declare o objeto usando const.
Modifique e adicione propriedades dinamicamente.
Utilize console.log() para exibir o objeto antes e depois das modificações. */


const pessoa = {
  nome: "Lima Neto",
  idade: 44,
  profissao: "Engenheiro de Automação",
}

console.log("Objeto original:", pessoa)

// Adicionando nova propriedade dinamicamente
pessoa.hobby = [
  "Pilotagem de drones e helicópteros",
  "Desenvolvimento de software",
  "Construção civil",
]

console.log("Objeto atualizado com hobbies:", pessoa)
