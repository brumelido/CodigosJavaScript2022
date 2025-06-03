function calcular(parames){
    
var x
var y
var z
var r

x = parseInt(x)
x = document.getElementById("x").value
y = parseInt(y)
y = document.getElementById("y").value
z = parseInt(z)
z = document.getElementById("z").value


r = (x + y + z) / 3


 document.getElementById("resposta").innerText = r;

}

