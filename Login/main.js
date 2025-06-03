function escrever_olamundo(params) {
    document.write;"olá mundo"
}
function logar(params) {
    var login
    var senha

    login =  document.getElementById("login").value
    senha =  document.getElementById("senha").value

   if (login == "cesupa" && senha == "121212") {
       (location.href = 'https://www.cesupa.br') //outras págnas
       //(location.href = 'INDEX.HTML')//mesma tela - locachion é um obg e carrega o endereço
   } else {
       alert("dados inválidos")
       
   }
}