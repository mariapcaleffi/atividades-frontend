function calcularSalario() {
    let salario = Number(document.getElementById('salario').value);
    let filhos = Number(document.getElementById('filhos').value);
    let resultado = document.getElementById('resultado');
    
    let salarioFamilia = 0;
    
    if (salario < 2000) {
        salarioFamilia = filhos * 45; // R$ 45 por filho
    }
    
    let salarioFinal = salario + salarioFamilia;
    
    resultado.innerHTML = `Salário Família: R$ ${salarioFamilia.toFixed(2)} <br>Salário Final: R$ ${salarioFinal.toFixed(2)}`;
}