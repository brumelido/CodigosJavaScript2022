nome = prompt("Digite seu nome: ")
function Velocidade(params) {
    var VelocidadeDaVia = Number(document.getElementById("VelocidadeDaVia").value)
    var VelocidadeDoCondutor = Number(document.getElementById("VelocidadeDoCondutor").value)

    if (VelocidadeDoCondutor <= VelocidadeDaVia) {
        document.getElementById("resultado01").innerHTML = `Olá ${nome}. sE3M mULTA!`
    
    } else if(VelocidadeDoCondutor > VelocidadeDaVia) { 
    diferença01 = VelocidadeDoCondutor - VelocidadeDaVia
    dif02 = diferença01/VelocidadeDaVia 
    dif03 = dif02*100 
    porcentagemDaVia = VelocidadeDaVia *20/100
    if (dif03<= porcentagemDaVia ) {
        document.getElementById("resultado01").innerHTML = `Olá ${nome}. Multa Leve!`
    } else if (dif03 > porcentagemDaVia){
        document.getElementById("resultado01").innerHTML = `Olá ${nome}. Multa Grave!`
    }
} }