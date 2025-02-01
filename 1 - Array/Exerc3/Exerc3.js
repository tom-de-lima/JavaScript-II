/* Exercício 3: Verificando a Existência de um Elemento no Array
Descrição:
Crie um programa que solicite ao usuário um nome e verifique se esse nome está presente em um array pré-definido de cinco nomes. Caso o nome esteja presente, exiba "Nome encontrado!". Caso contrário, exiba "Nome não encontrado!".

Requisitos:

Declare um array com cinco nomes.
Use prompt() para solicitar um nome ao usuário.
Utilize if e o método includes() para verificar a existência do nome no array.
Exiba a mensagem apropriada com alert().*/

let nomes = ['João', 'Jasmim', 'Juliana', 'Neto', 'Júlia']
let nome = prompt('Digite um nome: ').trim() // O método trim() remove os espaços em branco do início e do fim da string.

nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase() // Deixa a primeira letra maiúscula e as demais minúsculas. charAt(0): Obtém o primeiro caractere da string (índice 0) / .slice(1): Retorna a substring a partir do índice 1.

if (nomes.includes(nome)) {
    console.log(`O nome ${nome} está na lista na posição ${nomes.indexOf(nome)}`)
}
else {
    console.log(`O nome ${nome} não está na lista.`)
}