const milliSeconds = 1000;
const seconds = 3;

const config = {
	idLength: 4,
	filters: ['all', 'active', 'completed'],
	taskList: ['task1', 'task2', 'task3'],
	tickerDelay: milliSeconds * seconds,
	max: 5,
};

export default config;
