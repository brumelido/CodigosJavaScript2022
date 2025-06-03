var ContarGirotto = 0
var ContarAle = 0
var ContarMP = 0
function Girotto(params) {
    ContarGirotto++
document.getElementById("ContadorGirotto").innerHTML = ContarGirotto
if (ContarGirotto == 6) {
    alert("Girotto é o vencedor")
}
}
function Ale(params) {
    ContarAle ++
document.getElementById("ContadorAle").innerHTML = ContarAle

if(ContarAle == 6){
    alert("Ale é a vencedora")
} 
}
function MP(params) {
    ContarMP ++
document.getElementById("ContadorMP").innerHTML = ContarMP
if(ContarMP == 6){
    alert("Marcos Paulo é o vencedor")
}
}
