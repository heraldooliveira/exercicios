/**
 * faça um código que calcule a porcentagem de um número e retorne o valor encontrado:
 * o código deve:
 * - receber o valor total;
 * - receber a porcentagem (de 1 a 100);
 * - retornar o valor calculado;
*/



var total = parseInt(prompt("Digite o valor Total?"));
var porcentagem = parseInt(prompt("Digite a porcentagem que deseja calcular"));
while (porcentagem > 100 || porcentagem < 1) {
    alert("Porcentagem deve estar entre 1 e 100");
    porcentagem = parseInt(prompt("Digite novamente a porcentagem"));
}
porcentagem = porcentagem / 100;
total = total * porcentagem;
alert("Valor calculado: " + total);