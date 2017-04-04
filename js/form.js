var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
	event.preventDefault();

	var formulario = document.querySelector("#form-adiciona");

	var paciente = obterDadosPaciente(formulario);

	var erros = validaPaciente(paciente);

	if (erros.length > 0) {
		obterMensagensErro(erros);
		return;
	}
	
	addPaciente(paciente);
	

	formulario.reset();
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

});

function addPaciente(paciente){
	var tr = montaTr(paciente);
	
	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(tr);
}

function obterMensagensErro(erros){
	
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});

}

function montaTr(paciente){
	var tr = document.createElement("tr");
	tr.classList.add("paciente");

	tr.appendChild(montaTd(paciente.nome, "info-nome"));
	tr.appendChild(montaTd(paciente.peso, "info-peso"));
	tr.appendChild(montaTd(paciente.altura, "info-altura"));
	tr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	tr.appendChild(montaTd(paciente.imc, "info-imc"));

	return tr;

}

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function obterDadosPaciente(form){
	var paciente = {
		"nome": form.nome.value,
		"peso": form.peso.value,
		"altura": form.altura.value,
		"gordura": form.gordura.value,
		"imc": calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function validaPaciente(paciente){

	var erros = [];

	if (!validaPeso(paciente.peso)) {
		erros.push("O Peso É Inválido");
	}

	if (!validaAltura(paciente.altura)) {
		erros.push("A Altura É Invalida");	
	}

	if ( paciente.peso.length == 0) {
		erros.push("O peso deve ser informado.");
	}

	if ( paciente.altura.length == 0) {
		erros.push("A altura deve ser informada.");
	}

	if ( paciente.nome.length == 0) {
		erros.push("O nome deve ser informado.");
	}

	if ( paciente.gordura.length == 0) {
		erros.push("A gordura deve ser informada.");
	}

	return erros;
}