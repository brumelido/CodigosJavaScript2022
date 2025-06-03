function Jogar(params) {
  var x = Number(document.getElementById("x").value); // número do usuário
  var nmr = Number(document.getElementById("nmr").value); // número sorteado
  var background // cor da página
//value é um atributo do input
  nmr = Math.floor(Math.random() * 100); 
  document.getElementById("nmr").innerText = nmr 

  if (x < nmr) {
    document.getElementById("resultado").innerText = "O PC GANHOU!!!"; //realiza o sorteio do número 
    document.getElementById("img").style.visibility = "visible" // document: acessao html - getElementById(especifica a procura)
  } else {
    document.getElementById("resultado").innerText = "O USUÁRIO 01 GANHOU!!!";
    document.getElementById("img").style.visibility = "visible"
  }
  background = Math.floor(Math.random() * 6) // realiza o sorteio das cores
    switch (background) {
      case 0:
          document.body.style.backgroundColor = '#008000'
          break;
      case 1:
          document.body.style.backgroundColor = '#ffee00'
          break;
      case 2:
          document.body.style.backgroundColor = '#D2691E'
          break;
      case 3:
          document.body.style.backgroundColor = '#8B008B'
          break;
      case 4:
          document.body.style.backgroundColor = '	#00BFFF'
          break;
      case 5:
          document.body.style.background = '#ff0090'
          break;
    }
}
function reiniciar() 
{
  location.reload();
}
