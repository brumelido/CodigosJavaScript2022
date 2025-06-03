nome = prompt("Digite seu nome: ")
function nota(params) {
    var nota01 = Number(document.getElementById("nota01").value)
    var nota02 = Number(document.getElementById("nota02").value)
    var resultado 
    
    resultado = (nota01 + nota02)/2

    if (resultado >= 7 ) {
        document.getElementById("resultado01").innerText = `Olá ${nome}, sua nota foi ${resultado}. Aprovado(a)!`
    } else {
        document.getElementById("resultado01").innerText = `Olá ${nome}, sua nota foi ${resultado}. Reprovado(a)!`
    }
}