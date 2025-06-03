var matriz = [
    ["1","2","3","4","5"],
    ["6","7","8","9","10"],
    ["11","12","13","14","15"],
    ["16","17","18","19","20"],
    ["21","22","23","24","25"]
]
function troca(params) {
   var SegundaLinha = matriz[1]
   var QuartaLinha = matriz[4]
   matriz[1] = QuartaLinha
   matriz[4] = SegundaLinha

   var Coluna0
   var Coluna3
    for (var i = 0; i < matriz.length; i++) {
        Coluna0 = matriz[i][0]
        Coluna3 = matriz[i][3]
        matriz[i][3] = Coluna0
        matriz[i][0] = Coluna3
    }
    var DiagonalPrincipal
    var DiagonalSecundaria

    for (let i = 0; i < matriz.length; i++) {
        DiagonalPrincipal = matriz[i][i]
        DiagonalSecundaria = matriz[i][5-1-i]

        matriz[i][i] = DiagonalSecundaria
        matriz[i][5-1-i] = DiagonalPrincipal
    }

    console.table(matriz)

}