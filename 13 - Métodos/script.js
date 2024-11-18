let pessoa = {
  nome: "",
  idade: 0,
  sexo: "",
  metodo() {
    // Método criado dentro do objeto "pessoa".
    console.log(
      "Nome: " + this.nome + ", Idade: " + this.idade + ", Sexo: " + this.sexo
    )
    // Exibe as propriedades "nome", "idade" e "sexo" do objeto "pessoa".
    // "this" faz referência ao próprio objeto "pessoa", acessando seus valores internos.
  },
}
// Declara um objeto chamado "pessoa" com as propriedades "nome", "idade", e "sexo", e um método "metodo".
// As propriedades são inicialmente vazias ou têm valores padrão (ex: idade = 0).

// Acessando métodos de um objeto

pessoa.nome = "João"
// Define o valor da propriedade "nome" do objeto "pessoa" como "João".

pessoa.idade = 25
// Define o valor da propriedade "idade" do objeto "pessoa" como 25.

pessoa.sexo = "Masculino"
// Define o valor da propriedade "sexo" do objeto "pessoa" como "Masculino".

pessoa.metodo()
// Chama o método "metodo" do objeto "pessoa", que exibe as informações de "nome", "idade" e "sexo" no console.
// Saída esperada: "Nome: João, Idade: 25
