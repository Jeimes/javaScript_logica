var nomePrograma = "Cálculo de Férias";

const x = "Danilo Augusto";
x = "Jeimes";

let nome = prompt("Informe seu nome:");
nome = "Gabriela";

function calcular() {

    

    let salarioDia = parseFloat(document.getElementById("num1").value);

    let salarioMes = salarioDia * 30;

    document.getElementById("resultado").innerHTML = `Salário mensal de ${nome} é R$ ${salarioMes}`;

}

function calcularTeste() {

    nome = prompt("Informe seu nome:");

    salarioDia = parseFloat(document.getElementById("num1").value);

    salarioMes = salarioDia * 30;

    document.getElementById("resultado2").innerHTML = `Salário mensal de ${nome} é R$ ${salarioMes}`;

}