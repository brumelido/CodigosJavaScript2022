function calcular(paramas){
    var x
    var r

x = document.getElementById("x").value

x = parseInt(x)

r = 2055 - x

document.getElementById("resposta").innerText=r;
}