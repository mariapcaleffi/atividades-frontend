function calcularReajuste() {
    let salario = Number(document.getElementById('salarioAtual').value);
    let aumento = 0;

    if (salario >= 1500 && salario < 1750) {
        aumento = salario * 0.15;
    } else if (salario >= 1750 && salario < 2000) {
        aumento = salario * 0.12;
    } else if (salario >= 2000 && salario < 3000) {
        aumento = salario * 0.09;
    } else if (salario >= 3000) {
        aumento = salario * 0.06;
    }

    let novoSalario = salario + aumento;
    document.getElementById('resultado'). innerHTML = `Aumento: R$ ${aumento.toFixed(2)} <br> Novo Salário: R$ ${novoSalario.toFixed(2)}`;
}