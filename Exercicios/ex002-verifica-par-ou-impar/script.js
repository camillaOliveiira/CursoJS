function Verificar() {
    var tn1 = document.getElementById('txtn1')
    var n1 = Number(tn1.value)

    if (n1 % 2 === 0) {
        document.getElementById('res').innerText = "O número " + n1 + " é par";
    } else {
        document.getElementById('res').innerText = "O número " + n1 + " é ímpar";
    }
    // Verifica se o número é positivo ou negativo
    if (n1 > 0) {
        document.getElementById('res').innerText += " e é positivo.";
    } else if (n1 < 0) {
        document.getElementById('res').innerText += " e é negativo.";
    } else {
        document.getElementById('res').innerText += " e é zero.";
    }
}