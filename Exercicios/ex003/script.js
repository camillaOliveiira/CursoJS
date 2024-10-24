function Verificar() {
    var tn1 = document.getElementById('txtn1')
    var n1 = Number(tn1.value)
    var tn2 = document.getElementById('txtn2')
    var n2 = Number(tn2.value)
    var resu = document.getElementById('res')
    var cn = document.getElementById('c')

    if (n1 === n2) {
        resu = n1 + n2
        res.innerHTML = `A soma entre os numero (A) ${n1} e o numero (B) ${n2} é igual a ${resu}.`
        cn = resu
        c.innerHTML = `C = ${cn}`
    } else if (n1 != n2) {
        resu = n1 * n2
        res.innerHTML = `A multiplicação entre os numero (A) ${n1} e o numero (B) ${n2} é igual a ${resu}.`
        cn = resu
        c.innerHTML = `C = ${cn}`
    }
}