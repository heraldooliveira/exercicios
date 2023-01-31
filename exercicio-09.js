/**
 * faça um algoritmo que receba um número e retorne a tabuada desse número de acordo com o exemplo abaixo:
 * 
 * 1 x 1 = 1
 * 1 x 2 = 2
 * 1 x 3 = 3
 * 1 x 4 = 4
 * 1 x 5 = 5
 * 1 x 6 = 6
 * 1 x 7 = 7
 * 1 x 8 = 8
 * 1 x 9 = 9
 * 1 x 10 = 10
*/

var mT = parseInt(prompt("A tabuada de qual numero deseja ver?(preencha somente com o numero.)"));

var n = 1;

function mostra(frase) {
  document.write(frase);
};

while (n <= 10) {
  mostra(mT + " * " + n + " = " + mT * n + '<br><hr>'); // passa '<br><hr>' aqui para quebrar a linha
  n = n + 1;
};
