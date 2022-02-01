let codigoElogio = parseInt(prompt("Digite\n1 para o elogio profissional\n2 para elogio físico\n3 para elogio pessoal"));

switch (codigoElogio) {
    case 1:
        document.getElementById("mensagem").innerHTML = "Você ganhou um elogio profissional";
        break;
    case 2:
        document.getElementById("mensagem").innerHTML = "Você ganhou um elogio físico";
        break;
    case 3:
    document.getElementById("mensagem").innerHTML = "Você ganhou um elogio pessoal";
    break;
    default:
        document.getElementById("mensagem").innerHTML = "Código inválido";
        break;
}