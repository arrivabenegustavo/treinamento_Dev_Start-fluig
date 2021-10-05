function validateForm(form){
	var msg =""
	
	if(form.getValue("nome")== ""){
		msg += "Campo Nome não foi preenchiedo";
	}
	if(form.getValue("emai")== ""){
		msg += "Campo Email não foi preenchiedo";
	}
	if(form.getValue("documentoIdentificacao")== ""){
		msg += "Campo Documento de identificação não foi preenchiedo";
	}
	if(form.getValue("dataNascimento")== ""){
		msg += "Campo Data de nascimento não foi preenchiedo";
	}
	/**Responsaveis
	var responsaveis = form.getChildrenIndexes("responsavelTabela");
	if(responsaveis.length == 0){
		msg += "Campo Responsáveis não foi informado."
	}*/
	
	if(form.getValue("telefone")== ""){
		msg += "Campo Telefone não foi preenchiedo";
	}
	if(form.getValue("cep")== ""){
		msg += "Campo Cep não foi preenchiedo";
	}
	if(form.getValue("nome")== ""){
		msg += "Campo Nome não foi preenchiedo";
	}
	if(form.getValue("nome")== ""){
		msg += "Campo Nome não foi preenchiedo";
	}
	if(msg != ""){
		throw msg;
	}
}