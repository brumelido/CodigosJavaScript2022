var nmr
function fun(params) {
    nmr = Number(document.getElementById("nmr").value) 

    for (let i = 1; i <= 10; i++) {
        console.log(nmr*i)
    }
}