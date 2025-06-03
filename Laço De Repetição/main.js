function rolar_dado5x(params) {
    var d6
    var i

    document.getElementById('resposta').innerText =  ""

    i = 0
    while ( i < 5) {
        d6 = Math.floor(Math.random()*6+1)
     document.getElementById('resposta').innerText += `[${d6}]`; 
     
    i++ //i = i + 1
    }//loop
}
function sortear_ate5(params) {
    var d6

    document.getElementById('resposta').innerText =  ""

    while ( d6 != 5) {
        d6 = Math.floor(Math.random()*6+1)
     document.getElementById('resposta').innerText += `[${d6}]`; 
     
    }//loop
}
function sortear_ate5_ou_5x(params) {
    var d6
    var i

    document.getElementById('resposta').innerHTML =  ""

    i = 0
    while ( d6 != 5 &&  i < 5) {
        d6 = Math.floor(Math.random()*6+1)
     document.getElementById('resposta').innerText += `[${d6}]`; 
     
     i++
    }//loop
}
//function laço_infinito(params) {
    //var d6
    //var i

    //document.getElementById('resposta').innerText =  ""
    //while (true) {
        //d6 = Math.floor(Math.random()*6+1)
       // document.getElementById('resposta').innerText += `[${d6}]`; 
     //i++
        //if( i = 5)   {
            //break
       // }
   // }
//}
function diga_byebye() {
    alert(`Boa Noite, Bruna!`)
}
