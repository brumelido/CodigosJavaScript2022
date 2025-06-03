function lerfrase(params) {
    var frase =document.getElementById("frase").value 
    var espaço = 0
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == "") {
            espaço++
        }
        console.log(espaço)
    }

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == 'a') {
            nova_frase += "A"
        } else if (frase[i] == 'e') {
            nova_frase += "E"
        }  else if (frase[i] == 'i') {
            nova_frase += "I"
        }  else if (frase[i] == 'o') {
            nova_frase += "O"
        }  else if (frase[i] == 'u') {
            nova_frase += "U"
        } else{
            nova_frase = frase[i]
        }
        
    }
    document.getElementById("resposta").innerHTML = nova_frase
}