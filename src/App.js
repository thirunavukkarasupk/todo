import { React } from 'react';
import './App.scss';
import TodoPane from './component/todo/Index';

const App = (context) =>
	<div className="App" role="App">
		<TodoPane { ...context }/>
	</div>;

export default App;
