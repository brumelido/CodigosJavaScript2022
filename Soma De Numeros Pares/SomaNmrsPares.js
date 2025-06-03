var nmr = undefined
var soma = 0
function fun(params) {
    nmr = Number(document.getElementById("nmr").value)

    for (var i = 0; i <= nmr; i++) {
        if (i % 2 == 0) {
            soma += i
        } 
    }
    console.log(soma)
}