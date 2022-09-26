const milliSeconds = 1000;
const seconds = 3;

const config = {
	idLength: 4,
	filters: ['all', 'active', 'completed'],
	taskList: ['Debug the code', 'Write the code', 'Clean up'],
	tickerDelay: milliSeconds * seconds,
	taskMax: 8,
};

export default config;
