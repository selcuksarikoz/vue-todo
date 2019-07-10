import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const dummy = [
	{
		todoId: 1,
		todoName: 'Travel Pack List',
		createdAt: new Date(),
		userId: 1,
		todos: [
			{
				id: 1,
				parentId: 1,
				createdAt: new Date(),
				updateAt: new Date(),
				done: true,
				text: 'Passport and visa'
			}, {
				id: 2,
				parentId: 1,
				createdAt: new Date(),
				updateAt: new Date(),
				done: true,
				text: 'Reservation and itineraries'
			}, {
				id: 3,
				parentId: 1,
				createdAt: new Date(),
				updateAt: new Date(),
				done: false,
				text: 'Lightweight, easy-care clothing'
			}, {
				id: 4,
				parentId: 1,
				createdAt: new Date(),
				updateAt: new Date(),
				done: false,
				text: 'Hat, sunglasses'
			}, {
				id: 5,
				parentId: 1,
				createdAt: new Date(),
				updateAt: new Date(),
				done: false,
				text: 'Toiletries kit'
			}, {
				id: 6,
				parentId: 1,
				createdAt: new Date(),
				updateAt: new Date(),
				done: false,
				text: 'Travel towel'
			}, {
				id: 7,
				parentId: 1,
				createdAt: new Date(),
				updateAt: new Date(),
				done: true,
				text: 'Transportation tickets'
			}, {
				id: 8,
				parentId: 1,
				createdAt: new Date(),
				updateAt: new Date(),
				done: false,
				text: 'Medicine'
			}, {
				id: 9,
				parentId: 1,
				createdAt: new Date(),
				updateAt: new Date(),
				done: false,
				text: 'Camera, memory card & charger'
			}
		]
	}
];

export default new Vuex.Store({
	state: {
		Todos: dummy
	},
	getters: {
		getTodos: state => state.Todos[0] || [],
		getActiveTodo: state => state.Todos[0],
	},
	mutations: {

	},
	actions: {

	},
});
