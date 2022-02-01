let x = parseInt(prompt("Informe o valor de X:"));
let y = parseInt(prompt("Informe o valor de Y:"));
let z = parseInt(prompt("Informe o valor de Z:"));

if (x + y > z && x + z > y && y + z > x) {
    if (x == y && x == z) {
        document.getElementById("mensagem").innerHTML = "Triângulo equilátero";
    } else if (x == y || x == z || y == z) {
        document.getElementById("mensagem").innerHTML = "Triângulo isósceles";
    } else {
        document.getElementById("mensagem").innerHTML = "Triângulo escaleno";
    }
} else {
    document.getElementById("mensagem").innerHTML = "As medidas informadas não são de um triângulo";
}