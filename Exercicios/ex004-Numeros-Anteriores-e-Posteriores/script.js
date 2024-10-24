function Verificar() {
    var tn1 = document.getElementById('txtn1')
    var n1 = Number(tn1.value)
    var res = document.getElementById('res')
    
    if (!isNaN(n1)&&n1>0) {
        var ante = n1 - 1;
        var suce = n1 + 1;
        res.textContent = `Número anterior: ${ante}\nNúmero sucessor: ${suce}`;
    } else if (n1 === 0 || n1 === null){
        window.alert('Digite um número válido.')
    }

}