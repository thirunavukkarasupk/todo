import { React, useEffect } from 'react';
import './App.scss';
import TodoPane from './component/TodoPane/Index';
import TaskPane from './component/TaskPane/Index';
import TaskManager from './services/TaskManager';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);

	return <div className="App" role="App">
		<TodoPane { ...context }/>
		<TaskPane { ...context }/>
	</div>;
}
;

export default App;
