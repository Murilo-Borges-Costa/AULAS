//MURILO
var senha = prompt("Digite a sua senha de quatro digitos: ")

for(var certo = 4321; certo!=senha; certo==senha){
    senha = prompt("Digite a senha correta: ")
    var i = 0
    i++
    if(i==2){
        console.log("O primeiro digito é a soma de 2+2");
    }
    else if(i==3){
        console.log("O segundo digito é a soma de 2+1");
    }
    else if(i==4){
        console.log("O terceiro digito é a soma de 1+1");
    }
    else if(i==5){
        console.log("O quarto digito é a soma de 0+1");
    }
}

/* CHAT GPT
var senha = prompt("Digite a sua senha de quatro dígitos: ");
var senhaCorreta = "4321";
var tentativas = 0;

while (senha !== senhaCorreta) {
    tentativas++;
    
    if (tentativas == 2) {
        console.log("O primeiro dígito é a soma de 2+2");
    } else if (tentativas == 3) {
        console.log("O segundo dígito é a soma de 2+1");
    } else if (tentativas == 4) {
        console.log("O terceiro dígito é a soma de 1+1");
    } else if (tentativas == 5) {
        console.log("O quarto dígito é a soma de 0+1");
    }

    senha = prompt("Senha incorreta, tente novamente: ");
}

console.log("Senha correta! Acesso liberado.");
*/