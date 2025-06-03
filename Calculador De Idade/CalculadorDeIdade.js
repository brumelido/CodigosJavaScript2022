function calcular(params) {
    var a 
    var x

    a = document.getElementById("a").value;
    a = parseInt(a)

    x = 2022 - a
    document.getElementById("resposta").innerText = x;
}
function meses(params) {
    var a 
    var r 

    a = document.getElementById("a").value;
    a = parseInt(a)

    r = a * 12
    document.getElementById("resposta2").innerText = r;
}
function dias(params) {
    var a 
    var r 

    a = document.getElementById("a").value;
    a = parseInt(a)

    r = a * 365
    document.getElementById("resposta3").innerText = r;
}
function minutos(params) {
    var a 
    var r 

    a = document.getElementById("a").value;
    a = parseInt(a)

    r = a * (365 * 24 * 60 * 60)
    document.getElementById("resposta4").innerText = r;
}
function ano(params) {
    var y
    var u
    var r 

    y = document.getElementById("y").value;
    y = parseInt(y)
    u = document.getElementById("u").value;
    u = parseInt(u)

    r = y - u 

    document.getElementById("resposta5").innerText = r;
}
