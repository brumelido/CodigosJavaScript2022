function soma(paramas){
    var x
    var y
    var r

x = document.getElementById("x").value

x = parseInt(x)

y = document.getElementById("y").value

y = parseInt(y)

r = x + y

document.getElementById("resposta").innerText=r;
}
function subtração(paramas){
    var x
    var y
    var r

x = document.getElementById("x").value

x = parseInt(x)

y = document.getElementById("y").value

y = parseInt(y)

r = x - y

document.getElementById("resposta").innerText=r;
}
function mutiplicação(paramas){
    var x
    var y
    var r

x = document.getElementById("x").value

x = parseInt(x)

y = document.getElementById("y").value

y = parseInt(y)

r = x * y

document.getElementById("resposta").innerText=r;
}
    function divisão(paramas){
    var x
    var y
    var r

x = document.getElementById("x").value

x = parseInt(x)

y = document.getElementById("y").value

y = parseInt(y)

r = x / y

document.getElementById("resposta").innerText=r;
}