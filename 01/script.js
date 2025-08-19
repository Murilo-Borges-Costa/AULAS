console.log("Usando Java Script pela primeira vez!")
//Comentario de só uma coisa
/*
comentário
em
varias
linhas
*/
//Cria uma janela de alerta
alert("Olá, Murilo")
//var cria uma variavel
var nome = "Murilo B. Costa"
console.log("Murilo B. Costa")
console.log("O meu nome é " + nome)
//Cadeia=String
var texto = ("Flamengo")
//typeof descobre o tipo da variavel
console.log( typeof (texto))
//inteiro= number, int
var numero = 1981
console.log( typeof (numero))

//inteiro= number, float
var quebrado = 1.9
console.log( typeof (quebrado))

//logico= bool
var VouF = true
console.log( typeof (VouF))

//Valor nulo
var nulo = null
console.log( typeof (nulo))

//Variável sem valor iniciado
var indefinido = undefined
console.log( typeof (indefinido))

/*Operadores aritimetricos
+, -, *, /, %
*/
var a = 3
var b = 10
console.log("A subtração é: ", b-a)
console.log("A soma é: ", b+a)
console.log("A multiplicação é: ", b*a)
console.log("A divisão é: ", b/a)
console.log("O modulo é: ", b%a)
/*Operadores lógicos,
e, ou, ! = não
&&, ||, not
*/
var verdade = true
var mentira = false
//Comparação com E
console.log(verdade && mentira);
//Comparação com OU
console.log(verdade || mentira);
//Comparação com negação
console.log(verdade && !mentira);

//Operadores Relacionais
//>, <, >=, <=, ==, !=, ===, !===
var v1 = 7
var v2 = 15
var v3 = "7"
console.log(v1>v2)
console.log(v1<v2)
console.log(v1>=v2)
console.log(v1<=v2)
console.log(v1==v2)
console.log(v1!=v2)
console.log(v1==v3)//Compara só o valor
console.log(v1===v3)//Compara valor e tipo
console.log(v1!==v3)//Compara valor e tipo

var numero1 = prompt("Digite um número: ")
var numero2 = prompt("Digite outro número: ")
var resultado1 = Number(numero1) + Number(numero2)
console.log("A soma dos dois números é: ", resultado1);
alert("O resultado é: " + resultado1)