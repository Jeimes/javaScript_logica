let valorCompra = parseFloat(prompt("Digite o valor da compra:"));
let cupom = prompt("Cupom desconto:");

let valorFinal = valorCompra;
if (valorCompra > 1000 || cupom.toUpperCase() == "DESCONTO20"){
    valorFinal = valorCompra - (valorCompra * 0.2);
}

alert(`Valor final da sua compra ${valorFinal}`);