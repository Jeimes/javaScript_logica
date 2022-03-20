function calcularFatorial() {
    let numero = parseInt(document.getElementById("num").value);
    let res = 1;
    let count = 1;

    while(count <= numero){
        res *= count;
        count++;
    }

    document.getElementById("resultado").innerHTML = `O fatorial é ${res}`;
}