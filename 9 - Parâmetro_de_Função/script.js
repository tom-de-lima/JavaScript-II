// Criando funções

function dobro(x){
    console.log("O dobro de " + x + " é: " + (x*2));
}

function ola(name = "valor_padrao"){ // Nesta função, o parâmetro tem um valor padrão "name = valor_padrao".
    console.log("Olá " + name + "!");
}

function soma(a, b, c){
    console.log("A soma de " + a + " " + b + " " + c + " é igual a " + (a+b+c));
}

function criarUsuario(name, email, password, type = "nivel_3"){
    const usuario = {
        name, // --> o mesmo que: name = name, tipo de abreviação utilizada em JS quando a chave é identica a propriedade.
        email,
        password,
        type
    }
}


// Chamando a função

dobro(2)
dobro(200)

ola()
ola("João")

soma(10,20,30)