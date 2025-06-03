function média(params) {
    var a
    var b
    var c
    var d
    var r
    a = document.getElementById("a").value
    a = parseInt(a)
    b = document.getElementById("b").value
    b = parseInt(b)
    c = document.getElementById("c").value
    c = parseInt(c)
    d = document.getElementById("d").value
    d = parseInt(d)
     
    r =(a+b+c+d)/4

    document.getElementById("resposta0").innerText = r;

}
function soma(params) {
    var a
    var b
    var c
    var d
    var r

 
    a = document.getElementById("a").value
    a = parseInt(a)
    b = document.getElementById("b").value
    b = parseInt(b)
    c = document.getElementById("c").value
    c = parseInt(c)
    d = document.getElementById("d").value
    d = parseInt(d)

    r = a+b+c+d

    document.getElementById("resposta1").innerText = r;
}
function média1(params) {
    var a
    var b
    var c
    var d
    var r
    a = document.getElementById("a").value
    a = parseInt(a)
    b = document.getElementById("b").value
    b = parseInt(b)
    c = document.getElementById("c").value
    c = parseInt(c)
    d = document.getElementById("d").value
    d = parseInt(d)
     
    r = a/(a+b+c+d)*100

    document.getElementById("resposta2").innerText = r;
}
function média2(params) {
    var a
    var b
    var c
    var d
    var r
    a = document.getElementById("a").value
    a = parseInt(a)
    b = document.getElementById("b").value
    b = parseInt(b)
    c = document.getElementById("c").value
    c = parseInt(c)
    d = document.getElementById("d").value
    d = parseInt(d)
     
    r = b/(a+b+c+d)*100

    document.getElementById("resposta3").innerText = r;
}
function média3(params) {
    var a
    var b
    var c
    var d
    var r
    a = document.getElementById("a").value
    a = parseInt(a)
    b = document.getElementById("b").value
    b = parseInt(b)
    c = document.getElementById("c").value
    c = parseInt(c)
    d = document.getElementById("d").value
    d = parseInt(d)
     
    r = c/(a+b+c+d)*100

    document.getElementById("resposta4").innerText = r;
}
function média4(params) {
    var a
    var b
    var c
    var d
    var r

    a = document.getElementById("a").value
    a = parseInt(a)
    b = document.getElementById("b").value
    b = parseInt(b)
    c = document.getElementById("c").value
    c = parseInt(c)
    d = document.getElementById("d").value
    d = parseInt(d)
     
    r = d/(a+b+c+d)*100

    document.getElementById("resposta5").innerText = r;
}