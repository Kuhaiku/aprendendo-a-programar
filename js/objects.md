# Construção de Objetos em JavaScript

## Objeto Literal

A forma mais comum e direta de criar um objeto. Usado na maioria dos casos, especialmente quando você deseja definir propriedades do objeto de forma imediata. A sintaxe é mais curta, mais clara e fácil de entender, sendo amplamente utilizada na maioria dos códigos JavaScript modernos.

```javascript
let pessoa = {
  nome: "Leonardo",
  idade: 23,
  genero: "masculino",
};
```

## Usando a Função `Object()`

Pode ser utilizado quando se trabalha com construção dinâmica de objetos ou em alguns padrões de programação onde o construtor `Object` é necessário.

### Criando um Objeto Vazio

```javascript
let pessoa1 = new Object();
```

A função `Object()` é um construtor que cria um novo objeto.

### Construtor `new Object()`

Este método pode ser menos conveniente e geralmente é utilizado em casos específicos, como a criação de um objeto a partir de um protótipo ou quando a criação do objeto precisa ser feita dinamicamente. No entanto, para a criação de objetos comuns, sua utilização é considerada desnecessária e mais verbosa.

```javascript
let pessoa2 = new Object();
pessoa2.nome = "Leonardo";
pessoa2.idade = 23;
pessoa2.genero = "masculino";
```

### Criando um Objeto com Propriedades Já Definidas

```javascript
let pessoa3 = new Object({
  nome: "Leonardo",
  idade: 23,
  falar: function (texto) {
    console.log(texto);
  },
});
```

Isso é equivalente a:

```javascript
let obj = { chave: valor };
let obj = new Object({ chave: valor });
```

### Usando `Object.create()` para Criar um Novo Objeto a partir de um Protótipo

```javascript
let leonardo = Object.create(pessoa);
```

O objeto `leonardo` recebe as características do objeto `pessoa`. Se a propriedade do "pai" for modificada, as alterações serão refletidas nos "filhos".

## Função Construtora

Uma maneira mais estruturada de criar objetos, especialmente útil quando você precisa criar vários objetos semelhantes.

```javascript
function objPessoa(nome, idade, profissao) {
  this.nome = nome;
  this.idade = idade;
  this.profissao = profissao;
}
```

Exemplo de uso:

```javascript
const leonardo2 = new objPessoa("Leonardo", 23, "Programador");
console.log(leonardo2);
```

## Classes

Uma sintaxe moderna que facilita a criação de objetos construtores.

### Quando Usar Classes

- **Modelagem de Objetos Complexos**: Se você precisa criar objetos com várias propriedades e métodos, e espera instanciar múltiplos objetos com a mesma estrutura, classes são uma boa escolha.
- **Herança e Reutilização de Código**: Quando há necessidade de herança, classes tornam esse processo mais simples e organizado.

```javascript
class pessoaObj {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}
const leonardo3 = new pessoaObj("Leonardo", 23, "Programador");
console.log(leonardo3);
```

## Manipulação de Propriedades de Objetos

### Chaves `{}`

Definição literal de objetos.

### Colchetes `[]`

Acesso e definição dinâmica de propriedades.

### Ponto `.`

Acesso e definição direta de propriedades.

### Parênteses `()`

Invocação de métodos.

### Dois-Pontos `:`

Definição de propriedades em objetos literais.

### Vírgula `,`

Separação de propriedades em objetos literais.

### Operador Spread `...`

Cópia e extensão de objetos. O operador `...` permite copiar todas as propriedades de um objeto para outro ou adicionar novas propriedades enquanto copia as existentes.

### `delete`

Remoção de propriedades de um objeto. A palavra-chave `delete` é usada para remover uma propriedade de um objeto.

### `in`

Verificação de propriedade em um objeto. O operador `in` verifica se uma propriedade existe dentro de um objeto.

### `for...in`

Iteração sobre propriedades de um objeto. O loop `for...in` é usado para iterar sobre todas as propriedades enumeráveis de um objeto.

### `Object.keys()`

Obtenção de um array com as chaves de um objeto.

```javascript
Object.keys(obj);
```

### `Object.values()`

Obtenção de um array com os valores das propriedades de um objeto.

```javascript
Object.values(obj);
```

### `Object.entries()`

Obtenção de um array de pares `[chave, valor]`.

```javascript
Object.entries(obj);
```

### `Object.assign()`

Cópia de propriedades de um ou mais objetos.

```javascript
Object.assign(target, ...sources);
```

### Desestruturação `{ ... }`

Extração de propriedades de um objeto.

### Operador `?.` (Encadeamento Opcional)

Permite acessar propriedades de um objeto sem causar um erro se a propriedade ou o objeto não existir.

### Operador `typeof`

Verificação do tipo de um objeto.

### Operador `instanceof`

Verificação do protótipo de um objeto.

### `Object.getOwnPropertyDescriptor()`

Descritor de propriedades.

### `Object.defineProperty()`

Definir ou modificar propriedades de um objeto.

### `Object.defineProperties()`

Definir múltiplas propriedades de um objeto.

### `Object.preventExtensions()`

Prevenir adição de novas propriedades em um objeto.

### `Object.seal()`

Selar um objeto, prevenindo a adição ou remoção de propriedades.

### `Object.freeze()`

Congelar um objeto, prevenindo qualquer adição, remoção ou modificação de propriedades.

### `Object.isFrozen()`

Verificar se um objeto está congelado.

### `Object.isSealed()`

Verificar se um objeto está selado.

### `Object.isExtensible()`

Verificar se um objeto é extensível.

### `Object.getPrototypeOf()`

Obter o protótipo de um objeto.

### `Object.setPrototypeOf()`

Definir o protótipo de um objeto.

```javascript
Object.setPrototypeOf(pessoa, novoProto);
```
