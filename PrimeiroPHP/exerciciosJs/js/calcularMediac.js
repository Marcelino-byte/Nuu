let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimmpar = document.querySelector('#btnLimpar')
// caixas de texto
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxMedia = document.querySelector('#media')

let cxSituacao = document.querySelector('#situacao')

// calcular media

function calcularMedia(n1,n2) {
    return(n1+n2)/2
}
//Situacao final com base na media
function situacaoFinal (mediaFinal){
    let situacaoFinal =''
    if (mediaFinal >= 7) {
        situacaoFinal = 'Aprovado(a)'

    }else if (mediaFinal <= 3){
        situacaoFinal = 'Reprovado(a)'
    }else {
        situacaoFinal = 'Recuperação'
    }
    return situacaoFinal
}
// formatar a caixa de situacao final
function formatarSituacao(situacaoFinal){
    console.log('Situação Final'+ situacaoFinal)
    switch (situacaoFinal ) {
        case  'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            console.log('adicionar class aprovado')
            break;
        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('reprovado')
            console.log('adicionar class reprovado')
            break;
        case 'Recuperação':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao')
            console.log('adicionar class recuperacao')
            break;
    
        default:
            console.log('Situação Indefinida')
            break;
    }//fim do switcg case
}
// validar e gerar flash message

function validarNumero(numero){
    m1 = cxNota1.value 
    m2 = cxNota2.value 
    if (num1 < 0 || num1 > 10 ||num2 < 0 || num2 > 10){
        formulario.reset()//limpar form 
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alert')
        },2000 ) ;
        
    }

}

// calcular a media apos o click no botao

btnCalcular.addEventListener('click',function(e){
    console.log('Calcular media')
    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let media = calcularMedia(nota1,nota2)
    if (isNaN(media)|| media < 0){
        console.log("não é um numero")
        cxSituacao.value = ''
    }else{
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))

    }
    e.preventDefault()
})
btnLimmpar.addEventListener('click',function(){
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperado')
})















