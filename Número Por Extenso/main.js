var num_total = 0
var num = 0
var calculo = 0
var unidade = 0
var unidade_txt = ''
var dezena = 0
var dezena_txt = ''
var centena = 0
var centena_txt = ''
var unidade_milhar = 0
var unidade_milhar_txt = ''
var dezena_milhar = 0
var dezena_milhar_txt = ''
var centena_milhar = 0
var centena_milhar_txt = ''
var milhao = 0
var milhao_txt = ''

function analisar(numero) {
    num_total = Number(numero)

    num = Number(numero)

    unidade = num % 10
    
    num = (num - unidade) / 10
    
    dezena = num % 10
    
    num = (num - dezena) / 10

    centena = num % 10
    
    num = (num - centena) / 10
    
    unidade_milhar = num % 10
    
    num = (num - unidade_milhar) / 10
    
    dezena_milhar = num % 10
    
    num = (num - dezena_milhar) / 10
    
    centena_milhar = num % 10
    
    if (unidade == 0) {
        unidade_txt = 'zero'
    } else if (unidade == 1) {
        unidade_txt = 'um'
    } else if (unidade == 2) {
        unidade_txt = 'dois'
    } else if (unidade == 3) {
        unidade_txt = 'tres'
    } else if (unidade == 4) {
        unidade_txt = 'quatro'
    } else if (unidade == 5) {
        unidade_txt = 'cinco'
    } else if (unidade == 6) {
        unidade_txt = 'seis'
    } else if (unidade == 7) {
        unidade_txt = 'sete'
    } else if (unidade == 8) {
        unidade_txt = 'oito'
    } else if (unidade == 9) {
        unidade_txt = 'nove'
    }

    if (dezena == 1 && unidade == 0) {
        dezena_txt = 'dez'
    } else if (dezena == 1 && unidade == 1) {
        dezena_txt = 'onze'
    } else if (dezena == 1 && unidade == 2) {
        dezena_txt = 'doze'
    } else if (dezena == 1 && unidade == 3) {
        dezena_txt = 'treze'
    } else if (dezena == 1 && unidade == 4) {
        dezena_txt = 'catorze'
    } else if (dezena == 1 && unidade == 5) {
        dezena_txt = 'quinze'
    } else if (dezena == 1 && unidade == 6) {
        dezena_txt = 'dezesseis'
    } else if (dezena == 1 && unidade == 7) {
        dezena_txt = 'dezesete'
    } else if (dezena == 1 && unidade == 8) {
        dezena_txt = 'dezoito'
    } else if (dezena == 1 && unidade == 9) {
        dezena_txt = 'dezenove'
    } else if (dezena == 2 && unidade == 0) {
        dezena_txt = 'vinte'
    } else if (dezena == 2 && unidade >= 1) {
        dezena_txt = `vinte e ${unidade_txt}`
    } else if (dezena == 3 && unidade == 0) {
        dezena_txt = 'trinta'
    } else if (dezena == 3 && unidade >= 1) {
        dezena_txt = `trinta e ${unidade_txt}`
    } else if (dezena == 4 && unidade == 0) {
        dezena_txt = 'quarenta'
    } else if (dezena == 4 && unidade >= 1) {
        dezena_txt = `quarenta e ${unidade_txt}`
    } else if (dezena == 5 && unidade == 0) {
        dezena_txt = 'cinquenta'
    } else if (dezena == 5 && unidade >= 1) {
        dezena_txt = `cinquenta e ${unidade_txt}`
    } else if (dezena == 6 && unidade == 0) {
        dezena_txt = 'secenta'
    } else if (dezena == 6 && unidade >= 1) {
        dezena_txt = `secenta e ${unidade_txt}`
    } else if (dezena == 7 && unidade == 0) {
        dezena_txt = 'setenta'
    } else if (dezena == 7 && unidade >= 1) {
        dezena_txt = `setenta e ${unidade_txt}`
    } else if (dezena == 8 && unidade == 0) {
        dezena_txt = 'oitenta'
    } else if (dezena == 8 && unidade >= 1) {
        dezena_txt = `oitenta e ${unidade_txt}`
    } else if (dezena == 9 && unidade == 0) {
        dezena_txt = 'noventa'
    } else if (dezena == 9 && unidade >= 1) {
        dezena_txt = `noventa e ${unidade_txt}`
    }


    if (centena == 1 && dezena == 0 && unidade == 0) {
        centena_txt = 'cem'
    } else if (centena == 1 && dezena == 0 && unidade > 0) {
        centena_txt = `cento e ${unidade_txt}` 
    } else if (centena == 1 && dezena > 0 && unidade >= 0) {
        centena_txt = `cento e ${dezena_txt}` 
    }

    if (centena == 2 && dezena == 0 && unidade == 0) {
        centena_txt = 'duzentos'
    } else if (centena == 2 && dezena == 0 && unidade > 0) {
        centena_txt = `duzentos e ${unidade_txt}` 
    } else if (centena == 2 && dezena > 0 && unidade >= 0) {
        centena_txt = `duzentos e ${dezena_txt}` 
    }

    if (centena == 3 && dezena == 0 && unidade == 0) {
        centena_txt = 'trezentos'
    } else if (centena == 3 && dezena == 0 && unidade > 0) {
        centena_txt = `trezentos e ${unidade_txt}` 
    } else if (centena == 3 && dezena > 0 && unidade >= 0) {
        centena_txt = `trezentos e ${dezena_txt}` 
    }

    if (centena == 4 && dezena == 0 && unidade == 0) {
        centena_txt = 'quatrocentos'
    } else if (centena == 4 && dezena == 0 && unidade > 0) {
        centena_txt = `quatrocentos e ${unidade_txt}` 
    } else if (centena == 4 && dezena > 0 && unidade >= 0) {
        centena_txt = `quatrocentos e ${dezena_txt}` 
    }

    if (centena == 5 && dezena == 0 && unidade == 0) {
        centena_txt = 'quinhentos'
    } else if (centena == 5 && dezena == 0 && unidade > 0) {
        centena_txt = `quinhentos e ${unidade_txt}` 
    } else if (centena == 5 && dezena > 0 && unidade >= 0) {
        centena_txt = `quinhentos e ${dezena_txt}` 
    }

    if (centena == 6 && dezena == 0 && unidade == 0) {
        centena_txt = 'seiscentos'
    } else if (centena == 6 && dezena == 0 && unidade > 0) {
        centena_txt = `seiscentos e ${unidade_txt}` 
    } else if (centena == 6 && dezena > 0 && unidade >= 0) {
        centena_txt = `seiscentos e ${dezena_txt}` 
    }

    if (centena == 7 && dezena == 0 && unidade == 0) {
        centena_txt = 'setecentos'
    } else if (centena == 7 && dezena == 0 && unidade > 0) {
        centena_txt = `setecentos e ${unidade_txt}` 
    } else if (centena == 7 && dezena > 0 && unidade >= 0) {
        centena_txt = `setecentos e ${dezena_txt}` 
    }

    if (centena == 8 && dezena == 0 && unidade == 0) {
        centena_txt = 'oitocentos'
    } else if (centena == 8 && dezena == 0 && unidade > 0) {
        centena_txt = `oitocentos e ${unidade_txt}` 
    } else if (centena == 8 && dezena > 0 && unidade >= 0) {
        centena_txt = `oitocentos e ${dezena_txt}` 
    }

    if (centena == 9 && dezena == 0 && unidade == 0) {
        centena_txt = 'novecentos'
    } else if (centena == 9 && dezena == 0 && unidade > 0) {
        centena_txt = `novecentos e ${unidade_txt}` 
    } else if (centena == 9 && dezena > 0 && unidade >= 0) {
        centena_txt = `novecentos e ${dezena_txt}` 
    }

    

    if (unidade_milhar == 1 && centena == 0 && dezena == 0 && unidade == 0) {
        unidade_milhar_txt = 'mil'
    } else if (unidade_milhar == 1 && centena == 0 && dezena == 0 && unidade > 0) {
        unidade_milhar_txt = `mil e ${unidade_txt}`
    } else if (unidade_milhar == 1 && centena == 0 && dezena > 0 && unidade >= 0) {
        unidade_milhar_txt = `mil e ${dezena_txt}`
    } else if (unidade_milhar == 1 && centena > 0 && dezena >= 0 && unidade >= 0) {
        unidade_milhar_txt = `mil ${centena_txt}`
    }

    if (unidade_milhar == 2 && centena == 0 && dezena == 0 && unidade == 0) {
        unidade_milhar_txt = 'dois mil'
    } else if (unidade_milhar == 2 && centena == 0 && dezena == 0 && unidade > 0) {
        unidade_milhar_txt = `dois mil e ${unidade_txt}`
    } else if (unidade_milhar == 2 && centena == 0 && dezena > 0 && unidade >= 0) {
        unidade_milhar_txt = `dois mil e ${dezena_txt}`
    } else if (unidade_milhar == 2 && centena > 0 && dezena >= 0 && unidade >= 0) {
        unidade_milhar_txt = `dois mil ${centena_txt}`
    }

    if (unidade_milhar == 3 && centena == 0 && dezena == 0 && unidade == 0) {
        unidade_milhar_txt = 'tres mil'
    } else if (unidade_milhar == 3 && centena == 0 && dezena == 0 && unidade > 0) {
        unidade_milhar_txt = `tres mil e ${unidade_txt}`
    } else if (unidade_milhar == 3 && centena == 0 && dezena > 0 && unidade >= 0) {
        unidade_milhar_txt = `tres mil e ${dezena_txt}`
    } else if (unidade_milhar == 3 && centena > 0 && dezena >= 0 && unidade >= 0) {
        unidade_milhar_txt = `tres mil ${centena_txt}`
    }

    if (unidade_milhar == 4 && centena == 0 && dezena == 0 && unidade == 0) {
        unidade_milhar_txt = 'quatro mil'
    } else if (unidade_milhar == 4 && centena == 0 && dezena == 0 && unidade > 0) {
        unidade_milhar_txt = `quatro mil e ${unidade_txt}`
    } else if (unidade_milhar == 4 && centena == 0 && dezena > 0 && unidade >= 0) {
        unidade_milhar_txt = `quatro mil e ${dezena_txt}`
    } else if (unidade_milhar == 4 && centena > 0 && dezena >= 0 && unidade >= 0) {
        unidade_milhar_txt = `quatro mil ${centena_txt}`
    }

    if (unidade_milhar == 5 && centena == 0 && dezena == 0 && unidade == 0) {
        unidade_milhar_txt = 'cinco mil'
    } else if (unidade_milhar == 5 && centena == 0 && dezena == 0 && unidade > 0) {
        unidade_milhar_txt = `cinco mil e ${unidade_txt}`
    } else if (unidade_milhar == 5 && centena == 0 && dezena > 0 && unidade >= 0) {
        unidade_milhar_txt = `cinco mil e ${dezena_txt}`
    } else if (unidade_milhar == 5 && centena > 0 && dezena >= 0 && unidade >= 0) {
        unidade_milhar_txt = `cinco mil ${centena_txt}`
    }

    if (unidade_milhar == 6 && centena == 0 && dezena == 0 && unidade == 0) {
        unidade_milhar_txt = 'seis mil'
    } else if (unidade_milhar == 6 && centena == 0 && dezena == 0 && unidade > 0) {
        unidade_milhar_txt = `seis mil e ${unidade_txt}`
    } else if (unidade_milhar == 6 && centena == 0 && dezena > 0 && unidade >= 0) {
        unidade_milhar_txt = `seis mil e ${dezena_txt}`
    } else if (unidade_milhar == 6 && centena > 0 && dezena >= 0 && unidade >= 0) {
        unidade_milhar_txt = `seis mil ${centena_txt}`
    }

    if (unidade_milhar == 7 && centena == 0 && dezena == 0 && unidade == 0) {
        unidade_milhar_txt = 'sete mil'
    } else if (unidade_milhar == 7 && centena == 0 && dezena == 0 && unidade > 0) {
        unidade_milhar_txt = `sete mil e ${unidade_txt}`
    } else if (unidade_milhar == 7 && centena == 0 && dezena > 0 && unidade >= 0) {
        unidade_milhar_txt = `sete mil e ${dezena_txt}`
    } else if (unidade_milhar == 7 && centena > 0 && dezena >= 0 && unidade >= 0) {
        unidade_milhar_txt = `sete mil ${centena_txt}`
    }

    if (unidade_milhar == 8 && centena == 0 && dezena == 0 && unidade == 0) {
        unidade_milhar_txt = 'oito mil'
    } else if (unidade_milhar == 8 && centena == 0 && dezena == 0 && unidade > 0) {
        unidade_milhar_txt = `oito mil e ${unidade_txt}`
    } else if (unidade_milhar == 8 && centena == 0 && dezena > 0 && unidade >= 0) {
        unidade_milhar_txt = `oito mil e ${dezena_txt}`
    } else if (unidade_milhar == 8 && centena > 0 && dezena >= 0 && unidade >= 0) {
        unidade_milhar_txt = `oito mil ${centena_txt}`
    }

    if (unidade_milhar == 9 && centena == 0 && dezena == 0 && unidade == 0) {
        unidade_milhar_txt = 'nove mil'
    } else if (unidade_milhar == 9 && centena == 0 && dezena == 0 && unidade > 0) {
        unidade_milhar_txt = `nove mil e ${unidade_txt}`
    } else if (unidade_milhar == 9 && centena == 0 && dezena > 0 && unidade >= 0) {
        unidade_milhar_txt = `nove mil e ${dezena_txt}`
    } else if (unidade_milhar == 9 && centena > 0 && dezena >= 0 && unidade >= 0) {
        unidade_milhar_txt = `nove mil ${centena_txt}`
    }


    
    if (dezena_milhar == 1 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'dez mil'
    } else if (dezena_milhar == 1 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `dez mil e ${unidade_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 0 && centena == 0 && dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `dez mil e ${dezena_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 0 && centena > 0 && dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `dez mil e ${centena_txt}`
    } 

    if (dezena_milhar == 1 && unidade_milhar == 1 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'onze mil'
    } else if (dezena_milhar == 1 && unidade_milhar == 1 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `onze mil e ${unidade_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 1 && centena == 0 && dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `onze mil e ${dezena_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 1 && centena > 0 && dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `onze mil e ${centena_txt}`
    } 

    if (dezena_milhar == 1 && unidade_milhar == 3 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'treze mil'
    } else if (dezena_milhar == 1 && unidade_milhar == 3 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `treze mil e ${unidade_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 3 && centena == 0 && dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `treze mil e ${dezena_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 3 && centena > 0 && dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `treze mil e ${centena_txt}`
    } 

    if (dezena_milhar == 1 && unidade_milhar == 4 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'catorze mil'
    } else if (dezena_milhar == 1 && unidade_milhar == 4 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `catorze mil e ${unidade_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 4 && centena == 0 && dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `catorze mil e ${dezena_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 4 && centena > 0 && dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `catorze mil e ${centena_txt}`
    } 

    if (dezena_milhar == 1 && unidade_milhar == 5 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'quinze mil'
    } else if (dezena_milhar == 1 && unidade_milhar == 5 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `quinze mil e ${unidade_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 5 && centena == 0 && dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `quinze mil e ${dezena_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 5 && centena > 0 && dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `quinze mil e ${centena_txt}`
    } 

    if (dezena_milhar == 1 && unidade_milhar == 6 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'dezesseis'
    } else if (dezena_milhar == 1 && unidade_milhar == 6 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `dezesseis e ${unidade_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 6 && centena == 0 && dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `dezesseis e ${dezena_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 6 && centena > 0 && dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `dezesseis e ${centena_txt}`
    } 
    if (dezena_milhar == 1 && unidade_milhar == 7 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'dezessete mil'
    } else if (dezena_milhar == 1 && unidade_milhar == 7 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `dezessete mil e ${unidade_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 7 && centena == 0 && dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `dezessete mil e ${dezena_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 7 && centena > 0 && dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `dezessete mil e ${centena_txt}`
    } 

    if (dezena_milhar == 1 && unidade_milhar == 8 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'dezoito'
    } else if (dezena_milhar == 1 && unidade_milhar == 8 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `dezoito e ${unidade_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 8 && centena == 0 && dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `dezoito e ${dezena_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 8 && centena > 0 && dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `dezoito e ${centena_txt}`
    } 
    if (dezena_milhar == 1 && unidade_milhar == 9 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'dezenove mil'
    } else if (dezena_milhar == 1 && unidade_milhar == 9 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `dezenove mil e ${unidade_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 9 && centena == 0 && dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `dezenove mil e ${dezena_txt}`
    } else if (dezena_milhar == 1 && unidade_milhar == 9 && centena > 0 && dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `dezenove mil e ${centena_txt}`
    } 
    //20MIL
    if (dezena_milhar == 2 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'vinte mil'
    } else if (dezena_milhar == 2 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `vinte mil e ${unidade_txt}`
    } else if (dezena_milhar == 2 && unidade_milhar == 0 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `vinte mil e ${dezena_txt}`
    } else if (dezena_milhar == 2 && unidade_milhar == 0 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `vinte mil e ${centena_txt}`
    } else if (dezena_milhar == 2 && unidade_milhar == 1 && centena == 0 &&  dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `vinte e um mil e ${unidade_txt}`
    } else if (dezena_milhar == 2 && unidade_milhar == 1 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `vinte e um mil e ${dezena_txt}`
    } else if (dezena_milhar == 2 && unidade_milhar == 1 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `vinte e um mil e ${centena_txt}`
    } else if (dezena_milhar == 2 && unidade_milhar == 1 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = `vinte e um mil`
    } else if (dezena_milhar == 2 && unidade_milhar > 1) {
        dezena_milhar_txt = `vinte ${unidade_milhar_txt}`
    } 

    if (dezena_milhar == 3 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'trinta mil'
    } else if (dezena_milhar == 3 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `trinta mil e ${unidade_txt}`
    } else if (dezena_milhar == 3 && unidade_milhar == 0 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `trinta mil e ${dezena_txt}`
    } else if (dezena_milhar == 3 && unidade_milhar == 0 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `trinta mil e ${centena_txt}`
    } else if (dezena_milhar == 3 && unidade_milhar == 1 && centena == 0 &&  dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `trinta e um mil e ${unidade_txt}`
    } else if (dezena_milhar == 3 && unidade_milhar == 1 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `trinta e um mil e ${dezena_txt}`
    } else if (dezena_milhar == 3 && unidade_milhar == 1 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `trinta e um mil e ${centena_txt}`
    } else if (dezena_milhar == 3 && unidade_milhar == 1 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = `trinta e um mil`
    } else if (dezena_milhar == 3 && unidade_milhar > 1) {
        dezena_milhar_txt = `trinta ${unidade_milhar_txt}`
    } 

    if (dezena_milhar == 4 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'quarenta mil'
    } else if (dezena_milhar == 4 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `quarenta mil e ${unidade_txt}`
    } else if (dezena_milhar == 4 && unidade_milhar == 0 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `quarenta mil e ${dezena_txt}`
    } else if (dezena_milhar == 4 && unidade_milhar == 0 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `quarenta mil e ${centena_txt}`
    } else if (dezena_milhar == 4 && unidade_milhar == 1 && centena == 0 &&  dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `quarenta e um mil e ${unidade_txt}`
    } else if (dezena_milhar == 4 && unidade_milhar == 1 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `quarenta e um mil e ${dezena_txt}`
    } else if (dezena_milhar == 4 && unidade_milhar == 1 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `quarenta e um mil e ${centena_txt}`
    } else if (dezena_milhar == 4 && unidade_milhar == 1 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = `quarenta e um mil`
    } else if (dezena_milhar == 4 && unidade_milhar > 1) {
        dezena_milhar_txt = `quarenta ${unidade_milhar_txt}`
    } 

    if (dezena_milhar == 5 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'cinquenta mil'
    } else if (dezena_milhar == 5 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `cinquenta mil e ${unidade_txt}`
    } else if (dezena_milhar == 5 && unidade_milhar == 0 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `cinquenta mil e ${dezena_txt}`
    } else if (dezena_milhar == 5 && unidade_milhar == 0 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `cinquenta mil e ${centena_txt}`
    } else if (dezena_milhar == 5 && unidade_milhar == 1 && centena == 0 &&  dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `cinquenta e um mil e ${unidade_txt}`
    } else if (dezena_milhar == 5 && unidade_milhar == 1 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `cinquenta e um mil e ${dezena_txt}`
    } else if (dezena_milhar == 5 && unidade_milhar == 1 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `cinquenta e um mil e ${centena_txt}`
    } else if (dezena_milhar == 5 && unidade_milhar == 1 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = `cinquenta e um mil`
    } else if (dezena_milhar == 5 && unidade_milhar > 1) {
        dezena_milhar_txt = `cinquenta ${unidade_milhar_txt}`
    } 

    if (dezena_milhar == 6 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'secenta mil'
    } else if (dezena_milhar == 6 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `secenta mil e ${unidade_txt}`
    } else if (dezena_milhar == 6 && unidade_milhar == 0 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `secenta mil e ${dezena_txt}`
    } else if (dezena_milhar == 6 && unidade_milhar == 0 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `secenta mil e ${centena_txt}`
    } else if (dezena_milhar == 6 && unidade_milhar == 1 && centena == 0 &&  dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `secenta e um mil e ${unidade_txt}`
    } else if (dezena_milhar == 6 && unidade_milhar == 1 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `secenta e um mil e ${dezena_txt}`
    } else if (dezena_milhar == 6 && unidade_milhar == 1 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `secenta e um mil e ${centena_txt}`
    } else if (dezena_milhar == 6 && unidade_milhar == 1 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = `secenta e um mil`
    } else if (dezena_milhar == 6 && unidade_milhar > 1) {
        dezena_milhar_txt = `secenta ${unidade_milhar_txt}`
    } 

    if (dezena_milhar == 7 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'setenta mil'
    } else if (dezena_milhar == 7 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `setenta mil e ${unidade_txt}`
    } else if (dezena_milhar == 7 && unidade_milhar == 0 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `setenta mil e ${dezena_txt}`
    } else if (dezena_milhar == 7 && unidade_milhar == 0 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `setenta mil e ${centena_txt}`
    } else if (dezena_milhar == 7 && unidade_milhar == 1 && centena == 0 &&  dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `setenta e um mil e ${unidade_txt}`
    } else if (dezena_milhar == 7 && unidade_milhar == 1 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `setenta e um mil e ${dezena_txt}`
    } else if (dezena_milhar == 7 && unidade_milhar == 1 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `setenta e um mil e ${centena_txt}`
    } else if (dezena_milhar == 7 && unidade_milhar == 1 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = `setenta e um mil`
    } else if (dezena_milhar == 7 && unidade_milhar > 1) {
        dezena_milhar_txt = `setenta ${unidade_milhar_txt}`
    } 

    if (dezena_milhar == 8 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'oitenta mil'
    } else if (dezena_milhar == 8 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `oitenta mil e ${unidade_txt}`
    } else if (dezena_milhar == 8 && unidade_milhar == 0 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `oitenta mil e ${dezena_txt}`
    } else if (dezena_milhar == 8 && unidade_milhar == 0 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `oitenta mil e ${centena_txt}`
    } else if (dezena_milhar == 8 && unidade_milhar == 1 && centena == 0 &&  dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `oitenta e um mil e ${unidade_txt}`
    } else if (dezena_milhar == 8 && unidade_milhar == 1 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `oitenta e um mil e ${dezena_txt}`
    } else if (dezena_milhar == 8 && unidade_milhar == 1 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `oitenta e um mil e ${centena_txt}`
    } else if (dezena_milhar == 8 && unidade_milhar == 1 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = `oitenta e um mil`
    } else if (dezena_milhar == 8 && unidade_milhar > 1) {
        dezena_milhar_txt = `oitenta ${unidade_milhar_txt}`
    } 

    if (dezena_milhar == 9 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = 'noventa mil'
    } else if (dezena_milhar == 9 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `noventa mil e ${unidade_txt}`
    } else if (dezena_milhar == 9 && unidade_milhar == 0 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `noventa mil e ${dezena_txt}`
    } else if (dezena_milhar == 9 && unidade_milhar == 0 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `noventa mil e ${centena_txt}`
    } else if (dezena_milhar == 9 && unidade_milhar == 1 && centena == 0 &&  dezena == 0 && unidade > 0) {
        dezena_milhar_txt = `noventa e um mil e ${unidade_txt}`
    } else if (dezena_milhar == 9 && unidade_milhar == 1 && centena == 0 &&  dezena > 0 && unidade >= 0) {
        dezena_milhar_txt = `noventa e um mil e ${dezena_txt}`
    } else if (dezena_milhar == 9 && unidade_milhar == 1 && centena > 0 &&  dezena >= 0 && unidade >= 0) {
        dezena_milhar_txt = `noventa e um mil e ${centena_txt}`
    } else if (dezena_milhar == 9 && unidade_milhar == 1 && centena == 0 && dezena == 0 && unidade == 0) {
        dezena_milhar_txt = `noventa e um mil`
    } else if (dezena_milhar == 9 && unidade_milhar > 1) {
        dezena_milhar_txt = `noventa ${unidade_milhar_txt}`
    } 
//Centena
if (centena_milhar == 1 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
    centena_milhar_txt = 'cem mil'
} else if (centena_milhar == 1 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
    centena_milhar_txt = 'cem mil e ' + unidade_txt
} else if (centena_milhar == 1 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena > 0 && unidade >= 0) {
    centena_milhar_txt = 'cem mil e ' + dezena_txt
} else if (centena_milhar == 1 && dezena_milhar == 0 && unidade_milhar == 0 && centena > 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = 'cem mil e ' + centena_txt
} else if (centena_milhar == 1 && dezena_milhar == 0 && unidade_milhar > 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `cento e ${unidade_milhar_txt}`
} else if (centena_milhar == 1 && dezena_milhar > 0 && unidade_milhar >= 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `cento e ${dezena_milhar_txt}`
} 

if (centena_milhar == 2 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
    centena_milhar_txt = 'duzentos mil'
} else if (centena_milhar == 2 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
    centena_milhar_txt = 'duzentos mil e ' + unidade_txt
} else if (centena_milhar == 2 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena > 0 && unidade >= 0) {
    centena_milhar_txt = 'duzentos mil e ' + dezena_txt
} else if (centena_milhar == 2 && dezena_milhar == 0 && unidade_milhar == 0 && centena > 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = 'duzentos mil e ' + centena_txt
} else if (centena_milhar == 2 && dezena_milhar == 0 && unidade_milhar > 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `duzentos e ${unidade_milhar_txt}`
} else if (centena_milhar == 2 && dezena_milhar > 0 && unidade_milhar >= 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `duzentos e ${dezena_milhar_txt}`
} 

if (centena_milhar == 3 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
    centena_milhar_txt = 'trezentos mil'
} else if (centena_milhar == 3 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
    centena_milhar_txt = 'trezentos mil e ' + unidade_txt
} else if (centena_milhar == 3 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena > 0 && unidade >= 0) {
    centena_milhar_txt = 'trezentos mil e ' + dezena_txt
} else if (centena_milhar == 3 && dezena_milhar == 0 && unidade_milhar == 0 && centena > 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = 'trezentos mil e ' + centena_txt
} else if (centena_milhar == 3 && dezena_milhar == 0 && unidade_milhar > 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `trezentos e ${unidade_milhar_txt}`
} else if (centena_milhar == 3 && dezena_milhar > 0 && unidade_milhar >= 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `trezentos e ${dezena_milhar_txt}`
} 

if (centena_milhar == 4 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
    centena_milhar_txt = 'quatrocentros mil'
} else if (centena_milhar == 4 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
    centena_milhar_txt = 'quatrocentros mil e ' + unidade_txt
} else if (centena_milhar == 4 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena > 0 && unidade >= 0) {
    centena_milhar_txt = 'quatrocentros mil e ' + dezena_txt
} else if (centena_milhar == 4 && dezena_milhar == 0 && unidade_milhar == 0 && centena > 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = 'quatrocentros mil e ' + centena_txt
} else if (centena_milhar == 4 && dezena_milhar == 0 && unidade_milhar > 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `quatrocentros e ${unidade_milhar_txt}`
} else if (centena_milhar == 4 && dezena_milhar > 0 && unidade_milhar >= 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `quatrocentros e ${dezena_milhar_txt}`
} 

if (centena_milhar == 5 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
    centena_milhar_txt = 'quinhentos mil'
} else if (centena_milhar == 5 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
    centena_milhar_txt = 'quinhentos mil e ' + unidade_txt
} else if (centena_milhar == 5 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena > 0 && unidade >= 0) {
    centena_milhar_txt = 'quinhentos mil e ' + dezena_txt
} else if (centena_milhar == 5 && dezena_milhar == 0 && unidade_milhar == 0 && centena > 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = 'quinhentos mil e ' + centena_txt
} else if (centena_milhar == 5 && dezena_milhar == 0 && unidade_milhar > 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `quinhentos e ${unidade_milhar_txt}`
} else if (centena_milhar == 5 && dezena_milhar > 0 && unidade_milhar >= 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `quinhentos e ${dezena_milhar_txt}`
} 

if (centena_milhar == 6 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
    centena_milhar_txt = 'seiscentos mil'
} else if (centena_milhar == 6 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
    centena_milhar_txt = 'seiscentos mil e ' + unidade_txt
} else if (centena_milhar == 6 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena > 0 && unidade >= 0) {
    centena_milhar_txt = 'seiscentos mil e ' + dezena_txt
} else if (centena_milhar == 6 && dezena_milhar == 0 && unidade_milhar == 0 && centena > 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = 'seiscentos mil e ' + centena_txt
} else if (centena_milhar == 6 && dezena_milhar == 0 && unidade_milhar > 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `seiscentos e ${unidade_milhar_txt}`
} else if (centena_milhar == 6 && dezena_milhar > 0 && unidade_milhar >= 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `seiscentos e ${dezena_milhar_txt}`
} 

if (centena_milhar == 7 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
    centena_milhar_txt = 'setecentos mil'
} else if (centena_milhar == 7 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
    centena_milhar_txt = 'setecentos mil e ' + unidade_txt
} else if (centena_milhar == 7 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena > 0 && unidade >= 0) {
    centena_milhar_txt = 'setecentos mil e ' + dezena_txt
} else if (centena_milhar == 7 && dezena_milhar == 0 && unidade_milhar == 0 && centena > 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = 'setecentos mil e ' + centena_txt
} else if (centena_milhar == 7 && dezena_milhar == 0 && unidade_milhar > 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `setecentos e ${unidade_milhar_txt}`
} else if (centena_milhar == 7 && dezena_milhar > 0 && unidade_milhar >= 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `setecentos e ${dezena_milhar_txt}`
} 

if (centena_milhar == 8 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
    centena_milhar_txt = 'oitocentos mil'
} else if (centena_milhar == 8 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
    centena_milhar_txt = 'oitocentos mil e ' + unidade_txt
} else if (centena_milhar == 8 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena > 0 && unidade >= 0) {
    centena_milhar_txt = 'oitocentos mil e ' + dezena_txt
} else if (centena_milhar == 8 && dezena_milhar == 0 && unidade_milhar == 0 && centena > 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = 'oitocentos mil e ' + centena_txt
} else if (centena_milhar == 8 && dezena_milhar == 0 && unidade_milhar > 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `oitocentos e ${unidade_milhar_txt}`
} else if (centena_milhar == 8 && dezena_milhar > 0 && unidade_milhar >= 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `oitocentos e ${dezena_milhar_txt}`
} 

if (centena_milhar == 9 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
    centena_milhar_txt = 'novecentos mil'
} else if (centena_milhar == 9 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena == 0 && unidade > 0) {
    centena_milhar_txt = 'novecentos mil e ' + unidade_txt
} else if (centena_milhar == 9 && dezena_milhar == 0 && unidade_milhar == 0 && centena == 0 && dezena > 0 && unidade >= 0) {
    centena_milhar_txt = 'novecentos mil e ' + dezena_txt
} else if (centena_milhar == 9 && dezena_milhar == 0 && unidade_milhar == 0 && centena > 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = 'novecentos mil e ' + centena_txt
} else if (centena_milhar == 9 && dezena_milhar == 0 && unidade_milhar > 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `novecentos e ${unidade_milhar_txt}`
} else if (centena_milhar == 9 && dezena_milhar > 0 && unidade_milhar >= 0 && centena >= 0 && dezena >= 0 && unidade >= 0) {
    centena_milhar_txt = `novecentos e ${dezena_milhar_txt}`
} 

    if (num_total < 10) {
        alert(unidade_txt)
    }
    if (num_total >= 10 && num_total < 100) {
        alert(dezena_txt)
    }
    if (num_total >= 100 && num_total < 1000) {
        alert(`${centena_txt}`)
    }
    if (num_total >= 1000 && num_total < 10000 ) {
        alert(`${unidade_milhar_txt}`)
    }
    if (num_total >= 10000 && num_total < 100000 ) {
        alert(`${dezena_milhar_txt}`)
    }
    if (num_total >= 100000 && num_total < 1000000 ) {
        alert(`${centena_milhar_txt}`)
    }
    if (num_total == 1000000) {
        alert('Um milhão')
    }
} 