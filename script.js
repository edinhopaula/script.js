document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value;
    let dataNascimento = document.getElementById("dataNascimento").value;
    let cpf = document.getElementById("cpf").value;
    let rg = document.getElementById("rg").value;
    let endereco = document.getElementById("endereco").value;
    let cep = document.getElementById("cep").value;
    let altura = document.getElementById("altura").value;
    let cor = document.getElementById("cor").value;
    let escola = document.getElementById("escola").value;
    let telefone = document.getElementById("telefone").value;

    let aluno = {
        nome, dataNascimento, cpf, rg, endereco, cep, altura, cor, escola, telefone
    };

    let lista = document.getElementById("listaAlunos");
    let item = document.createElement("p");
    item.textContent = `Aluno: ${aluno.nome} - Escola: ${aluno.escola}`;
    lista.appendChild(item);

    document.getElementById("cadastroForm").reset();
});
