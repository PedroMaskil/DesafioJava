window.onload = function(){
	
	let frutas = [
        {descricao: 'Mamão', preco: 8.90},
        {descricao: 'Laranja', preco:3.60},
        {descricao: 'Manga', preco: 5.30},
        {descricao: 'Melão', preco:6.20},
        {descricao: 'Melancia', preco: 4.80}
    ] 
	
	const produtos = document.querySelector('#produtos')
	const cestaDoCliente = document.querySelector('#cestaDoCliente')
	const cestaCliente = [];
	let totalGeral 		 = 0;
	const total = document.querySelector('#mostraTotalCompra');
	
	( ()=> {
		for (let f of frutas){
			const lista = document.createElement('li');
			
			for(listaFruta in f){
				if(listaFruta == 'preco'){
					produtos.appendChild(lista).setAttribute('data-preco', f[listaFruta]);
					
				} else {
					produtos.appendChild(lista).textContent = `${f[listaFruta]}`;
					
				}
			}	
		}
	}
	)()
	
		function calcular (idProduto, resultado){
			
			
			const preco 		 = document.querySelectorAll(`#${idProduto} > li`)
			const valorResultado = document.querySelector(`#${resultado}`)
			let totalGeral 		 = 0;
			
			
			for( let i of preco){
				totalGeral += Number(i.dataset.preco);
				console.log(i.dataset.preco)
			}
			
			valorResultado.value = totalGeral;
		}
	calcular('cestaDoCliente','mostraTotalCompra')
	

	
}

















