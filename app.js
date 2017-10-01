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
		guardarNota: function(notes){
			this.notas.push({nombre: notes});
		}

	}
})
