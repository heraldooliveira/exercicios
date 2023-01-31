/**
 * Faça um programa que receba 3 número inteiros e retorne a média desses números.
 * 
 * OBS: para calcular a média some todos os números e divide pelo total de números.
*/
var valor1 = parseInt (prompt("Digite o primeiro Número"))
var valor2 = parseInt (prompt("Digite o segundo numero"))
var valor3 = parseInt (prompt("Digite o Terceiro Número"))
var total = 0;
var media = 0;

total = valor1 + valor2 + valor3;
media = total / 3;
alert ("Media:" + media)
