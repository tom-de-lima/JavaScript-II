/*Exercício 2: Criando uma Variável Local dentro de uma Função
Descrição:
Crie uma função chamada criarPessoa() que declara uma variável local chamada pessoa, que é um objeto contendo:

nome (string)
idade (número)
cidade (string)
Dentro da função, exiba o objeto pessoa no console. Depois, tente acessar pessoa fora da função e veja o que acontece.

Requisitos:

A variável pessoa deve ser declarada dentro da função (escopo local).
Teste acessar pessoa fora da função para observar o comportamento. */


//#######desafio extra, tente modificar o código para permitir que o usuário cadastre múltiplas pessoas, armazenando os objetos em um array! 🚀




//----------------------------------------------------------------------------------------------------------------------------------
let pessoas = []

// Função que cria e retorna um objeto pessoa com dados preenchidos
function criarPessoa() {
    // Cria um objeto pessoa com propriedades iniciais vazias ou padrão
    let pessoa = {
        nome: '',      // Inicializa o nome como string vazia
        idade: 0,      // Inicializa a idade como 0
        cidade: ''     // Inicializa a cidade como string vazia
    };

    // Chama a função auxiliar para preencher os dados do objeto pessoa
    dadosPessoa(pessoa)
    
    // Retorna o objeto preenchido
    return pessoa;
}


function escolherAcao() {
  let running = true

  let escolha = parseInt(
    prompt(
      "O que deseja realizar? \n1 - Adicionar outra pessoa; \n2 - Remover uma pessoa; \n3 - Sair."
    ),
    10
  )
  while (running) {
    switch (escolha) {
      case 1:
        let novaPessoa = criarPessoa(novaPessoa)
        pessoas.unshift(novaPessoa)
        break
      case 2:
        let removido = pessoas.shift()
        console.log(
          "A pessoa a seguir foi removida da lista: ",
          exibirDados(removido)
        )
        break
      case 3:
        console.log("Programa encerrado.")
        running = false
        break
      default:
        console.log("Digite uma escolha válida.")
        break
    }

  }
}


// Função auxiliar que coleta e valida os dados da pessoa
function dadosPessoa(objeto) {
    // Solicita o nome e remove espaços extras com trim()
    objeto.nome = prompt('Digite o nome da pessoa: ').trim();
    
    // Solicita a idade, converte para número inteiro
    objeto.idade = parseInt(prompt('Digite a idade da pessoa: ').trim(), 10);

    // Loop que continua enquanto a idade for inválida:
    // - isNaN: verifica se não é um número
    // - < 18: rejeita menores de 18 anos
    // - > 100: rejeita maiores de 100 anos
    while (isNaN(objeto.idade) || objeto.idade < 18 || objeto.idade > 100) {
        // Alerta o usuário sobre o erro e especifica o intervalo aceitável
        alert('Idade inválida! Digite uma idade entre 18 e 100.');
        // Solicita novamente a idade até que seja válida
        objeto.idade = parseInt(prompt('Digite a idade da pessoa: ').trim(), 10);
    }

    // Solicita a cidade e remove espaços extras
    objeto.cidade = prompt('Digite a cidade da pessoa:').trim();
}

// Função que exibe os dados da pessoa no console
function exibirDados(objeto) {
    // Exibe o nome da pessoa com uma string descritiva
    console.log('O nome da pessoa: ', objeto.nome);
    // Exibe a idade da pessoa
    console.log('A idade da pessoa: ', objeto.idade);
    // Exibe a cidade da pessoa
    console.log('A cidade da pessoa: ', objeto.cidade);
}


let pessoa1 = escolherAcao()
exibirDados(pessoa1)

