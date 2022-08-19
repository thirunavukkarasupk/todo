
import { React, useEffect } from 'react';
import './App.scss';
import TodoPane from './component/TodoPane/Index';
import TaskPane from './component/TaskPane/Index';
import TaskManager from './services/TaskManager';
import Ticker from './services/Ticker';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);

	return <div className="App" role="App">
		<div><TodoPane { ...context }/></div>
		<div><TaskPane { ...context }/></div>
	</div>;
}
;

export default App;
