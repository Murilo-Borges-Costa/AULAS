function maioroumenor(valor1, valor2){
if (valor1>valor2){
    alert("O primeiro valor é maior que o segundo")
}
else if(valor1<valor2){
    alert("O segundo valor é maior que o primeiro")
}
else{
    alert("Os valores são iguais")
}
}
var valor11 = prompt("Digite o primeiro valor: ")
var valor22 = prompt("Digite o segundo valor: ")
maioroumenor(Number(valor11), Number(valor22))
