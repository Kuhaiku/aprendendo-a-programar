//Estruturas de Controle são aquelas que direcionam o fluxo do código

//if é uma estrutura de fluxo que executa um bloco de código a partir do momento que a condição for verdadeira
var se = true
if(se == true){
    console.log(se)
}
//else é a parte da negativa da estrutura if, ela executa caso o if retorne "falso" para a condição descrita
se = false
if(se == true){
}else{
    console.log(se)
}
//else if é uma estrutura que deriva do conceito if else, que vai permitir que sejam verificadas mais condições dentro da estrutura if
se = false
if (se == true){
    console.log(se)
}else if(se =="a"){
    console.log(se)
}else{
    console.log(se)
}

//switch case: Permite executar diferentes blocos de código com base no valor de uma variável, O `switch` avalia uma expressão e executa o código correspondente ao caso (`case`) que corresponde ao valor da expressão, usando `break` para sair.

let dia = 2
let diaSemana
switch(dia){
    case 1:
        diaSemana = "Domingo"
        console.log(diaSemana)
        break;
    case 2:
        diaSemana = "Segunda-feira"
        console.log(diaSemana)

        break
    default:
        diaSemana = "Dia invalido"
}

// Estruturas de Repetição (Loops)
// for, O loop for é usado quando você sabe quantas vezes deseja repetir um bloco de código.

for (let i = 0; i <=10;i++){
    console.log(i)
}

// While executa um bloco de código enquanto uma condição for verdadeira

let i = 0
while (i <= 5){
    console.log(i)
    i++
}

//do...while Loop Similar ao while, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição for falsa desde o início.

let i2 = 0
do{
    console.log(i2)
    i2++
}while(i<5)

//for...of Loop Itera sobre elementos de um objeto iterável, como arrays ou strings.
//Elemento (valor): A cada iteração, é atribuído ao próximo valor do iterável.
//Iterável (lista): O objeto a ser percorrido.

let lista = [10,20,30,40,50]
for (let valor of lista){
    console.log(valor)
}

//for...in Loop Itera sobre as propriedades enumeráveis de um objeto
//Propriedade (chave): A cada iteração, contém o nome de uma propriedade do objeto.
//Objeto (objeto2): O objeto cujas propriedades estão sendo iteradas.
let objeto2= {a:1,b:2,c:3}
for (let chave in objeto2){
    console.log(chave)
}
