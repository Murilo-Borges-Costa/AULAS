//interação com o usuario via pron
/*var nome = pront("Digite seu nome:")
alert("Seu nome é: " nome)
*/

//Condicionais
//Se, SENÃo SE, SENÃo
//IF, IF ELSE< ELSE
var estaViovo = true
if(estaViovo == true){
    console.log("Parabens, você esta vivo!")
}
else if(estaViovo == false){
    console.log("Parabens, você esta morto!");
}
else{
    console.log("Parabens, eu não sei como você esta!");
}
//Escolha/Caso
//switch/Case
/*
var Corcamisa = "Azul"
switch(Corcamisa){
    case Azul:
        console.log("Você precisa melhorar, mas você tem bom gosto");
    break
    case Amarela:
        console.log("Você precisa melhorar, você não tem bom gosto");
    break
    case Vermelho:
        console.log("Você precisa melhorar bastante");
    break
    default:
        console.log("Cor de camisa inválida");
}*/
var nota = prompt("Digite sua nota: ")
if(nota>6){
    alert("Você passou.");
}
else if(nota>=5 && nota<=6){
    alert("Você esta de recuperação");
}
else{
   alert("Você foi reprovado.");
}