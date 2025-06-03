function executar(params) {
  var m = [
    ['a', 'e', 'i', 'o', 'u'],
    ['a', 'e', 'i', 'o', 'u'],
    ['a', 'e', 'i', 'o', 'u'],
    ['a', 'e', 'i', 'o', 'u'],
    ['a', 'e', 'i', 'o', 'u'],
  ];

  document.write(`a matriz contem o total de ${contar_as(m)} a|A`);
}
function contar_as(matriz) {
  var cont 

  cont = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] == "a" || matriz[i][j] == "A"){
        cont++;
      }
    }
  }
  return cont;
}

