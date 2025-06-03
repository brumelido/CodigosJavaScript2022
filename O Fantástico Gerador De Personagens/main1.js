var jogar
var idade
var classe
var nome
var v1, v2, c1, c2, c3
var background

function jogar(params) {
    foto = Math.floor(Math.random()*5)

    switch(foto){
        case 0:
            document.getElementById('imagem').innerHTML = `<img src="1507115.jpg" >`
            break;
        case 1:
        document.getElementById('imagem').innerHTML = `<img src="2210053.jpg" >`
            break;
        case 2:
        document.getElementById('imagem').innerHTML = `<img src="2210179.jpg" >`
            break;
        case 3:
        document.getElementById('imagem').innerHTML = `<img src="2700281.jpg" >`
            break;
        default:
                document.getElementById('imagem').innerHTML = `<img src="4261075.jpg" >`
                break;
    }
    idade=Math.floor(Math.random()*(101 - 18) + 18)
    console.log(idade);
    document.getElementById("idade").innerText= `Idade: ${idade}`

    classe =Math.floor(Math.random()*5)
     
    switch (classe) {
        case 0:
            document.getElementById('classe').innerHTML = "Sua classe é: Novato"
            break;
        case 1:
            document.getElementById('classe').innerHTML = "Sua classe é: Intermediario"
            break;
        case 2:
            document.getElementById('classe').innerHTML = "Sua classe é: Amador"
            break;
        case 3:
            document.getElementById('classe').innerHTML = "Sua classe é: Profissional"
            break;
       default:
       document.getElementById('classe').innerHTML = "Sua classe é: Mestre"
       break;
    }
v1 = Math.floor(Math.random()*5)
v2 = Math.floor(Math.random()*5)
v3 = Math.floor(Math.random()*5)
 switch(v1){
     case 0 :
         v1 = "A"
         break;
         case 1 :
            v1 = "E"
            break;
            case 2 :
                v1 = "I"
                break;
                case 3 :
                    v1 = "O"
                    break;
                    case 4 :
                        v1 = "U"
                        break;
    }
    switch(v2){
        case 0 :
            v2 = "a"
            break;
            case 1 :
               v2 = "e"
               break;
               case 2 :
                   v2 = "i"
                   break;
                   case 3 :
                       v2 = "o"
                       break;
                       case 4 :
                           v2 = "u"
                           break;
       }
       switch(v3){
        case 0 :
            v3 = "a"
            break;
            case 1 :
               v3 = "e"
               break;
               case 2 :
                   v3 = "i"
                   break;
                   case 3 :
                       v3 = "o"
                       break;
                       case 4 :
                           v3 = "u"
                           break;
       }

       c1 = Math.floor(Math.random()*21)
       c2 = Math.floor(Math.random()*21)
       console.log(c1)
       console.log(c2)
switch(c1){
case 0 :
c1 = "b"
break;
case 1 :
c1 = "c"
break;
case 2 :
c1 = "d"
break;
case 3 :
c1 = "f"
break;
case 4 :
c1 = "g"
break;
case 5 :
c1 = "h"
break;
case 6 :
c1 = "j"
break;
 case 7 :
c1 = "k"
 break;
case 8 :
c1 = "l"
break;
case 9 :
c1 = "m"
break; 
case 10 :
c1 = "n"
break;
case 11 :
c1 = "n"
break;
case 12 :
c1 = "p"
break;
case 13 :
c1 = "q"
break;
case 14 :
 c1 = "r"
 break;
case 15 :
c1 = "s"
break;
case 16 :
c1 = "t"
break;
case 17 :
c1 = "v"
break;
case 18 :
c1 = "w"
break;
case 19 :
c1 = "x"
break;
case 20 :
c1 = "y"
break;
case 21 :
c1 = "z"
break;
}
switch(c2){
case 0 :
c2 = "b"
break;
case 1 :
c2 = "c"
break;
case 2 :
c2 = "d"
break;
case 3 :
 c2 = "f"
break;
case 4 :
c2 = "g"
break;
case 5 :
c2 = "h"
break;
case 6 :
c2 = "j"
break;
case 7 :
c2 = "k"
break;
case 8 :
 c2 = "l"
 break;
case 9 :
c2 = "m"
 break; 
 case 10 :
c2 = "n"
break;
case 11 :
 c2 = "n"
 break;
case 12 :
c2 = "p"
break;
case 13 :
c2 = "q"
 break;
 case 14 :
c2 = "r"
break;
case 15 :
c2 = "s"
break;
case 16 :
c2 = "t"
break;
 case 17 :
 c2 = "v"
break;
 case 18 :
c2 = "w"
break;
case 19 :
c2 = "x"
break;
case 20 :
c2 = "y"
break;
case 21 :
c2 = "z"
break;
}
document.getElementById("nome").innerText = `Nome: ${v1}${c1}${v2}${c2}${v3}`
background = Math.floor(Math.random() * 5)

switch (background) {
    case 0:
        document.body.style.backgroundColor = '#008000'
        break;
    case 1:
        document.body.style.backgroundColor = '#00BFFF'
        break;
    case 2:
        document.body.style.backgroundColor = '#D2691E'
        break;
    case 3:
        document.body.style.backgroundColor = '#8B008B'
        break;
    default:
        document.body.style.backgroundColor = '	#800000'
        break;
}
if (pontos1 == 3) {
    document.getElementById("ganhador").innerText = `PARABÉNS !!! O VENCEDOR DA PARTIDA FOI ${nome1}`
    document.getElementById("img").style.visibility = "visible"
} else if(pontos2 == 3) {
   document.getElementById("ganhador").innerText = `PARABÉNS !!! O VENCEDOR DA PARTIDA FOI ${nome2} `
   document.getElementById("img").style.visibility = "visible"
}                              
}