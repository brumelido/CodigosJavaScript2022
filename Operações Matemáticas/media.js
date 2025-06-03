function teste(){
    var v = [2,2,2,2,2,2,2]
    var media

    media = calc_media(v)
    document.write(media)
}
function calc_media(vetor) {
    var soma = 0

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    return soma/vetor.length
}