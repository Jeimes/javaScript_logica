// let num = parseFloat(prompt("Digite um número para ver a tabuada:"));
// let i = 1;
// let res;

// while(i <= 10){
//     res = num * i;
//     document.write(res.toString() + "<br>");
//     i++;
// }

// do {
//     res = num * i;
//     document.write(res.toString() + "<br>");
//     i++;
// }while (i <= 10)

// for(let i = 1; i <= 10; i++){
//     res = num * i;
//     document.write(res.toString() + "<br>");
// }



function calcularTabuada() {
    let num = parseInt(document.getElementById("num").value);
    let i = 1;
    let res;

    while (i <= 10) {
        res = num * i;

        let body = document.body;
        let paragrafo = document.createElement("p");
        paragrafo.id = "resultado" + i;
        body.appendChild(paragrafo);

        document.getElementById("resultado" + i).innerHTML = res.toString();
        i++;
    }    
}