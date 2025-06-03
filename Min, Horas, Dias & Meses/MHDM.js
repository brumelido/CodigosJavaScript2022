function meses(params) {
    var a 
    var r 
     
    a = document.getElementById("a").value
    a = parseInt(a)

    r = a * 12 

    document.getElementById("resposta").innerText = r;
}
function dias(params) {
    var a 
    var r 

    a = document.getElementById("a").value
    a = parseInt(a)
    
    r = a * 365 
    
    document.getElementById("resposta1").innerText = r;
}
function horas(params) {
    var a 
    var r 
     
    a = document.getElementById("a").value
    a = parseInt(a)

    r = a * 8760 

    document.getElementById("resposta2").innerText = r;
}
function minutos(params) {
    var a 
    var r 
     
    a = document.getElementById("a").value
    a = parseInt(a)

    r = a * 525600 

    document.getElementById("resposta3").innerText = r;
}