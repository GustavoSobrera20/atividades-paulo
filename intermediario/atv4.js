//7-escreva um programa que leia dois numeros e uma operaçao(adiçao, sobtraçao, multiplicaçao e divisao) e realize a operação entre os dois numeros

numero_escohido1 = 12
numero_escolhido2 = 54
operacao = '*'
 
if (operacao == '+'){
    console.log('O valor da soma é')
    console.log(numero_escohido1 + numero_escolhido2)
}
 
else if (operacao == '-'){
    console.log('o valor da subtracao')
    console.log(numero_escohido1 - numero_escolhido2)
}
else if (operacao == '/'){
    console.log('o valor da divisao')
    console.log(numero_escohido1 / numero_escolhido2)
}
else if (operacao == '*'){
    console.log('o valor da multiplicacao')
    console.log(numero_escohido1 * numero_escolhido2)
}