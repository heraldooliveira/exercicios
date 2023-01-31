/**
 * faça um algoritmo que receba um número entre 1 e 21 e retorne o fatorial
 * 
*/

var fatorial = parseInt(prompt("Digite o valor a da fatorial"));
var resultado = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}
alert(resultado);