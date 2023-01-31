/**
 * De acordo com o exercício anterior (calcular média da nota), valide e retorne a situação do aluno:
 * - se a média for <= 1, retorne “Aluno reprovado”;
 * - se a média for >= 2 e <= 4, retorne “Aluno em recuperação”;
 * - se a média for >= 5 e <= 7, retorne “Aluno aprovado”;
 * - se a média for > 7, retorne “Aluno aprovado com ótimo aproveitamento”;
*/



   var media
   var n1
   var n2
   var n3

   n1 = prompt('informe primeira nota')
   parseFloat(n1)

   n2 = prompt('informe segunda nota')
   parseFloat(n2)

  n3 = prompt('informe terceira nota')
  parseFloat(n3)
  
    media = (parseFloat (n1) + parseFloat(n2) + parseFloat (n3))/3

    if (media <=1 ){
                    alert ("Aluno Reprovado")}

    else if (media >= 2 && media <= 4 ){
                   alert('Aluno em Recuperação')}

    else if (media >= 5 && media <= 7 ){
                 alert('Aluno Aprovado')} 


    else if (media > 7 ){
                 alert('Aluno Aprovado com Ótimo Aproveitamento' + media)} 

      
