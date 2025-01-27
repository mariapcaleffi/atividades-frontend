function calcularDesconto() {
    let produto = document.getElementById('produto').value;
    let preco = Number(document.getElementById('precoVenda').value);
    let desconto = 0;

    if (produto.toLowerCase() === 'camisa') {
        desconto = preco * 0.20;
    } else if (produto.toLowerCase() === 'bermuda') {
        desconto = preco * 0.10;
    } else if (produto.toLowerCase() === 'calça') {
        desconto = preco * 0.15;
    }

    let precoFinal = preco - desconto;
    document.getElementById('resultado').innerHTML = `Desconto: R$ ${desconto.toFixed(2)} <br> Preço Final: R$ ${precoFinal.toFixed(2)}`;
}