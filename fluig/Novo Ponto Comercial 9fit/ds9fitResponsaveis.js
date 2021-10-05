function createDataset(fields, constraints, sortFields) {
	
	var dsColabGrupoColab = DatasetBuilder.newDataset();
	
	dsColabGrupoColab.addColumn("login");
	dsColabGrupoColab.addColumn("nome");

    var filtroGrupo = DatasetFactory.createConstraint("colleagueGroupPK.groupId",
    "9fitResponsaveis", "9fitResponsaveis", ConstraintType.MUST);

    var datasetGrupo = DatasetFactory.getDataset("colleagueGroup", null, new Array(filtroGrupo), null);

    for(i = 0; i < datasetGrupo.rowsCount; i++){
    	var colabGrupo = datasetGrupo.getValue(i,"colleagueGroupPK.colleagueId");
    	// Isto é, itera sobre cada valor na coluna "colleagueGroupPK.colleagueId"
    	
    	var datasetColaborador = DatasetFactory.getDataset("colleague", null, null, null);
    	// armazena a consulta do Dataset colleague em uma variável, para poder comparar os dados com outra Dataset
    	
    	for(j = 0; j < datasetColaborador.rowsCount; j++){
    		var colab = datasetColaborador.getValue(j, "colleaguePK.colleagueId");
    		var colabNome = datasetColaborador.getValue(j, "colleagueName");//Variável apenas para salvar o valor dos nomes para adicionar na nova Dataset
    		if(colabGrupo == colab){
    			dsColabGrupoColab.addRow(new Array(colab, colabNome));//Adiciona na nova Dataset / Sempre através de uma Array
    		}
    		
    	}
    	
    	
    }
    
    return dsColabGrupoColab ;
}