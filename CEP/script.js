window.onload = function (){

	const buscar = document.querySelector("#buscar");
	const cep = document.querySelector("#cep");
	const rua = document.querySelector("#rua");
	const bairro = document.querySelector("#bairro");
	const cidade = document.querySelector("#cidade");
	const uf = document.querySelector("#uf");
	
	let selecionarCep = async function(c){
		let viaCep = `https://viacep.com.br/ws/${c}/json/`
		try{
			let retornoFetch = await fetch(viaCep)
			let dadosRetorno = await retornoFetch.json();
			rua.value = dadosRetorno.logradouro
			bairro.value = dadosRetorno.bairro
			cidade.value = dadosRetorno.localidade
			uf.value = dadosRetorno.uf
			
		} catch(erro){
			alert(error)
		}
	}
	 
	buscar.addEventListener('click', ()=>{
		selecionarCep(cep.value)
	})
	
}