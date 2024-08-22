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