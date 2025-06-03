function calcular(params) {
    var d
    var l
    var r

    d = document.getElementById("d").value
    l = document.getElementById("l").value

    r = d / l

    document.getElementById("resposta").innerText = r;
}
//taxaDeConsumo = distancia / litros
