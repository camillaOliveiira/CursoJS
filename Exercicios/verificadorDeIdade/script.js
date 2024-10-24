function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    //se vazio
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        //res.innerHTML = `Idade calculada: ${idade} anos.`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Crianca
                img.setAttribute('src', 'bebeHomem.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemHomem.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultoHomem.png')
            }else {
                //Idoso
                img.setAttribute('src', 'idosoHomem.png')
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Crianca
                img.setAttribute('src', 'bebeMulher.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemMulher.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultoMulher.png')
            }else {
                //Idoso
                img.setAttribute('src', 'idosoMulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}