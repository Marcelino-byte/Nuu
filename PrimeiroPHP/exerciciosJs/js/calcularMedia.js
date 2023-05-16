let nota1 = document.querySelector('#nota1');
let nota2 = document.querySelector('#nota2');
let xresultado = document.querySelector('#resultado');
let calcular1 = document.querySelector('#calcular');
let limpar1 = document.querySelector('#limpar');
let aprovacao = document.querySelector('#aprovacao');
const calcular =(nota1 , nota2)=> {
     let x = parseFloat(nota1.value)
     let y = parseFloat(nota2.value)
    return (x+y)
    console.log('nota1 ' + x)
    console.log('nota2 ' + y)
    console.log('resultado ' + resultado)
}
/*const limpar =()=> {
    nota1 = ''
    nota2 = ''
    resultado = ''
    // aprovação = 'aguardando notas'
}

*/

calcular1.addEventListener('click',function(e){
    let x = nota1.value
    let y = nota2.value
    resultado = ((x + y)/2).toFixed(1)
   e.preventDefault
}
)
limpar1.addEventListener('click',function(e){
    nota1 = ''
    nota2 = ''
    resultado = ''
})
if (resultado.value > 7) {
    aprovacao.textContent = 'Aprovado!'
    // mudança de cor
}
else if(resultado.value < 7) {
    aprovacao.textContent = 'Reprovado!'

}
else {
    aprovacao.textContent = 'Aguardando notas...'
}















