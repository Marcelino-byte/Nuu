function inserir ( num) {
    var numero = document.getElementById('resultado').innerHTML ;
    document.getElementById('resultado').innerHTML = numero + num;
    /*document.querySelector('#resultado').style.textAlign = 'right';*/
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML ;
    document.getElementById('resultado').innerHTML = eval(resultado);
    /*document.querySelector('#resultado').style.textAlign = 'right';*/
}

function limpar (){
    document.getElementById('resultado').innerHTML = '';
}






