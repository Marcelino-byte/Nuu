
//Com duas barras criamos um comentário de linha em Javascript
//Comentários de mais de uma linha podem ser feitos dentro de /* */

var variavel;  //Declarando uma variável cujo nome é 'variavel'

variavel = 3 + 3; // Atribuindo valores e aplicando uma operação matemática em uma variável

/* Utilizando a função nativa 'alert' para exibir uma caixa de
diálogo na tela cujo conteúdo será o valor da variável 'variavel' */
alert(variavel); 

var resultadoMultiplicacao = multiplique(10, 50); // chamando a função 'multiplique' passando dois valores - 10 e 50

//Manipulando a Árvore DOM a fim de exibir, dentro da DIV declarada no HTML, o resultado da multiplicação juntamente com o seu texto inicial
var divLocal = document.getElementById('exibe_resultado');
/*
Neste ponto a variavel divLocal é um objeto que representa a div declarada no HTML.
Sendo um objeto é possível acessar seus atributos, como innerHTML, precedido do nome do objeto seguido de um '.'
*/
divLocal.innerHTML += resultadoMultiplicacao;

//Definição da função 'multiplique' que recebe dois parâmetros - numero1 e numero2
function multiplique(numero1, numero2){

    /*
    Declarando uma nova variável que guardará o resultado da operação de multiplicação;
    Iniciando a variável com o valor de 0.
    */
    var resultado = 0; 

    //Atribuindo à variável 'resultado' o valor resutante da multiplicação dos 2 parâmetros recebidos   
    resultado = numero1 * numero2;

    //Retornando (devolvendo) o valor da variável resultado
    return resultado;

}
var n1 = prompt("Insira o primeiro numero:")
var n2 = prompt("Insira o segundo numero :")
var rt = divisao(n1,n2)

function divisao (n1,n2){
    var r1 = 0 
    r1 = n1/n2
    return r1
}
alert("O resultado é: "+rt)

