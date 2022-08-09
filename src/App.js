import { React } from 'react';
import './App.scss';
import AddButton from './component/todo/AddButton';
import TodoInput from './component/todo/TodoInput';
import DisplayTodo from './component/todo/DisplayTodo';

const App = (context) =>
	<div className="App" role="App">
		<TodoInput { ...context }/>
		<AddButton { ...context }/>
		<DisplayTodo { ...context }/>
	</div>;

export default App;
