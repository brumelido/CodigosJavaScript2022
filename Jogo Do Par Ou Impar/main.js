var placar = 0, placar2 = 0
var nick1, nick2
var esc1, esc2
var resp, resp2

function nick() {
    nick1 = document.getElementById('nick1').value
    nick2 = document.getElementById('nick2').value

    document.getElementById('nome1').innerHTML = ` ${nick1} é Par:`
    document.getElementById('nome2').innerHTML = ` ${nick2} é Impar:`
    document.getElementById('travar').disabled = false
    document.getElementById('nick').style.display = 'none';
}
function jogar() {
    esc1 = Number(document.getElementById('esc1').value)
    esc2 = Number(document.getElementById('esc2').value)
    resp = esc1 + esc2 
    resp2 = resp % 2
    
    if (resp2 == 0) {
        placar++
        document.getElementById('aviso').innerText = `${nick1} ganhou a rodada, o resultado foi par`
        document.getElementById('placar').innerText = placar
    }else{
        if (resp2 != 0) {
        placar2++
        document.getElementById('aviso').innerText = `${nick2} ganhou a rodada, o resultado foi impar`
        document.getElementById('placar2').innerText = placar2
    }
}
    if (placar == 3) {
        document.getElementById('img').innerHTML = "<img src='phoebe-friends-foto-reproducao_widelg.jpg'>"
        document.getElementById('parabens').innerHTML = `${nick1} é o vencedor!!!`
        document.getElementById("travar").style.display = 'none';
        document.getElementById("rei").style.display = "block";
    }else{
        if (placar2 == 3) {
            document.getElementById('img').innerHTML = "<img src='phoebe-friends-foto-reproducao_widelg.jpg'>"
            document.getElementById('parabens').innerHTML = `${nick2} é o vencedor!!!`
            document.getElementById("travar").style.display = 'none';
            document.getElementById("rei").style.display = "block";
        }
    }
}
    function reiniciar() {
        location.reload()
    }