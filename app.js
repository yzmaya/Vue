Vue.component('componente', {
	template: '<ul><li v-for="tarea in tareas">{{tarea.title}}</li></ul>',
	mounted() {
		axios.get('http://jsonplaceholder.typicode.com/todos')
		.then((respuesta) => {
			this.tareas = respuesta.data;
		});
	},
	data() {

		return {
			tareas: [],
		}
		
	}
});


Vue.component('componente2', {
	template: '<ul><li v-for="tarea in tareas">{{tarea.id}}</li></ul>',
	mounted() {
		axios.get('http://jsonplaceholder.typicode.com/todos')
		.then((respuesta) => {
			this.tareas = respuesta.data;
		});
	},
	data() {

		return {
			tareas: [],
		}
		
	}
});

new Vue({
	el: 'main',
	
});
