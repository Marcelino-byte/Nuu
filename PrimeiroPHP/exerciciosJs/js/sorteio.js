let xChute = document.querySelector('#chute');
let xbtnChute = document.querySelector('#btnChute');

// Numero inteiro Aleatório
function inteiroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const resultado = (chute)=> {
    //Validação do numero inserido.
    console.log(chute);
    if (chute  < 0 || chute  > 10) {
        console.log('Digite o Numero Correto');
    
    
    } else {
        let numeroAleatorio = inteiroAleatorio(1,10);
        console.log(numeroAleatorio);
        if (chute == numeroAleatorio) {
            console.log('Acertou!!!');
        } else {
            console.log('Errou!!!');
        }
        
    }

}

//Acionando o evento
xbtnChute.addEventListener('click',function(e){
    let chute = xChute.value
    resultado(chute);

}
);