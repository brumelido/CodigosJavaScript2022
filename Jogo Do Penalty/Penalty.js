//Sorteio do Goleiro
var goleiro = [[1], [2], [3], [4], [5], [6], [7], [8], [9]];
//Aposta do chute
var chute;
//Sentido do Vento
var vento;

function chute_do_usuario(params) {
  chute = document.getElementById("chute").value;

  //Chute
  document.getElementById("chute2").innerHTML = chute;
  console.log(chute);

  //Soreteio da defesa
  goleiro = Math.floor(Math.random() * 9 + 1);

  document.getElementById("goleiro").innerHTML = goleiro;
  console.log(goleiro);
}
function sentido_do_vento(params) {
  //Sorteio do Sentindo do Vento
  document.getElementById("ok").disabled = false;
  document.getElementById("ok2").disabled = true;

  vento = null;
  vento = Math.floor(Math.random() * 3 + 1);

  switch (vento) {
    case 1:
      document.getElementById("vento").innerHTML = "Nenhum";
      console.log(vento);
      break;
    case 2:
      document.getElementById("vento").innerHTML = "Direita";
      console.log(vento);
      break;
    case 3:
      document.getElementById("vento").innerHTML = "Esquerda";
      console.log(vento);
      break;
  }
}
function penalti() {
  chute_do_usuario();
  //Vento 2
  //PRIMEIRA LINHA
  if ((chute == 1 && goleiro == 1, 3 && vento == 2)) {
    document.getElementById("resposta").innerHTML = "GOOOOOOOLLLLL!!!!";
  } else if ((chute == 2 && goleiro == 1, 2 && vento == 2)) {
    document.getElementById("resposta").innerHTML = "GOOOOOOOLLLLL!!!!";
  } else if ((chute == 3 && goleiro == 1, 2, 3 && vento == 2)) {
    document.getElementById("resposta").innerHTML = "FORA DO GOL";
  } else if ((chute != 1, 2, 3 && goleiro == 1, 2, 3 && vento == 2)) {
    document.getElementById("resposta").innerHTML = "GOOOOOOOLLLLLL!!!";
  }
  //SEGUNDA LINHA
  else if ((chute == 4 && goleiro == 4, 6 && vento == 2)) {
    document.getElementById("resposta").innerHTML = "GOOOOOOOLLLLL!!!!";
  } else if ((chute == 5 && goleiro == 4, 5 && vento == 2)) {
    document.getElementById("resposta").innerHTML = "GOOOOOOOLLLLL!!!!";
  } else if ((chute == 6 && goleiro == 4, 5, 6 && vento == 2)) {
    document.getElementById("resposta").innerHTML = "FORA DO GOL";
  } else if ((chute != 4, 5, 6 && goleiro == 4, 5, 6 && vento == 2)) {
    document.getElementById("resposta").innerHTML = "GOOOOOOOLLLLLL!!!";
  }
  //Vento "2"
  //PRIMEIRA LINHA
  else if ((chute == 1 && goleiro == 1, 2, 3 && vento == 3)) {
    document.getElementById("resposta").innerHTML = "FORA DO GOL";
  } else if ((chute == 2 && goleiro == 2, 3 && vento == 3)) {
    document.getElementById("resposta").innerHTML = "GOOOOOOOLLLLL!!!!";
  } else if ((chute == 3 && goleiro == 1, 3 && vento == 3)) {
    document.getElementById("resposta").innerHTML = "GOOOOOOOLLLLL!!!!";
  } else if ((chute != 1, 2, 3 && goleiro == 1, 2, 3 && vento == 3)) {
    document.getElementById("resposta").innerHTML = "GOOOOOOOLLLLLL!!!";
  }
  //SEGUNDA LINHA
  else if ((chute == 4 && goleiro == 4, 5, 6 && vento == 3)) {
    document.getElementById("resposta").innerHTML = "FORA DO GOL";
  } else if ((chute == 5 && goleiro == 5, 6 && vento == 3)) {
    document.getElementById("resposta").innerHTML = "GOOOOOOOLLLLL!!!!";
  } else if ((chute == 6 && goleiro == 4, 6 && vento == 3)) {
    document.getElementById("resposta").innerHTML = " GOOOOOOOOOOLL!!!";
  } else if ((chute != 4, 5, 6 && goleiro == 4, 5, 6 && vento == 3)) {
    document.getElementById("resposta").innerHTML = "GOOOOOOOLLLLLL!!!";
  }
  //Vento 2 E 3
  //ÚLTIMA LINHA
  else if ((chute == 7 && goleiro != 7 && vento == 2, 3, 1)) {
    document.getElementById("resposta").innerHTML = "GOOOOOOOLLLLLL!!!";
  } else if ((chute == 7 && goleiro == 7 && vento == 2, 3, 1)) {
    document.getElementById("resposta").innerHTML = "DEFESA DO GOLEIRO";
  } else if ((chute == 8 && goleiro != 8 && vento == 2, 3, 1)) {
    document.getElementById("resposta").innerHTML = "GOOOOOOOLLLLLL!!!";
  } else if ((chute == 8 && goleiro == 8 && vento == 2, 3, 1)) {
    document.getElementById("resposta").innerHTML = "DEFESA DO GOLEIRO";
  } else if ((chute == 9 && goleiro != 9 && vento == 2, 3, 1)) {
    document.getElementById("resposta").innerHTML = "GOOOOOOOLLLLLL!!!";
  } else if ((chute == 9 && goleiro == 9 && vento == 2, 3, 1)) {
    document.getElementById("resposta").innerHTML = "DEFESA DO GOLEIRO";
  }
  //Vento 1
  //CHUTE IGUAL DO GOLEIRO
  else if (chute == 1 && goleiro == 1 && vento == 1) {
    document.getElementById("resposta").innerHTML = "DEFESA DO GOLEIRO";
  } else if (chute == 2 && goleiro == 2 && vento == 1) {
    document.getElementById("resposta").innerHTML = "DEFESA DO GOLEIRO";
  } else if (chute == 3 && goleiro == 3 && vento == 1) {
    document.getElementById("resposta").innerHTML = "DEFESA DO GOLEIRO";
  } else if (chute == 4 && goleiro == 4 && vento == 1) {
    document.getElementById("resposta").innerHTML = "DEFESA DO GOLEIRO";
  } else if (chute == 5 && goleiro == 5 && vento == 1) {
    document.getElementById("resposta").innerHTML = "DEFESA DO GOLEIRO";
  } else if (chute == 6 && goleiro == 6 && vento == 1) {
    document.getElementById("resposta").innerHTML = "DEFESA DO GOLEIRO";
  }
  document.getElementById("ok").disabled = true;
  document.getElementById("ok2").disabled = false;
}
