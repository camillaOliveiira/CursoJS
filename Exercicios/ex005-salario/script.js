function Verificar(){
    var tn1 = document.getElementById('txtn1')
    var n1 = Number(tn1.value)
    var tn2 = document.getElementById('txtn2')
    var n2 = Number(tn2.value)
    var res = document.getElementById('res')
    n1 = parseInt(n1, 10);
    n2 = parseInt(n2, 10);

    if (n1 >0 || n2 >0) {
        var quant = Math.round(n2 / n1);
        res.innerHTML = `Você recebe aproximadamente ${quant} salários mínimos.`;
    } else if(n1 === 0 || n1 === null || n2 === 0 || n2 === null){
        window.alert('Digite valores válidos para salário e salário mínimo.');
    }
}
