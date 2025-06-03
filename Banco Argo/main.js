function teste(params) {
    var nome = "Diogo"
    alert(nome)
    document.getElementById("resposta").innerHTML = nome;
}
function operacao(params) {
    var valor1,valor2;
    var resultado;
    valor1 = parseInt(document.getElementById('valor1').value);
    valor2 = parseInt (document.getElementById('valor2').value);
    resultado = valor1+valor2;
    document.getElementById('resposta2').innerHTML= resultado;
    console.log("OK")
}