var b
var h 
var area
var figura

function executar(params) {
   
    b = parseInt(b)
    b = document.getElementById("b").value 
    h = parseInt(h)
    h = document.getElementById("h").value 
    figura = document.getElementById("figura").value 
    
    area = calcular_area(figura, b, h)
    document.write(`o valor da área do ${figura} eh igual a ${area}`)
 }
 function calcular_area() {
     if (figura == "retangulo") {
         return b*h
     } else {
        return (b*h) / 2
     }
 }
