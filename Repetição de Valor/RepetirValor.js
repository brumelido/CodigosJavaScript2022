function rodar(params) {
    var v1
var v2
var v3
var respo

v1 = document.getElementById("v1").value
v2 = document.getElementById("v2").value
v3 = document.getElementById("v3").value

if (v1 == v2) {
    respo = "valores foram repetidos"
} else if (v1 == v3) {
    respo = "valores foram repetidos"
} else if (v2 == v3) {
    respo = "valores foram repetidos"
} else {
    respo = "Parabéns, nenhum valor foi repetido!"
}
    document.getElementById("respo").innerHTML = respo

}
