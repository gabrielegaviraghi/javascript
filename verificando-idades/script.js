function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                imagem.setAttribute('src', 'imagens/hbebe.png')
            }else if(idade < 21){
                //JOVEM
                imagem.setAttribute('src', 'imagens/hjovem.png')
            }else if(idade < 50){
                //ADULTO
                imagem.setAttribute('src', 'imagens/hadulto.png')
            }else {
                //IDOSO
                imagem.setAttribute('src', 'imagens/hidoso.png')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 || idade < 10){
                //CRIANÇA
                imagem.setAttribute('src', 'imagens/mbebe.png')
            }else if(idade < 21){
                //JOVEM
                imagem.setAttribute('src', 'imagens/mjovem.png')
            }else if(idade < 50){
                //ADULTO
                imagem.setAttribute('src', 'imagens/madulto.png')
            }else{
                //IDOSO
                imagem.setAttribute('src', 'imagens/midosa.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //adicionando imagem
    }
}