import Ticker from './Ticker';
import actions from '../core/actions';
import TaskRetriever from './TaskRetriever';

describe('ticker', () => {
	const { start } = Ticker;

	test('when starting the ticker', () => {
		const context = { actions: actions, config: { tickerDelay: 3000 }};

		jest.spyOn(global, 'setInterval').mockImplementation(jest.fn());
		jest.spyOn(actions, 'addTask').mockImplementation(jest.fn());
		jest.spyOn(TaskRetriever, 'getRndTask')
			.mockReturnValue(expect.any(String));

		const result = start(context);

		expect(actions.addTask)
			.toHaveBeenCalledWith(expect.any(Function),
				context.config.tickerDelay);

		expect(result).toEqual();
	});
});
