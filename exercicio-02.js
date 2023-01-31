/**
 * Faça um programa que receba o nome e idade do usuário e retorne:
 * - o nome do usuário;
 * - se ele é menor ou maior de idade;
*/
var nome = prompt("Digite seu nome");
var idade = prompt("Digite sua idade");
var maiorDeIdade = "maior de idade";    
var menorDeIdade = "menor de idade";    
var maiorOuNao;                         

if (parseInt(idade) >= 18){          
    maiorOuNao = maiorDeIdade;         
}
else {
    maiorOuNao = menorDeIdade;          
}

alert('Eu ' +nome+ ', tenho ' +idade+ ' anos e sou ' +(idade >= 18 ? 'maior de idade' : 'menor de idade'));