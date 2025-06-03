var totaldeaposta = 0
var totaldocavalo1 = 0
var totaldocavalo2 = 0
var totaldocavalo3 = 0
var totaldocavalo4 = 0
var totaldocavalo5 = 0
var totaldeapostas = 0

function confirmar(params) {
    var NmrDoCavalo = Number(document.getElementById("NmrDoCavalo").value)
    var Aposta = Number(document.getElementById("Aposta").value)
    var nomedoapostador = document.getElementById("nomedoapostador").value
   
     if (NmrDoCavalo == 1 ) { 
        totaldocavalo1++
        document.getElementById("respnmrdocavalo1").innerHTML += "1 <br>"
        document.getElementById("respnomedocavalo1").innerHTML += `Máximus <br>`
        document.getElementById("respnomedoapostador1").innerHTML += `${nomedoapostador} <br>`
        document.getElementById("respaposta1").innerHTML += `${Aposta}<br>`
        document.getElementById("totaldocavalo01").innerHTML = totaldocavalo1 
     } else if (NmrDoCavalo == 2 ) {
      totaldocavalo2++
        document.getElementById("respnmrdocavalo2").innerHTML += "2 <br>"
        document.getElementById("respnomedocavalo2").innerHTML += `Estrela <br>`
        document.getElementById("respnomedoapostador2").innerHTML += `${nomedoapostador} <br>`
        document.getElementById("respaposta2").innerHTML += `${Aposta}<br>`
        document.getElementById("totaldocavalo02").innerHTML = totaldocavalo2
     } else if (NmrDoCavalo == 3 ) {
      totaldocavalo3++
        document.getElementById("respnmrdocavalo3").innerHTML += "3 <br>"
        document.getElementById("respnomedoapostador3").innerHTML += `Flash <br>`
        document.getElementById("respnomedoapostador3").innerHTML += `${nomedoapostador} <br>`
        document.getElementById("respaposta3").innerHTML += `${Aposta}<br>`
        document.getElementById("totaldocavalo03").innerHTML = totaldocavalo3
     } else if (NmrDoCavalo == 4 ) {
      totaldocavalo4++
        document.getElementById("respnmrdocavalo4").innerHTML += "4 <br>"
        document.getElementById("respnomedocavalo4").innerHTML += `Nasa <br>`
        document.getElementById("respnomedoapostador4").innerHTML += `${nomedoapostador} <br>`
        document.getElementById("respaposta4").innerHTML += `${Aposta}<br>`
        document.getElementById("totaldocavalo04").innerHTML = totaldocavalo4
     } if (NmrDoCavalo == 5 ) {
      totaldocavalo5++
        document.getElementById("respnmrdocavalo5").innerHTML += "5 <br>"
        document.getElementById("respnomedocavalo5").innerHTML += `Bea <br>`
        document.getElementById("respnomedoapostador5").innerHTML += `${nomedoapostador} <br>`
        document.getElementById("respaposta5").innerHTML += `${Aposta}<br>`
        document.getElementById("totaldocavalo05").innerHTML = totaldocavalo5 
     } 
     
      totaldeaposta = totaldeaposta + Aposta
      document.getElementById("valor").innerHTML = totaldeaposta
      totaldeapostas = totaldocavalo1 + totaldocavalo2 + totaldocavalo3 + totaldocavalo4 + totaldocavalo5
      document.getElementById("totaldeapostas0").innerHTML = totaldeapostas

}
var total = 0
function sorteio(params) {
    var sorteio
    sorteio = Math.floor(Math.random()* 6 )
    alert("O cavalo que ganhou foi o número " + sorteio + "") 
    switch (sorteio) {
      case 1:
         totalbanca = totaldeaposta - (totaldeaposta/10)
         total = totalbanca / totaldocavalo1
         alert(`Cada apostador receberá R$${total}`)
         break;
      case 2:
         totalbanca = totaldeaposta - (totaldeaposta/10)
         total = totalbanca / totaldocavalo2
         alert(`Cada apostador receberá R$${total}`)
         break;
      case 3:
         totalbanca = totaldeaposta - (totaldeaposta/10)
         total = totalbanca / totaldocavalo3
         alert(`Cada apostador receberá R$${total}`)
         break;
      case 4:
         totalbanca = totaldeaposta - (totaldeaposta/10)
         total = totalbanca / totaldocavalo4
         alert(`Cada apostador receberá R$${total}`)
         break;
      case 5:
         totalbanca = totaldeaposta - (totaldeaposta/100)
         total = totalbanca / totaldocavalo4
         alert(`Cada apostador receberá R$${total}`)
      break;
    }  
}
