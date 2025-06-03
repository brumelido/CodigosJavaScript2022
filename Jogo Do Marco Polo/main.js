var nmr;
var pc;
var i;
i = 0;
function número(params) {
  pc = document.getElementById("pc").innerText;

  pc = Math.floor(Math.random() * 20 + 1);
  console.log(pc);
}
function facil(params) {
  nmr = document.getElementById("nmr").value;

  i++;

  if (nmr == pc) {
    location.href = "ganhou.html";
  } else if (nmr > pc) {
    alert(`O número sorteado pelo PC é menor do que ${nmr}`);
  } else if (nmr < pc) {
    alert(`O número sorteado pelo PC é maior do que ${nmr}`);
  }
  if (i == 5) {
    location.href = "perdeu.html";
  }
}

function normal(params) {
  nmr = document.getElementById("nmr").value;

  i++;

  if (nmr == pc) {
    location.href = "ganhou.html";
  } else if (nmr > pc) {
    alert(`O número sorteado pelo PC é menor do que ${nmr}`);
  } else if (nmr < pc) {
    alert(`O número sorteado pelo PC é maior do que ${nmr}`);
  } 
  if (i == 3) {
    location.href = "perdeu.html";
  }
}

function bloodborne(params) {
  nmr = document.getElementById("nmr").value;


  if (nmr == pc) {
    location.href = "ganhou.html";
  } else {
    location.href = "perdeu.html";
  }
}
