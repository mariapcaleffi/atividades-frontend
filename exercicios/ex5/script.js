function ordenarNumeros() {
    let numeros = [
        Number(document.getElementById('num1').value),
        Number(document.getElementById('num2').value),
        Number(document.getElementById('num3').value),
        Number(document.getElementById('num4').value),
        Number(document.getElementById('num5').value)
    ];
    numeros.sort((a, b) => a - b);
    document.getElementById('resultado').innerHTML = `Números em Ordem Crescente: ${numeros.join(', ')}`;
}