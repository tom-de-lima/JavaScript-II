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

function criarUsuario(name, email, password, type = "nivel_3"){ // parãmetors com valores padrão devem estar como último na função.
    const usuario = {
        name, // --> o mesmo que: "name = name", tipo de abreviação utilizada em JS quando a chave é identica a propriedade.
        email,
        password,
        type
    }
}

// Dica para criar função com muitos parâmetros

function muitosParametros(nome, telefone, endereco, aniversario, email, senha, tipo = "tipo1") { // <-- Função com muitos parâmetros
    console.log("Nome: " + nome);
    console.log("Telefone: " + telefone);
    console.log("Endereço: " + endereco);
    console.log("Aniversário: " + aniversario);
    console.log("Email: " + email);
    console.log("Senha: " + senha);
    console.log("Tipo: " + tipo);  
}

function objetoComoParametro(objeto) { // <-- função que tem seus parâmetros como dados de um objeto. Portanto, parâmetros reduzidos a um.
    
}

const dadosDoUsuario = { // <-- Objeto usado como parâmetro para função
    nome: "",
    telefone: "",
    endereco: "",
    aniversario: "",
    email: "",
    senha: "",
    tipo: "",
}


// Chamando as funções

dobro(2)
dobro(200)

ola()
ola("João")

soma(10,20,30)

criarUsuario("Antônio", "antonio@email.com", "senha123") // A ordem de definição de parâmetros tem que ser a mesma de criação dos parâmetros, sendo os parâmetros opicionais, que possuem valor padrão, sendo os últimos na declaração de parâmetros.

objetoComoParametro(dadosDoUsuario)