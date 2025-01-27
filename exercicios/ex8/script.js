function calcularMedia() {
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);
    let nota3 = Number(document.getElementById('nota3').value);
    let media = (nota1 + nota2 + nota3) / 3;
    let situacao = '';

    if (media >= 6) {
        situacao = 'Aprovado';
    } else if (media >= 4) {
        situacao = 'Recuperação';
    } else {
        situacao = 'Reprovado';
    }

    document.getElementById('resultado').innerHTML = `Média: ${media.toFixed(2)} <br> Situação: ${situacao}`;
}