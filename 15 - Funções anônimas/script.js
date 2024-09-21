// Exemplo de uma função declarada de modo natural

function somar(a, b){
    return a + b;
}

// Exemplo de declaração de função anônima

const subtrair = function(a, b){ // Afunção foi declarada, sem nome, atribuida a uma variável
    return a - b;
}

// Exemplo de função arrow function

const multiplicar = (a, b) => a * b; // forma abreviada de declarar uma função


// Chamando funções

console.log(somar(2, 3));
console.log(subtrair(5, 3));
console.log(multiplicar(3, 4));


