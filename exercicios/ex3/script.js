function calcularAumento() {
    let nome = document.getElementById('nome').value;
    let preco = Number(document.getElementById('preco').value);
    let aumento = 0;

    if (preco < 1000) {
        aumento = preco * 0.05;
    } else {
        aumento = preco * 0.07;
    }

    let novoPreco = preco + aumento;
    document.getElementById('resultado').innerHTML = `Mercadoria: ${nome} <br> Novo Preço: R$ ${novoPreco.toFixed(2)}`;
}