import { createStore } from 'vuex';
import { getQuote } from '../utils/basic';

const store = createStore({
	state: {
		quote: '',
		showLoadingModules: false,
	},
	mutations: {
		updateQuote(state, payload) {
			state.quote = payload;
		},
		updateLoadingModules(state, payload) {
			state.showLoadingModules = payload;
		},
	},
	actions: {
		async getQuote(context) {
			context.commit('updateLoadingModules', true);
			const data = await getQuote();
			context.commit('updateQuote', data);
			setTimeout(() => {
				context.commit('updateLoadingModules', false);
			}, 500);
		},
	},
});

export default store;
