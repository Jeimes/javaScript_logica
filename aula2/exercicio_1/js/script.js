let n1 = parseFloat(prompt("Informe a primeira nota:"));
let n2 = parseFloat(prompt("Informe a segunda nota:"));
let n3 = parseFloat(prompt("Informe a terceira nota:"));

let media = (n1 + n2 + n3) / 3;

if (media < 4){
    document.getElementById("media").innerHTML = `REPROVADO com média ${media}`;
} else if (media < 7 && media >= 4) {
    document.getElementById("media").innerHTML = `Em PROVA FINAL com média ${media}`;
} else {
    document.getElementById("media").innerHTML = `APROVADO com média ${media}`;
}