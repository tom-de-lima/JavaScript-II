/* Exercício 3: Verificando Propriedades de um Objeto
Descrição:
Crie um objeto chamado carro com as seguintes propriedades:

marca (string)
modelo (string)
ano (número)
O programa deve verificar se a propriedade cor existe dentro do objeto. Caso não exista, adicione a propriedade cor com o valor "Preto". Em seguida, exiba o objeto atualizado no console.

Requisitos:

Utilize if e hasOwnProperty() para verificar a existência da propriedade.
Caso cor não exista, adicione dinamicamente.
Exiba o objeto antes e depois da verificação/modificação.*/

const carros = {
    marca: "jaguar",
    modelo: "eagle",
}

let confirmacao = carros.hasOwnProperty("cor")

if (!confirmacao) {
    carros.cor = "preto"
    console.log("Adicionada a propriedade 'cor' no objeto.")
}
else {
    console.log("A propriedade cor já existe no objeto")
}

console.log("Objeto atualizado:", carros)




/* O método hasOwnProperty() em JavaScript verifica se um objeto possui uma propriedade específica como sua própria propriedade, ou seja, sem considerar heranças da cadeia de protótipos.

📌 Sintaxe:

objeto.hasOwnProperty("propriedade")

-objeto → O objeto onde será feita a verificação.
-propriedade → Nome da propriedade que queremos verificar (como string).

Retorno: true se a propriedade existe no objeto; false caso contrário. */


