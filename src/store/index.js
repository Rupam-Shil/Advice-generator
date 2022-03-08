import { createStore } from 'vuex';
import { getQuote } from '../utils/basic';

const store = createStore({
	state: {
		quote: '',
	},
	mutations: {
		updateQuote(state, payload) {
			state.quote = payload;
		},
	},
	actions: {
		async getQuote(context) {
			const data = await getQuote();
			context.commit('updateQuote', data);
		},
	},
});

export default store;
