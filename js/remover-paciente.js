var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

//dblclick informa que queremos o evento de duplo clique (double click)
//click informa que queremos o evento de clique simples 
tabela.addEventListener("dblclick", function(event){
	//event pega o evento, 
	//.target informa onde foi o evento (target == alvo), 
	//.parentNode pega o pai porque se não apagariamos somente a coluna clicada
	//.remove() remove o html 
	//.classList pega a lista de classes da tag e o .add insere uma nova classe à tag
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){
		event.target.parentNode.remove();
	},500); // setTimeout diz para o javascript esperar pelo tempo informado em millisegundos no segundo parametro para executar o que está dentro dele


});