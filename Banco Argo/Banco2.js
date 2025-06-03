var conta = []
var deposito = 0, saque = 0, saldo = 0;
function depositar(params) {
    var valor;
    valor = parseInt(document.getElementById('x').value);

    conta[conta.length] += valor
    saldo += valor
    deposito += valor

    document.getElementById('resp1').innerHTML = saldo;
    document.getElementById('resp2').innerHTML += `+${valor}<br>`;
    document.getElementById('total_depositos').innerHTML = deposito;

}
function sacar(params) {
    var valor;
    valor = parseInt(document.getElementById('x').value)

    conta[conta.length] += valor
    saldo -= valor
    saque += valor    

    document.getElementById('resp1').innerHTML = saldo;
    document.getElementById('resp2').innerHTML += `-${valor}<br>`;
    document.getElementById('total_saques').innerHTML = saque;
}