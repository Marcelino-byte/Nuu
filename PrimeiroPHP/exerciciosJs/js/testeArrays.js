let sacolaDePalavras = ['Olando','Amora','Manga','Jacare']
const ultimasLetras =(palavras)=>{
    let ultLetras = []
    for (let i = 0; i < palavras.length; i++) {
        ultLetras.push(palavras[i].slice(-3));
        
    }
    let novapalavra = ultLetras.join('')
    
    return 'A ultimas letras das palavras '+palavras+' são :'+ ultLetras +'Nova palavra ' +novapalavra  //junte as palavras
}
const encontraMaiorPalavra = (palavras)=>{
    let maisLonga = ''
    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i].length;
        console.log('palavra'+''+palavra)
        console.log('palavras'+''+palavras[i])
        console.log('maisLonga'+''+maisLonga)
        if (palavra > maisLonga.length) {
            maisLonga = sacolaDePalavras[i]
            
        }

        
    }
    return 'A palavra mais longa é'+' '+maisLonga

}    
console.log ( ultimasLetras( sacolaDePalavras))

console.log ( encontraMaiorPalavra ( sacolaDePalavras))




