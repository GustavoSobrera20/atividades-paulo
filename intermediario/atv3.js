//6-Faça um programa que leia a nota de um aluno e informe se ele esta aprovado(nota maior ou igual a 7), em recuperaçao(nota entre 5 e 7) ou reprovado(menor que 5)

nota = 4
 
if (nota >= 7){
    console.log('Está aprovado')
}
else if (nota >= 5 && nota < 7){
    console.log('Está recupeção')
}
else if (nota >= 0 && nota <= 4){
    console.log('Esta reprovdo')
}