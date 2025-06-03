//criar um programa para ler uma palavra e informar que ou não o simbolo @
function teste(params) {
  var palavra = "brun";

  if (contem_arroba(palavra)) {
    alert("Contem @");
  } else {
    alert("NÃO contem @");
  }
}
function contem_arroba(word) {
  var aux;
  aux = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "@") {
      return true;
    }
  }

  return aux;
}
