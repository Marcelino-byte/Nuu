var cont = 1;
do{
cont += 1;
var numeros = [ 13 , 54, 22]
console.log(numeros)
var numero = prompt("Digite um numero que voce quer adicionar :")
numeros.push(numero)
console.log (numeros)
alert("A array de numeros é :"+ numeros)
}while (cont < 10);
alert(cont);        

