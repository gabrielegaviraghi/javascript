function contar(){
    let res = document.getElementById('res')
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ 
        res.innerHTML = 'Impossivel contar!'
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if(passo <= 0){     
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1;
        }
        if(i < f){
            for(let contador = i; contador <= f; contador += p){
                res.innerHTML += `${contador} `
        }
        }else{
            for(let contador = i; contador >= f; contador -= p){
                res.innerHTML += `${contador} `
            }
        }
    }
}