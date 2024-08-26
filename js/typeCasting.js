// Type Casting ou Coerção de Tipo, em js é o processo de converter um tipo de dado em outro

//Type Conversion VS Type Coercion
// Conversão de Tipo é quando de maneira manual o programador faz a conversão de um tipo de dado para outro

let um = 1
let dois = "2"
console.log(typeof um ) //Number
console.log(typeof dois) //String

// Coerção Explicita, é quando o programador faz a conversão do tipo do dado
console.log(typeof String(um))
console.log(typeof Number(dois))

// Coerção Implicita no javaScript existe a coerção implicita, que é a conversão de dados feito pelo proprio javaScript, no caso ele faz essa coerção para determinadas operações como por exemplo tentar multiplicar uma string com um numero, se o valor da string for um numero o java script faz essa coerção automaticamente

let concatenaString = "5" +3
//Soma com Strings: Quando você usa o operador + com uma string, o JavaScript converte o outro operando para uma string e concatena os dois valores.
let somaString = "5" *2
//Subtração, Multiplicação, Divisão: Para operadores como -, *, /, o JavaScript tenta converter as strings em números antes de realizar a operação.
console.log(concatenaString) //53
console.log(somaString) //10