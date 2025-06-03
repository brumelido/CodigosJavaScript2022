var palavra

function inverter(params) {
palavra = document.getElementById("palavra").value
palavra_invertida = ""
for (let i = 1; i <= palavra.length; i++) {
    palavra_invertida += palavra[palavra.length - i];
    
}
    console.log(palavra_invertida)
}

