let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let media = (n1 + n2) / 2;
let totalAulas = parseInt(prompt("Digite a quantidade de aulas dadas:"));
let assistidas = parseInt(prompt("Digite a quantidade de aulas assistidas:"));
let frequencia = (assistidas / totalAulas) * 100;
const minimo = 75

if (media >= 7 && frequencia >= minimo){
    document.getElementById("situacao").innerHTML = 
    `Aprovado com média ${media} e frequencia de ${frequencia}%`
} else {
    document.getElementById("situacao").innerHTML = 
    `Reprovado com média ${media} e frequencia de ${frequencia}%`
}