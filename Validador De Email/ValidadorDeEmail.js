var email
function Validador(params) {
  email = parseInt(document.getElementById("email").value)
  for (let i = 0; i < email.length; i++) {
    if ((email != "@") && (email != ".com")) {
        alert("Não Pode Ser Validado")
        console.log("oi")
    } else {
        alert("Não Pode Ser Validado")
        console.log("oi 2")
    }
    
  }

}

/*
var plato = [
    [0,0,0,0,0,1,1,0,0,0],
    [0,0,0,0,0,1,0,1,0,1],
    [0,0,0,0,1,0,0,0,1,0],
    [0,0,0,1,1,1,1,0,1,0],
    [0,0,0,1,1,0,0,2,0,0],
    [0,0,0,0,0,0,0,1,0,0],
    [0,0,2,1,0,1,0,0,0,0],
    [0,2,0,0,1,0,0,2,2,2],
    [0,0,1,2,0,0,1,2,2,2],
    [0,0,2,2,1,2,0,2,2,2],
]
var mapa = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]
var x 
var y
var l = []

function Varrer(){
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
          if (matriz[i][j] == x || matriz[i][j] == y){
            cont++;
          }
        }
      }
}
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
  }*/