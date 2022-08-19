const Ticker = {
	start: (context) => {
		const { actions, config: { tickerDelay }} = context;

		return setInterval(() => actions.addTask('newTask'), tickerDelay);
	},

};

export default Ticker;
