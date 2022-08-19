import TaskRetriever from './TaskRetriever';

const Ticker = {
	start: (context) => {
		const { actions, config: { tickerDelay }} = context;

		return setInterval(() =>
			actions.addTask(TaskRetriever.getRndTask()), tickerDelay);
	},

};

export default Ticker;
