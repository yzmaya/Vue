new Vue({
	el: '#app',
	data: {
		mensaje: '',
		notas: [
			{nombre: 'nestor'},
			{nombre: 'Gaby'},
			{nombre: 'Cedric'},			
		]
	}, methods: {
		guardarNota(){
			this.notas.unshift({mensaje});
		}

	}
})
