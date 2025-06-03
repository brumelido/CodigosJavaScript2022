var nome = prompt("DIGITE SEU NOME AQUI: ")
var idade = prompt("DIGITE SEU idade AQUI: ")
    if (idade <= "12") {
        console.log("oi")
        alert(`Olá ${nome}, você tem ${idade}. Sua categoria é INFANTIL`)
    } else if (idade <= "13" && idade >= "18") {
        alert(`Olá ${nome}, você tem ${idade}. Sua categoria é JUVENIL`)
    } else if (idade < "18") {
        alert(`Olá ${nome}, você tem ${idade}. Sua categoria é ADULTO`)
    } 