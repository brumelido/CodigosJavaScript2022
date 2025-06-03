function teste(params) {
    var a = [77,45]
    //JSON : Conjunto do tipo chave <> valor
    //var x = {Nome:"Marcos Paulo", Idade: 30}
                //ou 
    var x = {
        Nome: "Marco Paulo",
        Idade: 33,
        Altura: 1.70,
        Filhos:["Jack","Bobby"], 
        Esposa: {
            Nome:"Alessandra",
            Idade: 30,
        }
    }


//vai escrever por cima
    a [0] = 30
//add depois do ultimo
    a [2] = 18
    a[a.length] = 20
//função de pilha (procurar)
    a.push(90)

    //document.write(a[1])
    //console.log(a)

    //document.write(x.Nome)
    //console.log(x)

    //document.write(x.Filhos[0])
    //console.log(x)

    document.write(x.Esposa.Nome)
}