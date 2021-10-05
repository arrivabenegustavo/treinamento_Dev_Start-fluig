$('#cpCpf').on("blur", function(el){ // el -> elemento que vem o campo ('#cpCpf)
    console.log(el.target.value) //el -> parâmetro passado na função a cima. 
                                //target -> o alvo, ou seja oe campo (#cpCpf). 
                                //value -> o valor inputado no campo, nesse caso um CPF
    if(ValidaCPF(el.target.value)){ // (CPF) faz a validação, ou seja, se é um CPF válido

        // Primeiro garante que o elemento seja uma String,
        // através do regex remove os caracteres de pontuação
        const cpf = String(el.target.value).replace(/[^\d]+/g, ''); 

        //Cria um filro no Dataset, onde pegamos a coluna de CPf e buscamos o cpf que foi informado pelo usuário
        // ConstraintType é o tipo da busca / MUST -> busca exatamente o valor passado, nesse caso foi um cpf
        var c1 = DatasetFactory.createConstraint("CPF",  cpf,  cpf, ConstraintType.MUST) 
        
        //Após criação do filtro, inserimos o filtro na consulta ao dataset
        var datasetColaborador = DatasetFactory.getDataset("dsDadosFuncionarioRM", null, [c1], null);
        console.log(datasetColaborador)
        if(datasetColaborador.values.length > 0){ // isto é, Se tiver algum valor dentro da variável executa
            for(let i = 0; i < datasetColaborador.values.length; i++){
                var nomeColaborador = datasetColaborador.values[i].NOME //Caso o CPf seja encontrado, essa variável recebe o Nome do colaborador
                var funcaoColaborador = datasetColaborador.values[i].NOMFUNCAO //Caso o CPf seja encontrado, essa variável recebe a Função do colaborador
                $('#cpNomeColab').val(nomeColaborador); // Seta o valor no campo respectivo
                $('#cpFuncao').val(funcaoColaborador); // Seta o valor no campo respectivo