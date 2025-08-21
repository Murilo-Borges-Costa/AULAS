
/*console.log("BORA BIL!!");
//LAços de repetição

//PARA = FOR
for(var i = 0; i<5; i++){
    console.log("Ainda estou aqui!");
    console.log("Ainda estou aqui!");
}
console.log("Agora acabou!");

//ENQUANTO = while
var contagem
while (contagem < 10) {
    console.log("Estou repetindo infinitamente");
    contagem++
}

//FUNÇÂO
function bemVindo(){
    var nome = prompt("Digite seu nome: ")
    console.log("Óla, " + nome);
}

//Chamar a função
bemVindo()

//Funçao com parametro
function calcularIdade(idade) {
    alert("Sua idade é: " + idade)
}
calcularIdade(18)
calcularIdade(100)
*/
//Função com retorno
function soma(valor1,valor2) {
    let resultado = valor1+valor2

    return resultado
}
var valorSomado = soma(7,6)
console.log("A soma deu: ", valorSomado);
