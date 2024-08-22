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

