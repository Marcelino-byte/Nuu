var numeros = []
numeros[0] = soliciataNumero1()
numeros[1] = soliciataNumero2()

var resultadoDivisao = divisao(numeros)
alert("O resultado é :"+resultadoDivisao)
function soliciataNumero1(){
    var numero  = prompt("Insira o Primeiro numero :")
    if (numero < 0) {
        numero  = prompt("Numero negativo, por favor insira novamente :")
    }
    return numero
}
function soliciataNumero2(){
    var numero  = prompt("Insira o Segundo numero :")
    if (numero < 0) {
        numero  = prompt("Numero negativo, por favor insira novamente :")
    }
    return numero
}
function divisao(numeros){
    var resultado = numeros[0] / numeros[1]
    return resultado
}