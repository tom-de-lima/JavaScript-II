const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// 1 Adcionar elementos no array

// 1.1 Adcionar usando a função "push"

arr.push("Boromir") // inserido ao final da lista
console.log(arr) 

// Adcionar usando a função "unshift"

arr.unshift("Sauron") // inserido no início da lista
console.log(arr)

// 2 Remover elementos do array

// 2.1 Remover usando a função "pop"

arr.pop() // remove o último elemento da lista
console.log(arr)

// 2.2 Remover usando a função "shift"

arr.shift() // remove o primeiro elemento da lista
console.log(arr)

// 3 Pesquisar por um elemento

// 3.1 Pesquisar usando a função "includes"

console.log(arr.includes("Merry")) // true

// 3.2 Pesquisar usando a função "indexOf"
 
console.log(arr.indexOf("Merry")) // 2

// 4 Cortar e concatenar um array

// 4.1 Cortar usando a função "slice"

console.log(arr.slice(2, 4)) // ["Merry", "Pippin"]

