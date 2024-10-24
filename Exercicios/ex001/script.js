function Calcular() {
    var tn1 = document.getElementById('txtn1')
    var n1 = Number(tn1.value)
    var tn2 = document.getElementById('txtn2')
    var n2 = Number(tn2.value)
    var tn3 = document.getElementById('txtn3')
    var n3 = Number(tn3.value)
    var res = document.querySelector('div#res')
    var resu = document.querySelector('div#resu')

    if (n1 === 0 || n2 === 0 || n3 === 0) {
        window.alert('[ERRO] Preencha todos os campos para obter os resultados!');
        return; // Encerra a função se os valores estiverem vazios
    }

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert('[ERRO] Preencha todos os campos com números válidos!');
        return; // Encerra a função se algum valor não for um número
    }

    var s = n1 + n2;

    if (n3 === s || n3 !== 0 || s !== 0) {
        resu.innerHTML = `O Terceiro numero é igual ao resultado.`;
    } else if(n3 > s || n3 !== 0 || s !== 0){
        resu.innerHTML = `O Terceiro numero é maior que o resultado.`;
    } else if(n3 < s || n3 !== 0 || s !== 0){
        resu.innerHTML = `O Terceiro numero é menor que o resultado.`;
    }
    res.innerHTML = `O resultado da soma é: ${s}`
}