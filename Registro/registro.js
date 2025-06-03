var cadastrar = []
function cadastro(params) {
    cadastrar[cadastrar.length] = {
        Nome: document.getElementById("nome").value,                                            
        Matricula: document.getElementById("matricula").value, 
        Curso: document.getElementById("curso").value
    }
    cadastrar.push(cadastrar)
    console.log(cadastrar)                               
}
function listar(params) {
    
    let lista = ""

    for (let i = 0; i < cadastrar.length; i++) {
        
    if (cadastrar[i].curso == "Ciência da Computação") {

        lista += `nome ${cadastrar[i].nome} Matrícula${cadastrar[i].matricula}<br>`

    } else if (cadastrar[i].curso == "Engnharia da Computação") {

        lista += `nome ${cadastrar[i].nome} Matrícula${cadastrar[i].matricula}<br>`

    } else if (cadastrar[i].curso == "Engenharia Civil") {

        lista += `nome ${cadastrar[i].nome} Matrícula${cadastrar[i].matricula}<br>`

    } else if (cadastrar[i].curso == "Medicina") {

        lista += `nome ${cadastrar[i].nome} Matrícula${cadastrar[i].matricula}<br>`

    } else if (cadastrar[i].curso == "Publicidade e Propaganda") {

        lista += `nome ${cadastrar[i].nome} Matrícula${cadastrar[i].matricula}<br>`

    } 
    document.write(lista)
}
}