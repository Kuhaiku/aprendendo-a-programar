//existem 3 formas de declarar as variáveis no javascript são elas:
var variavel1 =
  "esse tipo de declaração aceita ter seu valor alterado, é uma declaração de variável de escopo global ou de função";

let variavel2 =
  "esse tipo de declarção é o comumente utilizado para declarar variaveis que podem ter o seu valor alterado";

const VARIAVEL3 =
  "esse tipo de declaração é utilizada para informar que esse valor não pode ser alterado, ou seja é um valor constante";

//Regras para Nomes de Variáveis:
//Podem começar com Letra, Underscore (_) ou Dólar ($): var nome, var _nome, var $nome
//Podem Conter Letras, Números, Underscores (_) e Dólares ($):var nome1, var nome_completo, var $nomeCompleto
let nome, _nome, $nome;
nome = "leo";
_nome = "leo";
$nome = "leo";

//Não Podem Começar com Números: var 1nome é inválido.
//Não Podem Começar com Sinais: let -nome, let =nome, let +nome, let %nome, let *nome, let &nome, let !nome etc

//Não Podem Ser Palavras Reservadas: var, let, const, function, if, else, etc

//São Case-Sensitive: var Nome e var nome são variáveis diferentes.
var Nome = "leonardo";
console.log(nome + Nome);

//Legibilidade:
//nomes descritivos que indiquem claramente o propósito da variável
//var idade em vez de var i.

//Camel Case:
//É uma convenção comum em JavaScript onde o primeiro nome da variável começa com letra minúscula e cada palavra subsequente começa com letra maiúscula
var nomeCompleto;

//Constantes:
//Use UPPER_SNAKE_CASE para variáveis que são constantes e não devem ser alteradas
const VALOR_MAXIMO = 100;

//Evitar Abreviações Excessivas:
//Evitar abreviações que tornam o código menos claro
//var d não é tão claro quanto var dataDeNascimento

//Contexto:
//Nomear de acordo com o contexto em que são usadas para evitar ambiguidades
//var produto para uma variável que armazena um produto específico.

//Hoisting é um conceito que basicamente permite que eu (içe) ou seja chame funções e variaveis antes da declaração das mesmas

// ao chamar uma variavel do tipo "var" eu recebo apenas a declaração e não a sua inicialização, ou seja, o valor não é recebido e a variavel é entendida como "undefined"
console.log(Hoisting1);
var Hoisting1 = 10;

// ao chamar uma variavel do tipo let ou const elas são içadas mas não são acessadas, tentar acessar elas vai resultar em um erro de referencia (temporal dead zone)

//console.log(Hoisting2);
let Hoisting2 = 20;

//console.log(Hoisting3);
const HOSTING3 = 30;

// ao char uma função antes da inicialização da mesma a função é içada segue sua execução comumente
console.log(Hoistingfunction(10, 20));
function Hoistingfunction(x, y) {
  x, y;
  return x + y;
}

// mas isso não serve para funções do tipo anonimas(declaradas dentro de variáveis) acontece sendo var
//console.log(fucaoanonima(1, 2));
var fucaoanonima = function (x, y) {
  // no caso de let e const o erro será porque não é possivel acessar o valor da variável antes de sua inicialização
  console.log(
    "isso não funcionará e sera atribuido o erro de 'is not a function'"
  );
  return x + y;
};

//Escopo global, função, bloco

//basicamente é uma boneca russa, oque está global é acessivel de dentro da função ou do bloco e oque está dentro da função ou do bloco só acessivel dentro dele mesmo

//global
var escopoGlobal = "global";
console.log(escopoGlobal);

//função
function escopodaFuncao() {
  let escopoFuncao = "função";
  console.log(escopoFuncao);
}
escopodaFuncao();
//console.log(escopoFuncao); erro escopoFuncao não está definido

//bloco
if (true) {
  let escopoBloco = "bloco";
  console.log(escopoBloco);
}
//console.log(escopoBloco); erro escopoBloco não está definido

//quando tratamos de funções e blocos usamos o let ao invés do var, pois o var tem uma atribuição que faz com que ele seja global dentro do bloco ou função que ele foi usado deixando a variavel menos versátil, digamos que você tenha um contador para diferentes casos em um if ou uma função, se usar o "var" ele vai ser acessivel a partir de qualquer local do seu bloco exemplo:

function exemploVar() {
  for (var i = 0; i < 1; i++) {
    console.log("Dentro do bloco:", i); // Acessível dentro do bloco 'for'
  }
  console.log("Fora do bloco:", i); // Acessível fora do bloco 'for'
}
exemploVar();

//usando Let
function exemploLet() {
  for (let i = 0; i < 1; i++) {
    console.log("Dentro do bloco:", i); // Acessível dentro do bloco 'for'
  }
  // console.log('Fora do bloco:', i); // erro i não está definido
}
exemploLet();

//usando Const
if (true) {
  const mensagem = "Olá, mundo!";
  console.log("Dentro do bloco if:", mensagem);
}
//console.log("Fora do bloco if:", mensagem); // erro 'mensagem' não está definido
