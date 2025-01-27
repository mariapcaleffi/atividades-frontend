function encontrarMaiorMenor() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let maior = Math.max(num1, num2);
    let menor = Math.min(num1, num2);
    document.getElementById('resultado').innerHTML = `Maior: ${maior} <br> Menor: ${menor}`;
}