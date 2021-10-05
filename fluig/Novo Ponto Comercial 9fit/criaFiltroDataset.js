function createDataset(fields, constraint, sortFields){


    // faz uma busca especifica como um filtro. e é precisop ser cria como ARRAY
    var filtroGrupo = new Array(DatasetFactory.createConstraint("coluna desejada", "valor da coluna(inicial)","valor da coluna(final)",
     "ConstraintType.tipo da busca 'MUST', MUST_NOT, SHOULD", ));

    // Faz uma consulta ao Dataset
    var datasetGrupo = DatasetFactory.getDataset("nome da Dataset", "coluna desejada( filtroGrupo)",// variável criada a cima
        "filtro", "ordenação de colunas") 
    // Caso não seja necessário informar todos os parâmetros, basta colocar NULL no lugar 

    for(i = 0; i < datasetGrupo.rowsCount; i++){ // rownCount -> conta quantos registros 

    } 

}