# Objetos Globais em JavaScript

Em JavaScript, **objetos globais** são aqueles que estão disponíveis **automaticamente** em qualquer parte do código, independentemente do escopo onde você estiver. Eles são parte da linguagem e estão sempre acessíveis, sem necessidade de criação ou importação.

## 1. `window` (em navegadores) ou `global` (em Node.js)
   - No contexto de um navegador, o objeto global é o **`window`**, que representa a janela ou aba do navegador. Todos os objetos e funções globais são propriedades do `window`.
   - No **Node.js**, o equivalente é o objeto **`global`**.

## 2. `console`
   - O objeto **`console`** é utilizado para exibir mensagens no console do navegador ou terminal. Ele é amplamente utilizado para depuração.
   - **Métodos principais**:
     - `console.log()`: Exibe mensagens no console.
     - `console.error()`: Exibe erros.
     - `console.warn()`: Exibe avisos.

## 3. `Math`
   - O objeto **`Math`** contém funções e constantes matemáticas.
   - **Métodos principais**:
     - `Math.random()`: Retorna um número pseudo-aleatório entre 0 e 1.
     - `Math.floor()`: Arredonda um número para baixo.
     - `Math.ceil()`: Arredonda um número para cima.
     - `Math.PI`: A constante PI (3.14159...).

## 4. `Date`
   - O objeto **`Date`** é usado para trabalhar com datas e horários.
   - **Métodos principais**:
     - `new Date()`: Cria um novo objeto de data com a data e hora atuais.
     - `Date.now()`: Retorna o timestamp (milissegundos desde 1 de janeiro de 1970).

## 5. `JSON`
   - O objeto **`JSON`** é utilizado para converter valores JavaScript para o formato **JSON** e vice-versa.
   - **Métodos principais**:
     - `JSON.stringify()`: Converte um valor JavaScript em uma string JSON.
     - `JSON.parse()`: Converte uma string JSON de volta para um objeto JavaScript.

## 6. `parseInt` e `parseFloat`
   - São funções globais usadas para converter strings em números.
   - **`parseInt()`**: Converte uma string para um número inteiro.
   - **`parseFloat()`**: Converte uma string para um número de ponto flutuante.

## 7. `isNaN`
   - A função **`isNaN()`** determina se um valor não é um número (NaN).
   - Exemplo:
     ```javascript
     isNaN("abc"); // true
     ```

## 8. `setTimeout` e `setInterval`
   - Essas funções são usadas para agendar a execução de código após um determinado período de tempo.
   - **`setTimeout()`**: Executa uma função uma vez após um atraso especificado.
   - **`setInterval()`**: Executa uma função repetidamente a cada intervalo de tempo especificado.

## 9. `clearTimeout` e `clearInterval`
   - **`clearTimeout()`**: Cancela uma execução agendada pelo `setTimeout()`.
   - **`clearInterval()`**: Cancela um intervalo repetido iniciado por `setInterval()`.

## 10. `encodeURIComponent` e `decodeURIComponent`
   - **`encodeURIComponent()`**: Codifica uma URI (endereço de site) para que possa ser usada de forma segura.
   - **`decodeURIComponent()`**: Decodifica uma URI previamente codificada.

## 11. `alert`, `confirm` e `prompt`
   - **`alert()`**: Exibe uma caixa de diálogo com uma mensagem.
   - **`confirm()`**: Exibe uma caixa de diálogo com "OK" e "Cancelar", retornando `true` ou `false`.
   - **`prompt()`**: Exibe uma caixa de diálogo para o usuário digitar algo, retornando o valor digitado.

## 12. `eval`
   - A função **`eval()`** executa um código JavaScript representado como uma string. Deve ser usada com cuidado, pois pode representar riscos de segurança.

## 13. `Number`, `String`, `Boolean`
   - Esses objetos são **construtores** para tipos de dados primitivos em JavaScript.
   - **`Number()`**: Converte um valor para número.
   - **`String()`**: Converte um valor para string.
   - **`Boolean()`**: Converte um valor para booleano (true/false).

## 14. `Object`
   - O objeto **`Object`** é o "pai" de todos os objetos em JavaScript e tem métodos importantes para manipulação de objetos.
   - **Métodos principais**:
     - `Object.keys()`: Retorna um array com as chaves de um objeto.
     - `Object.values()`: Retorna um array com os valores de um objeto.
     - `Object.assign()`: Copia propriedades de um objeto para outro.

## 15. `Array`
   - O objeto **`Array`** fornece métodos para trabalhar com arrays.
   - **Métodos principais**:
     - `Array.push()`: Adiciona um elemento ao final do array.
     - `Array.pop()`: Remove o último elemento do array.
     - `Array.map()`: Aplica uma função a cada elemento e retorna um novo array.
     - `Array.reduce()`: Reduz um array a um único valor.

---

## Lista de Objetos Globais Principais:

1. **`window`** (navegadores) / **`global`** (Node.js)
2. **`console`**
3. **`Math`**
4. **`Date`**
5. **`JSON`**
6. **`parseInt`**
7. **`parseFloat`**
8. **`isNaN`**
9. **`setTimeout`**
10. **`setInterval`**
11. **`clearTimeout`**
12. **`clearInterval`**
13. **`encodeURIComponent`**
14. **`decodeURIComponent`**
15. **`alert`**
16. **`confirm`**
17. **`prompt`**
18. **`eval`**
19. **`Number`**
20. **`String`**
21. **`Boolean`**
22. **`Object`**
23. **`Array`**

Esses são alguns dos objetos globais mais utilizados em JavaScript. Eles estão disponíveis em qualquer lugar no código e não precisam ser declarados antes de serem usados.
