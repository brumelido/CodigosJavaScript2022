//nicknames
var nickname1;
var nickname2;

var posicao_jogador1 = '1';
var posicao_jogador2 = '2';
var casa_jogador1 = 0;
var casa_jogador2 = 0;

var casa_curada1;
var casa_curada2;

var antidoto_jogador1 = 3;
var antidoto_jogador2 = 3;

var dado1;
var dado2;
var somaDados;

var tabuleiro = [];
var armadilha;
var id = 1;
var rodadas = 1;

//jogar o jogo
function jogo() {
    //coletando os nicknames dos jogadores
    nickname1 = document.getElementById("nickname1").value;
    nickname2 = document.getElementById("nickname2").value;

    //altera o que aparece na página
    document.getElementById("nicknames").style.display = "none";

    //inserindo o tabuleiro
    document.getElementById("tabela").innerHTML =
        `<tr id='linha'>
            <td style="background: rgb(116, 163, 116)" id="inicio1">1</td>
        </tr>
        <tr>
            <td style="background: rgb(122, 64, 122)" id="inicio2">2</td>
        </tr>`;


    //sorteando as casas da armadilha
    for (i = 0; i < 10; i++) {
        armadilha = Math.floor(Math.random() * 30);

        //verifica se a armadilha sorteada já é uma armadilha
        while (tabuleiro[armadilha] == -1) {
            armadilha = Math.floor(Math.random() * 30);
        }

        tabuleiro[armadilha] = -1;
    }

    //preenchendo as casas restantes do tabuleiro
    for (let i = 0; i < 30; i++) {
        if (tabuleiro[i] != -1) {
            tabuleiro[i] = 0;
        }
        document.getElementById("linha").innerHTML += `<td rowspan="2" id="${id}">${tabuleiro[i]}</td>`;
        id++;
    }

    document.getElementById("linha").innerHTML += `<td rowspan="2" id="chegada">CHEGADA</td>`;
    document.getElementById("jogo").style.display = "flex";
    document.getElementById("player").innerText = `${nickname1}, faça a sua escolha`;
    document.getElementById("extra1").innerText = `${nickname1}`;
    document.getElementById("extra2").innerText = `${nickname2}`;
}

//rolar dados
function rolarDados() {
    //verifica quem está jogando
    if (rodadas % 2 != 0) {
        if (tabuleiro[casa_jogador1 - 1] == -1) {
            curarVeneno();

        } else {
            avancarCasas();

            //recoloca o -1 no elemento do vetor original
            tabuleiro[casa_curada1 - 1] = -1;

            //recoloca a armadilha na tela
            document.getElementById(casa_curada1).innerHTML = tabuleiro[casa_curada1 - 1];
        }
    } else {
        if (tabuleiro[_p - 1] == -1) {
            curarVeneno();

        } else {
            avancarCasas();

            //recoloca o -1 no elemento do vetor original
            tabuleiro[casa_curada2 - 1] = -1;

            //recoloca a armadilha na tela
            document.getElementById(casa_curada2).innerHTML = tabuleiro[casa_curada2 - 1];
        }
    }
}

//rolar dados p/ andar
function avancarCasas() {
    //sorteio de dados
    dado1 = Math.floor(Math.random() * 6 + 1);
    dado2 = Math.floor(Math.random() * 6 + 1);
    somaDados = dado1 + dado2;

    //cada rodada
    if (rodadas % 2 != 0) {
        document.getElementById("player").innerText = `${nickname2}, faça a sua escolha`;

        //atualiza os status do jogo
        document.getElementById("status").innerHTML =
            `Dado 1 = ${dado1} <br> Dado 2 = ${dado2}
        <br><br> ${nickname1} andará ${somaDados} casas`;

        //retornar a casa antiga para o valor do início
        if (rodadas != 1) {
            document.getElementById(casa_jogador1).innerText = tabuleiro[casa_jogador1 - 1];
            document.getElementById(casa_jogador1).style.backgroundColor = 'white';
        }

        //casa nova
        casa_jogador1 += somaDados;

        //se for igual, volta 1 casa
        if (casa_jogador1 == _p) {
            casa_jogador1 = casa_jogador1 - 1;
        } else {
            casa_jogador1 = casa_jogador1;
        }

        //verifica se alguém chegou ao fim do jogo
        if (casa_jogador1 > 30) {
            document.getElementById('casa1').innerHTML = `Está na casa chegada`;
            document.getElementById('chegada').innerHTML = `${nickname1} VENCEU`;
            document.getElementById('chegada').style.backgroundColor = 'rgb(116, 163, 116)';
            document.getElementById('status').innerHTML = `${nickname1} venceu`;
            document.getElementById("player").innerText = `PARTIDA ENCERRADA`;
            document.getElementById("botRolar").disabled = true;
            document.getElementById("botRolar").style.cursor = 'default';
            document.getElementById("botTomar").disabled = true;
            document.getElementById("botTomar").style.cursor = 'default';
            document.getElementById("botDesistir").disabled = true;
            document.getElementById("botDesistir").style.cursor = 'default';
        }

        //atualiza a posição do jog na tela com sua cor
        document.getElementById(casa_jogador1).innerText = posicao_jogador1;
        document.getElementById(casa_jogador1).style.backgroundColor = 'rgb(116, 163, 116)';
        document.getElementById('casa1').innerHTML = `Está na casa ${casa_jogador1}`;
        document.getElementById("inicio1").innerHTML = `INI`;
        document.getElementById("inicio1").style.backgroundColor = 'white';

        //verifica se caiu na armadilha
        if (tabuleiro[casa_jogador1 - 1] == -1) {
            document.getElementById('status').innerHTML += `<br> ${nickname1} caiu na armadilha`;
        }

    } else {
        document.getElementById("player").innerText = `${nickname1}, faça a sua escolha`;

        //atualiza os status do jogo
        document.getElementById("status").innerHTML =
            `Dado 1 = ${dado1} <br> Dado 2 = ${dado2}
        <br><br> ${nickname2} andará ${somaDados} casas`;

        //retornar a casa antiga para o valor do início
        if (rodadas != 2) {
            document.getElementById(_p).innerText = tabuleiro[_p - 1];
            document.getElementById(_p).style.backgroundColor = 'white';
        }

        //casa nova
        _p += somaDados;

        //se for igual, volta 1 casa
        if (_p == casa_jogador1) {
            _p = _p - 1;
        } else {
            _p = _p;
        }

        //verifica se alguém chegou ao fim do jogo
        if (_p > 30) {
            document.getElementById('casa2').innerHTML = `Está na casa chegada`;
            document.getElementById('chegada').innerHTML = `${nickname2} VENCEU`;
            document.getElementById('chegada').style.backgroundColor = 'rgb(122, 64, 122)';
            document.getElementById('status').innerHTML = `${nickname2} venceu`;
            document.getElementById("player").innerText = `PARTIDA ENCERRADA`;
            document.getElementById("botRolar").disabled = true;
            document.getElementById("botRolar").style.cursor = 'default';
            document.getElementById("botTomar").disabled = true;
            document.getElementById("botTomar").style.cursor = 'default';
            document.getElementById("botDesistir").disabled = true;
            document.getElementById("botDesistir").style.cursor = 'default';
        }

        //atualiza a posição do jog na tela com sua cor
        document.getElementById(_p).innerText = posicao_jogador2;
        document.getElementById(_p).style.backgroundColor = 'rgb(122, 64, 122)';
        document.getElementById('casa2').innerHTML = `Está na casa ${_p}`;
        document.getElementById("inicio2").innerHTML = `CIO`;
        document.getElementById("inicio2").style.backgroundColor = 'white';

        //verifica se caiu na armadilha
        if (tabuleiro[_p - 1] == -1) {
            document.getElementById('status').innerHTML += `<br> ${nickname2} caiu na armadilha`;
        }
    }
    //atualiza a rodada
    rodadas++;
}

//rolar dados envenenado
function curarVeneno() {
    //sorteia os dados
    dado1 = Math.floor(Math.random() * 6 + 1);
    dado2 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("status").innerHTML =
        `Dado 1 = ${dado1} <br> Dado 2 = ${dado2}
        <br>`;

    if (rodadas % 2 != 0) {
        //verifica se são iguais
        if (dado1 == dado2) {
            document.getElementById('status').innerHTML += `<br> Os dados são iguais! 
            <br> ${nickname1} está curado do veneno!`;

            //pega a casa que foi curada
            casa_curada1 = casa_jogador1;

            //muda o valor do elemento do vetor tabuleiro p/ jog andar na próx rodada
            tabuleiro[casa_jogador1 - 1] = 0;
        } else {
            //muda a casa antiga pra branco
            document.getElementById(casa_jogador1).innerText = String(tabuleiro[casa_jogador1 - 1]);
            document.getElementById(casa_jogador1).style.backgroundColor = 'white';

            //atualiza a casa nova
            casa_jogador1 = casa_jogador1 - 2

            //se cair na mesma casa que o outro player, volta mais 3 casas
            if (casa_jogador1 == _p) {
                document.getElementById('status').innerHTML += `<br> ${nickname1} terá que voltar 5 casas`;
                casa_jogador1 = casa_jogador1 - 3
                document.getElementById(casa_jogador1).innerText = posicao_jogador1;
                document.getElementById(casa_jogador1).style.backgroundColor = 'rgb(116, 163, 116)';
                document.getElementById('casa1').innerHTML = `Está na casa ${casa_jogador1}`;

            } else {
                document.getElementById('status').innerHTML += `<br> ${nickname1} terá que voltar 2 casas`;
                document.getElementById(casa_jogador1).innerText = posicao_jogador1;
                document.getElementById(casa_jogador1).style.backgroundColor = 'rgb(116, 163, 116)';
                document.getElementById('casa1').innerHTML = `Está na casa ${casa_jogador1}`;

            }

            //vê se caiu novamente em uma armadilha
            if (tabuleiro[casa_jogador1 - 1] == -1) {
                document.getElementById('status').innerHTML += `<br> ${nickname1} caiu na armadilha`;
            }
        }
        document.getElementById("player").innerText = `${nickname2}, faça a sua escolha`;
        rodadas++;

    } else {
        //verifica se são iguais
        if (dado1 == dado2) {
            document.getElementById('status').innerHTML += `<br> Os dados são iguais! 
            <br> ${nickname2} está curado do veneno`;

            //pega a casa que foi curada
            casa_curada2 = _p;

            //muda o valor do elemento do vetor tabuleiro p/ jog andar na próx rodada
            tabuleiro[_p - 1] = 0;
        } else {
            //muda a casa antiga pra branco
            document.getElementById(_p).innerText = String(tabuleiro[_p - 1]);
            document.getElementById(_p).style.backgroundColor = 'white';

            //atualiza a casa nova
            _p = _p - 2

            //se cair na mesma casa que o outro player, volta mais 3 casas
            if (_p == casa_jogador1) {
                document.getElementById('status').innerHTML += `<br> ${nickname2} terá que voltar 5 casas`;
                _p = casa_jogador1 - 3
                document.getElementById(_p).innerText = posicao_jogador2;
                document.getElementById(_p).style.backgroundColor = 'rgb(122, 64, 122)';
                document.getElementById('casa2').innerHTML = `Está na casa ${_p}`;

            } else {
                document.getElementById('status').innerHTML += `<br> ${nickname2} terá que voltar 2 casas`;
                document.getElementById(_p).innerText = posicao_jogador2;
                document.getElementById(_p).style.backgroundColor = 'rgb(122, 64, 122)';
                document.getElementById('casa2').innerHTML = `Está na casa ${_p}`;
            }

            //vê se caiu novamente em uma armadilha
            if (tabuleiro[_p - 1] == -1) {
                document.getElementById('status').innerHTML += `<br> ${nickname2} caiu na armadilha`;
            }
        }
        document.getElementById("player").innerText = `${nickname1}, faça a sua escolha`;
        rodadas++;
    }

}

//tomar antídoto
function tomarAntidoto() {
    if (rodadas % 2 != 0) {
        if (antidoto_jogador1 == 0) {
            document.getElementById('status').innerHTML = `${nickname1} não possui mais antídotos`;
        } else {
            antidoto_jogador1--;
            document.getElementById('status').innerHTML = `${nickname1} tomou um antídoto e <br> está curado do veneno`;
            document.getElementById('estoque1').innerHTML = `Antídotos: ${antidoto_jogador1}`;

            //pega a casa que foi tomado o antídoto
            casa_curada1 = casa_jogador1;

            //muda o valor do elemento do vetor tabuleiro p/ jog andar na próx rodada
            tabuleiro[casa_jogador1 - 1] = 0;
        }
    } else {
        if (antidoto_jogador2 == 0) {
            document.getElementById('status').innerHTML = `${nickname2} não possui mais antídotos`;
        } else {
            antidoto_jogador2--;
            document.getElementById('status').innerHTML = `${nickname2} tomou um antídoto e <br> está curado do veneno`;
            document.getElementById('estoque2').innerHTML = `Antídotos: ${antidoto_jogador2}`;

            //pega a casa que foi tomado o antídoto
            casa_curada2 = _p;

            //muda o valor do elemento do vetor tabuleiro p/ jog andar na próx rodada
            tabuleiro[_p - 1] = 0;
        }
    }
    rodadas++;
}

//desistir
function desistir() {
    if (rodadas % 2 != 0) {
        document.getElementById('status').innerHTML = `${nickname1} deistiu`;
        document.getElementById('casa1').innerHTML = `Saiu do jogo`;
        document.getElementById('status').innerHTML += `<br><br>${nickname2} venceu`;
    } else {
        document.getElementById('status').innerHTML = `${nickname2} deistiu`;
        document.getElementById('casa2').innerHTML = `Saiu do jogo`;
        document.getElementById('status').innerHTML += `<br><br>${nickname1} venceu`;
    }

    document.getElementById("player").innerText = `PARTIDA ENCERRADA`;
    document.getElementById("botRolar").disabled = true;
    document.getElementById("botRolar").style.cursor = 'default';
    document.getElementById("botTomar").disabled = true;
    document.getElementById("botTomar").style.cursor = 'default';
    document.getElementById("botDesistir").disabled = true;
    document.getElementById("botDesistir").style.cursor = 'default';
}