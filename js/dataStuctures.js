//Data structures 

//Arrays Arrays são coleções ordenadas de elementos que podem ser de qualquer tipo
//Métodos comuns
let array = [1,2,3,4,5,6,7]
array.push(8) // adiciona elementos ao final do array
console.log(array)
console.log( array.pop() ) // remove e retorna o último elemento do array
console.log(array)
console.log(array.shift())// remove e retorna o primeiro elemento do array
console.log(array)
array.unshift(1)//adiciona elementos ao início do array
console.log(array)
let doubled = array.map(num => num -1) //cria um novo array aplicando uma finção a cada elemento do array original
//sintaxe let newArray = array.map(callback(currentValue, index, array));
console.log(doubled)
// filter()
// let newArray = array.filter(callback(currentValue, index, array))
//filter() cria um novo array contendo todos os elementos do array original que passam em um teste especificado pela função de callback. Se a função de callback retornar true, o elemento é incluído no novo array; caso contrário, ele é excluído.
let n = [1,2,3,4,5,6]
let eventNumbers = n.filter(num => num % 2 === 0);
console.log(eventNumbers)
//reduce()
//let result = array.reduce(callback(accumulator, currentValue, index, array))
//aplica uma função de callback a um acumulador e a cada elemento do array (da esquerda para a direita), reduzindo o array a um único valor. O valor inicial do acumulador pode ser fornecido como um segundo argumento; se não for fornecido, o primeiro elemento do array é usado como valor inicial e a iteração começa a partir do segundo elemento.
let numbers = [1,2,3,4]
let operation = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(operation); //10
//EXTRA
//Fatorial de 5! = 5*4*3*2*1
let fatNum = 5
function arraySequencial(num){
    let ordenado =[]
    for(let i = 1; i<=num; i++){
        ordenado.push(i)
    }
    return ordenado.reduce((accumulator, currentValue)=> accumulator * currentValue)
}
let resultado = arraySequencial(fatNum)
console.log(resultado)
//FINAL DO EXTRA

//Objects
//Objetos são coleções de pares chave-valor. As chaves são strings ou Symbols, e os valores podem ser de qualquer tipo.

let pessoa = { 
    nome:"Leonardo",
    sobrenome: "Raposo Boechat", 
    dataNascimento: '2001-04-11',
    profissao: "Programador",
    get idade(){
        const  dataNascimento = new Date(this.dataNascimento);
        const  dataAtual = new Date();
        let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

        const mesNascimento = dataNascimento.getMonth();
        const mesAtual = dataAtual.getMonth();
        const diaNascimento = dataNascimento.getDate();
        const diaAtual = dataAtual.getDate();
        
        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }
        
        return idade;
    },
    
}
console.log(pessoa)
//Métodos Comuns,
//Object.keys(): Retorna um array contendo as chaves do objeto.
console.log(Object.keys(pessoa))
//Object.values(): Retorna um array com os valores do objeto.
console.log(Object.values(pessoa))
//Object.entries(): Retorna um array de pares [key, value].
console.log(Object.entries(pessoa))