//Vetor = Array
var alunos = ["CR7", "Neymar", "Mel", "Bambam"]
//Mostra uma posição específica do array
console.log(alunos[2]);
//Mostra todos os elementos do array
console.log(alunos);
//Trocar um valor
alunos[3] = "Tiririca"

var aleatorio = ["Ola", "Computador", 5, 18, "camuflagem", 46, "F"]
for (var i = 0; i < 7; i++) {
    console.log(aleatorio[i]);
}
for (var i = 0; i < aleatorio.length; i++) {
    console.log(aleatorio[i]);
}
//Array de times
var times = ["Real Madrid", "Flamengo", "Milan", "Santa Cruz"]
//Index = número da caixa no array
for (var index in times) {
    console.log(index); //Mostrar o número da caixinha que descobriu.
    console.log(times[index]); //Mostra o valor que tem dentro da caixa
}
//Manipulando arrays
var frutas = ["Maça", "Uva", "Pêra"]
console.log(frutas);
//push - adiciona um valor no final do array
frutas.push("Mamão")
console.log(frutas);
//pop - tira o ultimo valor e retorna ele
var frutaTiradas = frutas.pop()
console.log(frutaTiradas);
//shift - tira o primeiro valor e retorna ele
var primeiraFruta = frutas.shift()
console.log(primeiraFruta);
//unshift - adiciona um valor ou mais no inicio do array
var novaFruta = "Tomate"
frutas.unshift(novaFruta)
console.log(frutas);

//Arrays pra guardar as informações
var alunos = []
var notasA = []
var notasB = []
//Guardar as informções vindas do usúario
function cadastro() {
    for (var i = 0; i < 3; i++) {
        alunos[i] = prompt("Digite o nome do aluno: ")
        notasA[i] = Number(prompt("Digite a primeira nota do aluno: "))
        notasB[i] = Number(prompt("Digite a segunda nota do aluno: "))
    }
}
//Calcular media
function media(notas1, notas2) {
    let mediaCalculada = (notas1 * 0.4) + (notas2 * 0.6)
    return mediaCalculada
}
//Aprovado >= 7, recuperação < 7 e >=5, reprovado <5
function situacao(mediaFinal) {
    if (mediaFinal >= 7) {
        return "Aprovado"
    }

    else if (mediaFinal < 7 && mediaFinal >= 5) {
        return "De recuperação"
    }
    else {
        return "Reprovado"
    }
}
//Função que mostra os resultados
function mostraResultado() {
    for(var index in alunos){
        let notaPri = notasA[index] //Pega a primeira nota e guarda, vinda do array notasA
        let notaSeg = notasB[index] //Pega a segunda nota e guarda, vinda do array notasB
        let mediaAtual = media(notaPri, notaSeg) //Manda as notas pra função de media
        let status = situacao(mediaAtual) //Descobre a situaçâo de acordo com a media
        console.log("O aluno: ", alunos[index], "teve média de: ", mediaAtual);
        console.log("O status dele é de: ", status);
    }
}
cadastro()
mostraResultado()