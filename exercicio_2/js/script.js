let n1 = parseFloat(prompt("Informe a quilometragem inicial:"));
let n2 = parseFloat(prompt("Informe a quilometragem final:"));
let n3 = parseFloat(prompt("Informe o total de litros:"));
let n4 = (n2-n1)/n3;
alert(`O veículo está fazendo ${n4}Km por litro`);

document.getElementById("n1").innerHTML = `Km inicial: ${n1}`
document.getElementById("n2").innerHTML = `Km final: ${n2}`
document.getElementById("n3").innerHTML = `Litros abastecidos: ${n3}`
document.getElementById("n4").innerHTML = `Consumo por KM: ${n4}`