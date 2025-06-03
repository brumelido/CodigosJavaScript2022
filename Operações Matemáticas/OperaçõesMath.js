function calcular(params) {
    var x
    var y
    var r

        x = document.getElementById("x").value
        x = parseInt(x)
        y = document.getElementById("y").value
        y = parseInt(y)

    r = x + y

    document.getElementById("resposta").innerText = r;
}
function calcular1(params) {
    var x
    var y
    var r

        x = document.getElementById("x").value
        x = parseInt(x)
        y = document.getElementById("y").value
        y = parseInt(y)

    r = x - y
    
    document.getElementById("resposta1").innerText = r;
}
function calcular2(params) {
    var x
    var y
    var r

        x = document.getElementById("x").value
        x = parseInt(x)
        y = document.getElementById("y").value
        y = parseInt(y)

    r = x * y
    
    document.getElementById("resposta2").innerText = r;
}
function calcular3(params) {
    var x
    var y
    var r

        x = document.getElementById("x").value
        x = parseInt(x)
        y = document.getElementById("y").value
        y = parseInt(y)

    r = x + y
    
    document.getElementById("resposta3").innerText = r;
}