function Calcular(params) {
    var nome = document.getElementById("nome").value
    var altura= Number(document.getElementById("altura").value)
    var sexo = document.getElementById("sexo").value 
    if (sexo ==  "1" ) {
        resultado = 21 * (altura * altura)
        document.getElementById("resultado01").innerText = `Olá ${nome}, o seu peso ideal é ${resultado}.`
    } else if (sexo ==  "2" ) {
        resultado = 22 * (altura * altura)
        document.getElementById("resultado01").innerText = `Olá ${nome}, o seu peso ideal é  ${resultado}. `
    }
}