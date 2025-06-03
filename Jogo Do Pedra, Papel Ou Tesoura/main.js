var placar1 = 0, placar2 = 0;
var nick1;
var nick2;
var resposta;
var jogador1;
var jogador2;

function nick() {
  nick1 = document.getElementById("nick1").value;
  nick2 = document.getElementById("nick2").value;
  document.getElementById("usuarios").innerText = `O Nickname 01 é ${nick1} e o Nickname 02 é ${nick2}`;
}
function pedra1() {
  jogador1 = "pedra";
}
function pedra2() {
  jogador2 = "pedra";
}

function papel1() {
  jogador1 = "papel";
}

function papel2() {
  jogador2 = "papel";
}

function tesoura1() {
  jogador1 = "tesoura";
}

function tesoura2() {
  jogador2 = "tesoura";
}
function jogar() {
  if (jogador1 == jogador2) {
    document.getElementById("resposta").innerText = "empatou";
    document.getElementById("placar1").innerText = ` o jogador ${nick2} esta com ${placar2} e o ${nick1} esta com ${placar1} `;
    placar2++;
    placar1++;
  } else if (jogador1 == "pedra" && jogador2 == "papel") {
    document.getElementById("resposta").innerText = `o ${nick2} ganhou`;
    document.getElementById("placar1").innerText = ` o jogador ${nick2} esta com ${placar2}`;
    placar2++;
  } else if (jogador1 == "pedra" && jogador2 == "tesoura") {
    document.getElementById("resposta").innerText = `o ${nick1} ganhou`;
    document.getElementById("placar1").innerText = ` o jogador ${nick1} esta com ${placar1}`;
    placar1++;
  } else if (jogador1 == "papel" && jogador2 == "pedra") {
    document.getElementById("resposta").innerText = `o ${nick1} ganhou`;
    document.getElementById("placar1").innerText = ` o jogador ${nick1} esta com ${placar1}`;
    placar1++;
  } else if (jogador1 == "papel" && jogador2 == "tesoura") {
    document.getElementById("resposta").innerText = `o ${nick2} ganhou`;
    document.getElementById("placar1").innerText = ` o jogador ${nick2} esta com ${placar2}`;
    placar2++;
  } else if (jogador1 == "tesoura" && jogador2 == "papel") {
    document.getElementById("resposta").innerText = `o ${nick1} ganhou`;
    document.getElementById("placar1").innerText = ` o jogador ${nick1} esta com ${placar1}`;
    placar1++;
  } else if (jogador1 == "tesoura" && jogador2 == "pedra") {
    document.getElementById("resposta").innerText = `o ${nick2} ganhou`;
    document.getElementById("placar1").innerText = ` o jogador ${nick2} esta com ${placar2} `;
    placar2++;
  }

  if (placar1 == 3 && placar2 == 3) {
    document.getElementById("campeao").innerText = "EMPATOU!!!";
  } else if (placar1 == 3) {
    document.getElementById("campeao").innerText = ` ${nick1} VENCEU O JOGO!!!`;
    document.getElementById("imagem").innerHTML = "<img src='phoebe-friends-foto-reproducao_widelg.jpg'>";
  } else if (placar2 == 3) {
    document.getElementById("campeao").innerText = ` ${nick2} VENCEU O JOGO!!1`;
    document.getElementById("imagem").innerHTML = "<img src='phoebe-friends-foto-reproducao_widelg.jpg'>";
  }
}