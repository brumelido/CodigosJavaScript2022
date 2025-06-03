nome = "eu gosto de voce"
letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

i =0
console.log(nome)
function criptografar(params) {
    
for (let i = 0; i < nome.length; i++) {
    for (let j = 0; j < letras.length; j++) {
        if (nome[i] == letras[j]) {
            console.log(letras[j+3])
        }
    }
}
}
function descriptografar(params) {
    
    for (let i = 0; i < nome.length; i++) {
        for (let j = 0; j < letras.length; j++) {
            if (nome[i] == letras[j]) {
                console.log(letras[j])
            }
        }
    }
}
