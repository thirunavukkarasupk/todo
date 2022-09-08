import Ticker from './Ticker';
import actions from '../core/actions';
import TaskRetriever from './TaskRetriever';

describe('ticker', () => {
	const { start } = Ticker;

	test('when starting the ticker', () => {
		const context = { actions: actions, config: { tickerDelay: 3000 }};
		const rndTask = Symbol('rndTask');

		jest.spyOn(global, 'setInterval').mockImplementation((fn) => fn());
		jest.spyOn(actions, 'addTask').mockReturnValue(rndTask);
		jest.spyOn(TaskRetriever, 'getRndTask')
			.mockReturnValue(rndTask);

		start(context);

		expect(global.setInterval)
			.toHaveBeenCalledWith(expect.any(Function),
				context.config.tickerDelay);
		expect(actions.addTask).toHaveBeenCalledWith(rndTask);
	});
});
