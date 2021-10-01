function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	var ds = DatasetBuilder.newDataset();
	
	ds.addColumn("simbolo");
	ds.addColumn("nomeMoeda");

	ds.addRow(new Array("R$","Real"));
	ds.addRow(new Array("US$","Dolar"));
	ds.addRow(new Array("U$","Peso"));

	return ds;
	
}
function onMobileSync(user) {

}