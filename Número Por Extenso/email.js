var email
var PrimeiraLetra
var etapas = 0
var minuscula = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//var maiuscula = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
function Validar(params) {
    email = document.getElementById("email").value
    PrimeiraLetra = email[0]
    if((minuscula.includes(PrimeiraLetra)) && (email.indexOf(" ") == -1) && (email.includes("@")) && (email.includes(".com")) ){
        etapas++
        alert("validadooo")
    } else {
        alert("nao ta")
    } 
   localStorage.getItem(email)
    console.log("ok")
}