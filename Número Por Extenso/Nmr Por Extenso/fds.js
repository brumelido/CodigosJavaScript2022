var dia = ''
var mes = ''
var ano = ''

var unidade_txt = ['Um', 'Dois', 'Tres', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove']
var dezena_txt = ['dez', "onze", "doze", "treze", "catorze", "quinze" ,"dezeseis" ,"dezesete", "dezoito","dezenove"]
var dezena2_txt = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'secenta', 'setenta', 'oitenta', 'noventa']
var centena_txt = ["cento","duzentos","trezentos","quatrocentos","quinhentos","seiscentos","setecentos","oitocentos","novecentos"]
var mes_txt = ["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Septembro","Outubro","Novembro","Dezembro"]
var ano_txt = ['dois mil e quatro']

var resultado = ''


function analisar(data) {
    dia = ''
    mes = ''
    ano = ''
    
    for (var i = 0; i < 2; i++) {
        dia += data[i]
    }
    for (var i = 3; i < 5; i++) {
        mes += data[i]
    }
    for (var i = 6; i < data.length; i++) {
        ano += data[i]
    }

    dia = Number(dia)

    if (dia == 31) {
        resultado = `dia Trinta e um`
    } else if(dia == 30) {
        resultado = `dia Trinta`
    } else if (dia == 20) {
        resultado = `dia Vinte`
    } else if(dia >= 21 && dia <= 29) {
        for (var i = 21; i <= 29; i++) {
            if(dia == i) {
                resultado = `dia vinte e ${unidade_txt[i-21]}`
            }
        }
    } else if (dia >= 10 && dia <= 19) {
        for (var i = 10; i <= 19; i++) {
            if(dia == i) {
                resultado = `dia ${dezena_txt[i-10]}`
            }
        }
    } else {
        for (var i = 1; i <= 9; i++) {
            if(dia == i) {
                resultado = `dia ${unidade_txt[i-1]}`
            }
        }
    }
    
    mes = Number(mes)
    
    for (var i = 1; i <= 12; i++) {
        if( mes == i) {
            resultado += ` de ${mes_txt[i-1]}`
        }
    }
    
    ano = Number(ano)

    num = ano

    unidade = num % 10
    
    num = (num - unidade) / 10
    
    dezena = num % 10
    
    num = (num - dezena) / 10

    centena = num % 10
    
    num = (num - centena) / 10
    
    unidade_milhar = num % 10

    if (ano < 10) {
        for (var i = 1; i <= 9; i++) {
            if(ano == i) {
                resultado += ` do ano ${unidade_txt[i-1]}`
            }
        }
    } else if (ano >= 10 && ano <= 19) {
        for (var i = 10; i <= 19; i++) {
            if(ano == i) {
                resultado += ` do ano ${dezena_txt[i-10]}`
            }
        }
    } else if (ano >= 20 && ano < 100) {
        for (var i = 2; i <= 9; i++) {
            if (dezena == i && unidade == 0) {
                resultado += ` do ano  ${dezena2_txt[i-2]}`
            } else {
                for (var j = 0; j <= 9; j++) {
                    if (dezena == i && unidade == j) {
                        resultado += ` do ano  ${dezena2_txt[i-2]} e ${unidade_txt[j-1]}`
                    }
                }
            }
        }

    } else if (ano >= 100 && ano < 1000) {
        for (var i = 1; i <= 9; i++) {
            if (centena == i && dezena == 0 && unidade == 0) {
                resultado += ` do ano ${centena_txt[i-1]}`
            } else if (centena == i && dezena == 0 && unidade > 0) {
                for (var j = 0; j <= 9; j++) {
                    if (centena == i && unidade == j) {
                        resultado += ` do ano  ${centena_txt[i-1]} e ${unidade_txt[j-1]}`
                    }
                }
            } else if(centena == i && dezena > 0 && unidade >= 0){
                for (var k = 0; k <= 9; k++) {
                    if (centena == i && unidade == j && dezena == k) {
                        resultado += ` do ano  ${centena_txt[i-1]} e ${dezena_txt[k-1]}`
                    }
                }
            }
        }
    }

}