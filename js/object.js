//construção de objetos

//Objeto literal: A forma mais comum e direta de criar um objeto.
//É usado na maioria dos casos, especialmente quando você deseja definir propriedades do objeto de forma imediata.
//É a maneira mais comum e recomendada para criar objetos simples. A sintaxe é mais curta, mais clara e mais fácil de entender. É amplamente utilizada na maioria dos códigos JavaScript modernos.
let pessoa = { nome: "Leonardo", idade: 23, genero: "masculino" };

//Usando a Função Object:
//Pode ser utilizado quando se trabalha com construção dinâmica de objetos, ou em alguns padrões de programação onde o construtor Object é necessário.

//criando um objeto vazio
let pessoa1 = new Object();
//A função object() é um construtor que cria um novo objeto
//Construtor new Object():
//Pode ser menos conveniente e geralmente é utilizado em casos específicos onde há necessidade de criar um objeto a partir de um protótipo ou quando a criação do objeto precisa ser feita dinamicamente. No entanto, para a criação de objetos comuns, sua utilização é considerada desnecessária e mais verbosa.

//Onde  let obj = new Object(); === // let obj= {}
let pessoa2 = new Object();
//atribuindo chaves e valores
pessoa.nome = "leonardo";
pessoa.idade = 23;
pessoa.genero = "masculino";

//Criando um Objeto com propriedades já definidas
let pessoa3 = new Object({
  nome: "leonardo",
  idade: 23,
  falar: function (texto) {
    console.log(texto);
  },
});
//Isso é equivalente a let obj = { chave: valor}  let obj =  new object({ chave: valor} )

//Usando o Object() para criar um novo objeto a partir de um protótipo
let leonardo = Object.create(pessoa);
// fazendo isso o objeto "Leonardo" recebe as caracteristicas como chaves e valores do objeto pessoa, a ideia é que um objeto criado a partir dessa função ele tenha todos as propriedades do objeto "pai" com isso se eu quiser modificar a propriedade do "pai" os filhos vão receber as mesmas alterações

//Função construtora:
//Uma maneira mais estruturada de criar objetos, especialmente quando você precisa criar vários objetos semelhantes.

function objPessoa(nome, idade, profissao) {
  this.nome = nome;
  this.idade = idade;
  this.profissao = profissao;
}
//const leonardo2 = new objPessoa("leonardo", 23, "programador")
//console.log(leonardo2)

//Classes Uma sintaxe moderna que facilita a criação de objetos construtores
//Quando Usar Classes Modelagem de Objetos Complexos: Se você precisa criar objetos com várias propriedades e métodos, e espera instanciar múltiplos objetos com a mesma estrutura, classes são uma boa escolha. Elas permitem definir um modelo claro que pode ser facilmente replicado.
//Herança e Reutilização de Código: Quando há necessidade de herança (ou seja, quando você tem uma hierarquia de objetos onde alguns objetos precisam herdar propriedades e métodos de outros), classes tornam esse processo mais simples e organizado.
class pessoaObj {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}
const leonardo3 = new pessoaObj("Leonardo", 23, "Programador");
//console.log(leonardo3)

// Em JavaScript, as diferentes formas de acesso e manipulação de propriedades de objetos utilizando {}, [], e ()

// Chaves {}  Definição Literal de Objetos

// Colchetes []  Acesso e Definição Dinâmica de Propriedades

// Ponto .  Acesso e Definição Direta de Propriedades

// Parênteses ()  Invocação de Métodos

// Dois-Pontos :  Definição de Propriedades em Objetos Literais

// Vírgula ,  Separação de Propriedades em Objetos Literais

// Operador Spread ...  Cópia e Extensão de Objetos O operador spread ... permite copiar todas as propriedades de um objeto para outro ou adicionar novas propriedades enquanto copia as existentes.

// delete  Remoção de Propriedades de um Objeto A palavra-chave delete é usada para remover uma propriedade de um objeto.

// in  Verificação de Propriedade em um Objeto O operador in verifica se uma propriedade existe dentro de um objeto.

// for...in - Iteração Sobre Propriedades de um Objeto O loop for...in é usado para iterar sobre todas as propriedades enumeráveis de um objeto.

//Object.keys() - Obtenção de um Array com as Chaves de um Objeto O método Object.keys(obj) retorna um array contendo todas as chaves (nomes das propriedades) de um objeto.

//Object.values() - Obtenção de um Array com os Valores das Propriedades O método Object.values(obj) retorna um array contendo todos os valores das propriedades de um objeto.

//Object.entries() - Obtenção de um Array de Pares [chave, valor] O método Object.entries(obj) retorna um array de arrays, onde cada sub-array é um par [chave, valor].

//Object.assign() - Cópia de Propriedades de Um ou Mais Objetos O método Object.assign(target, ...sources) copia todas as propriedades enumeráveis de um ou mais objetos de origem para um objeto de destino.

//Desestruturação { ... } - Extração de Propriedades de um Objeto A desestruturação é uma maneira conveniente de extrair propriedades de um objeto em variáveis separadas.

//Operador ?. (Encadeamento Opcional) O operador ?. permite acessar propriedades de um objeto sem causar um erro se a propriedade ou o objeto não existir.

//Operador typeof - Verificação do Tipo de um Objeto O operador typeof retorna uma string indicando o tipo de um operando. Quando usado em um objeto, ele retornará "object".

//Operador instanceof - Verificação do Protótipo de um Objeto O operador instanceof verifica se um objeto foi criado por um determinado construtor ou herda de um protótipo específico.

//Object.getOwnPropertyDescriptor() - Descritor de Propriedades Este método retorna o descritor de uma propriedade específica de um objeto, que contém detalhes como a capacidade de enumerar, configurar, ou gravar a propriedade.

//Object.defineProperty() - Definir ou Modificar Propriedades de um Objeto Permite definir ou modificar uma propriedade de um objeto e suas características (enumerabilidade, configurabilidade, etc.).

//Object.defineProperties() - Definir Múltiplas Propriedades Permite definir ou modificar múltiplas propriedades de um objeto de uma só vez.

// Object.preventExtensions() - Prevenir Adição de Novas Propriedades Este método impede que novas propriedades sejam adicionadas ao objeto, mas as existentes podem ser modificadas ou removidas.

// Object.seal() - Selar um Objeto Sela um objeto, prevenindo a adição ou remoção de propriedades, mas permite que as propriedades existentes sejam modificadas.

// Object.freeze() - Congelar um Objeto Congela um objeto, prevenindo qualquer adição, remoção ou modificação de propriedades.

//Object.isFrozen() - Verificar se um Objeto Está Congelado Este método verifica se um objeto foi congelado com Object.freeze().

//Object.isSealed() - Verificar se um Objeto Está Selado Este método verifica se um objeto foi selado com Object.seal().

//Object.isExtensible() - Verificar se um Objeto é Extensível Verifica se um objeto permite a adição de novas propriedades.

//Object.getPrototypeOf() - Obter o Protótipo de um Objeto Este método retorna o protótipo (objeto ao qual __proto__ aponta) de um objeto especificado.

//Object.setPrototypeOf() - Definir o Protótipo de um Objeto Permite definir explicitamente o protótipo de um objeto.
