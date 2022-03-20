function calcular() {
    let preco = parseFloat(document.getElementById("preco").value);
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let resultado = 0;

    if (quantidade > 1) {
        resultado = Math.floor(quantidade * preco);
    } else {
        resultado = preco;
    }

    document.getElementById("resultado").innerHTML = resultado.toString();
}