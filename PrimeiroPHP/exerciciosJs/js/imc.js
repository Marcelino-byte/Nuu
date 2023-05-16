let cxFormulario = document.querySelector('#formulario')
let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxAltura = document.querySelector('#altura')
let cxPeso = document.querySelector('#peso')
let cxApagar = document.querySelector('#apagar')
let cxCalcular = document.querySelector('#calcular')
let dados = document.querySelectorAll('.pessoa')
let aviso = document.querySelector('#aviso')
let cxImc = document.querySelector('#imc')
cxCalcular.addEventListener('click',function(e){
    let nome = cxNome.value
    let idade = cxIdade.value
    let altura = cxAltura.value
    let peso = cxPeso.value
    let imc= (peso / (altura * altura)).toFixed(1)
    cxImc.value = imc
    let pessoa = {
        nome : nome ,
        idade : idade ,
        altura : altura ,
        peso : peso ,
        imc : imc ,
    }
    console.log(pessoa)
    dados[1].textContent = pessoa.nome
    dados[2].textContent = pessoa.idade + " anos"
    dados[3].textContent = pessoa.peso + " Kg"
    dados[4].textContent = pessoa.altura + " m"
    dados[5].textContent = pessoa.imc 

    // previnir o comportamento padrao
    e.preventDefault()

})
cxApagar.addEventListener('click',function(e){
    cxNome.value = ''
    cxIdade.value = ''
    cxAltura.value = ''
    cxPeso.value = ''

})