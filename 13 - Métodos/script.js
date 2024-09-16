let pessoa = {
    nome: "",
    idade: 0,
    sexo: "",
    metodo() { // Método criado dentro de um objeto
        console.log("Nome: " + this.nome + ", Idade: " + this.idade + ", Sexo: " + this.sexo)
    }
}

// Acessando métodos de um objeto

pessoa.nome = "João"
pessoa.idade = 25
pessoa.sexo = "Masculino"

pessoa.metodo() // Chamando o método da função pessoa

