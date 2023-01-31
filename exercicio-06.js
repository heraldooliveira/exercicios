/**
 * faça um código que retorne o nome e cargo do trabalhador com maior salário, use o array de objetos abaixo
*/

const trabalhadores = [
	{
		nome: "José",
		salario_bruto: 3950.23,
		cargo: "Analista de sistemas jr",
	},
	{
		nome: "Maria",
		salario_bruto: 5900,
		cargo: "Analista de sistemas pleno",
	},
	{
		nome: "João",
		salario_bruto: 2500,
		cargo: "estagiário",
	},
	{
		nome: "Sérgio",
		salario_bruto: 3951.50,
		cargo: "Consultor financeiro",
	},
];

const Colaboradores = [{ nome: "Jose", salBruto: 3950.23, cargo: "Analista de sistemas junior" }, 
{ nome: "Maria", salBruto: 5900, cargo: "Analista de sistemas pleno" }, 
{ nome: "Joao", salBruto: 2500, cargo: "Estagiário" }, 
{ nome: "Sergio", salBruto: 3951.50, cargo: "Consultor financeiro" }];

var trabalhadorComMaiorSalario = { nome: "", salBruto: -1000, cargo: "" };

var contador = 0;

while (contador < 4) {
    if (Colaboradores[contador].salBruto > trabalhadorComMaiorSalario.salBruto) {

		trabalhadorComMaiorSalario = Colaboradores[contador];
		}
		contador = contador + 1;
	}
	
	alert("NOME DO TRABALHADOR COM MAIOR SALARIO: " + trabalhadorComMaiorSalario.nome);
	alert("cargo do trabalhador com maior salario: " + trabalhadorComMaiorSalario.cargo);