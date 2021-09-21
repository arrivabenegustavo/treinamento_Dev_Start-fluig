function externo(){

    var pessoa = {
        Nome: 'Gustavo',
        Sobrenome: "Arrivabene",
        Departamento: "Meu BK"
    }

    // Pega elemento dentro do html através de um ID
    document.getElementById("local").innerHTML =
    pessoa.Nome +" "+ pessoa.Sobrenome + " trabalha no " + pessoa.Departamento;
}
