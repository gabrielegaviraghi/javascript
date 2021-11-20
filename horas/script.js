function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 6
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'imagens/manha.png'
        document.body.style.background = '#f8c998'

    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#9e695c'
        
    }else{
        //BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background = '#464646'
    }
}