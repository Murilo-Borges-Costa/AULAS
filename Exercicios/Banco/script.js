var valor = 500
var senha1 = 7
var resultado = 500
var repeticao = "s"
while(repeticao=="s"){
while (senha1!=senha){
    var senha = prompt("Digite a sua senha: 'A senha só tem um digito'")
}
var fazer = prompt("Seu saldo é de "+ resultado +". Você deseja sacar ou depositar? 'Escreva 's' para sacar e 'd' para depositar 'tudo minusculo'")
if(fazer=="s"){
    var sacar = prompt("Quanto deseja sacar? ")
   var resultado = Number(valor)-Number(sacar)
}
else{
    var depositar = prompt("Quanto deseja sadepositar? ")
    var resultado = Number(valor)+Number(depositar)
}
alert("Seu saldo é: " + resultado)
var repeticao = prompt("Você deseja efetuar outra operação bancaria? 's' para sim e 'n' para não 'tudo minusculo'")
}