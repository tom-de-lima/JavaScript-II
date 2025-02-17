/*Exercício 2: Trabalhando com Arrays e Objetos
Descrição:
Crie um array chamado alunos, onde cada elemento do array seja um objeto representando um aluno, contendo:

nome (string)
nota (número)
O programa deve exibir os dados de cada aluno no console e calcular a média das notas da turma.

Requisitos:

Declare um array de objetos contendo pelo menos três alunos.
Utilize um for ou forEach para percorrer o array e exibir os dados.
Calcule e exiba a média das notas no final. */

const alunos = [
    {nome: "Lima Neto", nota: 10}, 
    {nome: "Lima Filho", nota: 9}, 
    {nome: "Lima Sobrinho", nota: 8}, 
    {nome: "Teobaldo", nota: 7}, 
    {nome: "Tobias", nota: 6}, 
    {nome: "Jeremias", nota: 7},
]

let soma = 0
let media = 0

for (let i = 0; i < alunos.length; i++) {
    console.log(`Nome do aluno: ${alunos[i].nome} - Nota: ${alunos[i].nota}`)
    soma += alunos[i].nota
    media = soma / alunos.length
}

