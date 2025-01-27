function classificarTriangulo() {
    let a = Number(document.getElementById('ladoA').value);
    let b = Number(document.getElementById('ladoB').value);
    let c = Number(document.getElementById('ladoC').value);
    let resultado = '';

    if (a === b && b === c) {
        resultado = 'EQUILÁTERO';
    } else if (a !== b && b !== c && a !== c) {
        resultado = 'ESCALENO';
    } else {
        resultado = 'ISÓSCELES';
    }

    document.getElementById('resultado').innerHTML = `Tipo de triângulo: ${resultado}`;
}