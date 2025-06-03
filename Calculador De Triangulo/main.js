function Resultado(params) {
    var valor01 = Number(document.getElementById("valor01").value)
    var valor02 = Number(document.getElementById("valor02").value)
    var valor03 = Number(document.getElementById("valor03").value)
    
    if (valor01 == valor02 && valor02 == valor03 && valor01 == valor03) {
        alert("Esse Triângulo é equilátaro")
} else
    if (valor01 < valor02 + valor03 || valor02 < valor01 + valor03 || valor03 < valor01 + valor01) {
     if(valor01 == valor02 && valor02 != valor03 && valor01 != valor03){
        alert("Isósceles (2 lados iguais)")
    } else if(valor01 != valor02 && valor02 == valor03 && valor01 != valor03){
        alert("Isósceles (2 lados iguais)")
    } else if(valor01 != valor02 && valor02 != valor03 && valor01 == valor03){
        alert("Isósceles (2 lados iguais)")
    } else if (valor01 != valor02 != valor03) {
            alert("Escaleno (3 lados diferentes)")
    } 
}
}