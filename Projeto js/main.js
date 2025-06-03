var carrinho = []
let valor = 0

function addFifa() {
    carrinho.push("FIFA 23")
    document.querySelector("#carrinho").innerHTML = carrinho.join("<br>")
    console.log(carrinho)
    calcularCompra()
}

function addGow() {
    carrinho.push("God of War Ragnarök")
    document.querySelector("#carrinho").innerHTML = carrinho.join("<br>")
    console.log(carrinho)
    calcularCompra()
}

function addMk() {
    carrinho.push("Mortal Kombat 11")
    document.querySelector("#carrinho").innerHTML = carrinho.join("<br>")
    console.log(carrinho)
    calcularCompra()
}

function addRe4() {
    carrinho.push("Resident Evil 4 Remake")
    document.querySelector("#carrinho").innerHTML = carrinho.join("<br>")
    console.log(carrinho)
    calcularCompra()
}

function addSkyrim() {
    carrinho.push("The Elder Scrolls V: Skyrim")
    document.querySelector("#carrinho").innerHTML = carrinho.join("<br>")
    console.log(carrinho)
    calcularCompra()

}

function addRdr() {
    carrinho.push("Red Dead Redemption 2")
    document.querySelector("#carrinho").innerHTML = carrinho.join("<br>")
    console.log(carrinho)
    calcularCompra()
}

function calcularCompra() {
    valor = 0
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i] == "FIFA 23") {
            valor += 338.99
        } else if (carrinho[i] == "God of War Ragnarök") {
            valor += 349.99
        } else if (carrinho[i] == "Mortal Kombat 11") {
            valor += 89.99
        } else if (carrinho[i] == "Resident Evil 4 Remake") {
            valor += 319.99
        } else if (carrinho[i] == "The Elder Scrolls V: Skyrim") {
            valor += 149.99
        } else {
            valor += 239.99
        }
    }

    valorDaCompra = document.querySelector("#valorDaCompra").innerHTML = `${"R$ " + valor.toFixed(2)}`

}

function pagar() {
    let pagamento = document.querySelector("#pagamento").value
    let troco 
    if (valor == 0) {
        alert("Selecione algum jogo para finalizar a compra.")
    } else if (pagamento >= valor) {
        troco = pagamento - valor
        alert("Pagamento bem sucedido! Obrigado pela compra. O troco é de " + troco.toFixed(2))
        document.querySelector("#pagamento").value = "";
        while (carrinho != 0) {
            removeUlitmo()
        }
    } else {
        alert("Falha na compra, pagamento insuficiente.")
    }
}

function removeUlitmo() {
    carrinho.pop()
    document.querySelector("#carrinho").innerHTML = carrinho.join("<br>")
    console.log(carrinho)
    calcularCompra()
}

function RemovePrimeiro() {
    carrinho.shift()
    document.querySelector("#carrinho").innerHTML = carrinho.join("<br>")
    console.log(carrinho)
    calcularCompra()
}