/*Exercício 3: Criando uma Função que Usa um Objeto como Parâmetro
Descrição:
Crie uma função chamada exibirDadosCarro() que recebe um objeto como parâmetro. Esse objeto deve conter as seguintes propriedades:

marca (string)
modelo (string)
ano (número)
cor (string)
A função deve exibir as informações do carro no console de maneira organizada.

Requisitos:

A função deve aceitar um objeto como argumento.
Deve exibir as informações do carro de forma organizada.
Teste a função passando um objeto de exemplo. */

function exibirDadosCarro(objeto) {
    console.log(`Marca: ${objeto.marca}`);
    console.log(`Modelo: ${objeto.modelo}`);
    console.log(`Ano: ${objeto.ano}`);
    console.log(`Cor: ${objeto.cor}`);
}

const carro = {
    marca: "Toyota",
    modelo: "Corola",
    ano: 2020,
    cor: "preta"
}

exibirDadosCarro(carro)