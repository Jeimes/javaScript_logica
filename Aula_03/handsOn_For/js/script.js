let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let soma = 0;
num1 += 1;

for(let i = num1; i < num2; i++){
    soma += i;    
}

document.getElementById("resultado").innerHTML = soma.toString();