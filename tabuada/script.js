function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){//verifica se tem número
        window.alert('Digite um número!')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //antes de começar a tabuada, limpo a área da tabuada
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}