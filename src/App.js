import { React } from 'react';
import './App.scss';
import AddButton from './component/todo/AddButton';
import TodoInput from './component/todo/TodoInput';
import TodoList from './component/todo/TodoList';

const App = (context) =>
	<div className="App" role="App">
		<TodoInput { ...context }/>
		<AddButton { ...context }/>
		<TodoList { ...context }/>
	</div>;

export default App;
