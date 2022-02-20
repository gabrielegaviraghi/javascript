function btn(num){
    var numero = document.getElementById('result').innerHTML ; /*ao clicar em um botão de numero, ele vai aparecer em resultado*/ 
    document.getElementById('result').innerHTML = numero + num; /*pega o valor que já tinha e insere o novo valor*/ 
}

function clean(){ /*limpar a caixa de resultados*/
    document.getElementById('result').innerHTML = "";
}

function back(){ /*apagando numero por numero*/ 
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0,result.length -1);
}

function calculate(){
    var result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }else{
        document.getElementById('result').innerHTML = "Nada..."
    }
}