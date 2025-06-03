function a(params) {
    var contagem = document.getElementById("contagem").value 
        alert(contagem.length)
}
function inverso(params) {
var contagem = document.getElementById("contagem").value 
var reverso = ""
for (let i = 1; i <= contagem.length; i++) {
    reverso += contagem[contagem.length - i];
}
alert(reverso)
}