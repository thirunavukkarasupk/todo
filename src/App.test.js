import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import context from './core/context';
import TaskManager from './services/TaskManager';
import Ticker from './services/Ticker';
import * as TaskPane from './component/TaskPane/Index';
import * as TodoPane from './component/TodoPane/Index';

test('renders the component appropriately', () => {
	jest.spyOn(React, 'useEffect').mockImplementation((fn) =>
		fn());
	jest.spyOn(TaskManager, 'init').mockReturnValue();
	jest.spyOn(Ticker, 'start').mockReturnValue();
	jest.spyOn(TodoPane, 'default').mockReturnValue(<div role="todoPane"/>);
	jest.spyOn(TaskPane, 'default').mockReturnValue(<div role="taskPane"/>);

	const { getByRole } = render(<App { ...context }/>);

	expect(getByRole('App')).toBeInTheDocument();
	expect(React.useEffect).toHaveBeenCalledWith(expect.any(Function), []);

	expect(TaskManager.init).toHaveBeenCalledWith(context);
	expect(Ticker.start).toHaveBeenCalledWith(context);
	expect(getByRole('todoPane')).toBeInTheDocument();
	expect(TodoPane.default).toHaveBeenCalledWith(context, {});
	expect(getByRole('taskPane')).toBeInTheDocument();
	expect(TaskPane.default).toHaveBeenCalledWith(context, {});
});
