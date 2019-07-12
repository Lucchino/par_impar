function sorte() {
    par = document.getElementById('radio2').checked;
    impar = document.getElementById('radio1').checked;
    if (par == true || impar == true) {
        if (par == true) {
            escolhaUsuario = 0
        } else {
            escolhaUsuario = 1
        }
    } else {
        alert("Escolha par ou ímpar");
        return false;
    }
    numeroMaquina = Math.round(Math.random() * 10);
    console.log(numeroMaquina)
    chute = document.getElementById('vc').value;
    if (chute >= 0 && chute <= 10) {} else {
        alert("é valido somente numero");
        return false;
    }
    chute = parseFloat(chute);
    somaNumeros = numeroMaquina + chute;
    parImpar = somaNumeros % 2;
    if (parImpar == 0) {
        resultado = "Par"
    } else {
        resultado = "Ímpar"
    }
    if (parImpar == escolhaUsuario) {
        h = "Total: " + somaNumeros + ", " + resultado + " vc ganhou :)";
    } else {
        h = "Total: " + somaNumeros + ", " + resultado + " vc perdeu :(";
    }
    document.getElementById('res').style.visibility = "visible";
    document.getElementById('rest').style.display = "block";
    document.getElementById('resp').value = "Eu escolhi: " + numeroMaquina + ", você escolheu: " + chute + ". " + h;
    document.getElementById('table').style.borderBottom = "0";
}