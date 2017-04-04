var botao = document.querySelector("#buscar-pacientes");

botao.addEventListener("click", function(){
	
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function(){

		var erro = document.querySelector("#erroAjax");

		if (xhr.status == 200) {
			var pacientes = JSON.parse(xhr.responseText);

			pacientes.forEach(function(paciente){
				addPaciente(paciente);
			});
		} else {
			erro.classList.remove("invisivel");
		}

		
	});

	xhr.send();


});