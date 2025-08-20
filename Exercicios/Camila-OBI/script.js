var idade1 = prompt("Digite a primeira idade: ")
var idade2 = prompt("Digite a segunda idade: ")
if(idade1<=17){
    var pagar1 = 15
    alert("A primeira pessoa vai pagar: 15");
}
else if(idade>=18 && idade1<60){
    var pagar1 = 30
    alert("A primeira pessoa vai pagar: 30");
}
else{
    var pagar1=20
    alert("A primeira pessoa vai pagar: 20");
}


if(idade2<=17){
    var pagar2 = 15
    alert("A segunda pessoa vai pagar: 15");
}
else if(idade2>=18 && idade1<60){
    var pagar2=30
    alert("A segunda pessoa vai pagar: 30");
}
else{
    var pagar2= 20
    alert("A segunda pessoa vai pagar: 20");
}
var pagar = Number(pagar1) + Number(pagar2)
alert("O Valor total a ser pago é: " + pagar)