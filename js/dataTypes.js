//DataTypes
//Primitive Types é basicamente os tipos de dados que são armazenados e representados

//string é o tipo texto, que armazena um conjunto de Caracteres
var stringType = "é o tipo texto";

//undefined armazena um valor indefinido
var undefinedType = undefined;

//number armazena um valor numérico
var numberType = 1234567;

//boolean armazena dois estados possiveis, verdadeiro ou falso
var booleanTypeTrue = true;
var booleanTypeFalse = false;

//bigint é um tipo de dado que permite representar números inteiros maiores do que o limite dos números inteiros suportados pelo tipo number que é baseado no padrão IEEE 754 de 64 bits, para declarar como um big int basta adicionar o "n" no final do numero, tambem é possivel usar uma função "BigInt("string de numeros")" que recebe um string de numeros e torna eles um bigint ou recebe uma variável e a torna um BigInt, Ao usar BigInt, você pode trabalhar com números inteiros de qualquer tamanho, sem se preocupar com a perda de precisão.

var bigintType = 12345678901234567890n;
var bigintType2 = BigInt("12345678901234567890");

//null retorna um objeto com valor nulo
var nullType = null;

//function é um conjunto de tarefas que podem ou não receber parametros e retornam ou não valores
function comparacao(numero1, numero2) {
  if (numero1 > numero2) {
    return `o numero ${numero1} é maior que o numero ${numero2} o resultado da subtração deles é ${
      numero1 - numero2
    }`;
  } else {
    return `o numero ${numero2} é maior que o numero ${numero1} o resultado da subtração deles é ${
      numero2 - numero1
    }`;
  }
}
//console.log(comparacao(10, 9));

//Symbol é um tipo de dado primitivo unico e imutável, cada Symbol() recebe uma descrição que é passada dentro dos () e mesmo que tenham dois Symbol() com a mesma descrição eles terão valores diferentes, basicamente é usado para não correr o risco de dados serem sobrescritos já que cada Symbol() é unico
const symbolType = Symbol("teste");
const symbolType2 = Symbol("teste");

//console.log(symbolType === symbolType2); false

//Objeto é uma estrutura usada para armazenar dados e funcionalidades de forma organizada são compostos por pares de chave-valor, onde a chave é uma string (ou símbolo) que serve como identificador e o valor pode ser de qualquer tipo, incluindo outros objetos
let pessoa = {
  nome: "Leonardo",
  sobrenome: "Raposo Boechat",
  idade: 23,
  profissão: Symbol("Programador"),
  falar(fala) {
    return console.log(fala);
  },
};

//typeOf O operador JavaScript é usado para determinar o tipo de uma variável ou expressão. Ele retorna uma string que indica o tipo de dado da expressão avaliada. É uma ferramenta útil para depuração e validação de tipos em JavaScript.

console.log(typeof 1); //number
console.log(typeof 12345678901234567890n); //bigint
console.log(typeof "leo"); //string
console.log(typeof { leo: "leo" }); //object
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object () Este é um comportamento antigo do JavaScript devido à forma como null foi originalmente representado na linguagem. Isso é considerado um "bug" mas foi mantido por compatibilidade.
console.log(typeof function () {}); //function
console.log(typeof Symbol("leo")); //symbol

//Exemplo de uso para o operador typeOf é usar ele para verificar o tipo de dado antes de processar ele

function verificarTipo(valor) {
  if (typeof valor == "string") {
    //se o valor for uma string a função retorna uma mensagem "olá" + o valor inserido
    console.log(`olá ${valor}`);
  } else {
    console.log(`O valor inserido não é um texto`);
    //se o valor for uma string a função retorna uma mensagem informando que o valor inserido não é o esperado
  }
}

