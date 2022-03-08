import axios from 'axios';

export const getQuote = async () => {
	try {
		let { data } = await axios.get('https://api.adviceslip.com/advice');
		return data.slip;
	} catch (e) {
		console.log(e);
	}
};
