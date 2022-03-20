function calcular() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let qtdPares = 0;
    let i = n1 + 1;

    if (n1 < n2) {
        do {
            // verifica se um número é par
            if (i % 2 == 0) {
                qtdPares++;
            }
            i++;
        } while (i < n2);

        document.getElementById("resultado").innerHTML = qtdPares.toString();

    } else {
        document.getElementById("resultado").innerHTML = "O primeiro número deve ser menor que o segundo";
    }
}