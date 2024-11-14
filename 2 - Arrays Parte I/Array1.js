const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
]
// Declara um array chamado "arr" que contém uma lista de nomes como strings.

// Adiciona "Boromir" ao final do array.
arr.push("Boromir") // O método push adiciona um novo elemento no final do array.
console.log(arr)
// Saída: ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli", "Boromir"]

// Adiciona "Sauron" ao início do array.
arr.unshift("Sauron") // O método unshift adiciona um novo elemento no início do array, movendo os demais elementos para a direita.
console.log(arr)
// Saída: ["Sauron", "Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli", "Boromir"]

// Remove o último elemento do array.
arr.pop() // O método pop remove o último elemento do array.
console.log(arr)
// Saída: ["Sauron", "Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// Remove o primeiro elemento do array.
arr.shift() // O método shift remove o primeiro elemento do array, movendo os demais elementos para a esquerda.
console.log(arr)
// Saída: ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// Verifica se "Merry" está no array.
console.log(arr.includes("Merry"))
// O método includes retorna true se o elemento especificado ("Merry") estiver no array e false se não estiver.
// Saída: true

// Encontra a posição de "Merry" no array.
console.log(arr.indexOf("Merry"))
// O método indexOf retorna o índice (posição) do elemento especificado ("Merry") no array. Se o elemento não estiver no array, retorna -1.
// Saída: 2

// Extrai uma porção do array do índice 2 até o índice 4 (não inclusivo).
console.log(arr.slice(2, 4))
// O método slice retorna uma cópia dos elementos do array a partir do índice inicial (2) até o índice final (4), mas sem incluir o índice final.
// Saída: ["Merry", "Pippin"]
