import { React } from 'react';
import './App.scss';
import TodoInput from './component/todo/TodoInput';
import TodoList from './component/todo/TodoList';
import ToggleAll from './component/todo/ToggleAllCheckBox';
import ClearButton from './component/todo/ClearButton';
import FilterBar from './component/todo/FilterBar';
import ActionButton from './component/todo/ActionButton';

const App = (context) =>
	<div className="App" role="App">
		<ToggleAll { ...context }/>
		<TodoInput { ...context }/>
		<ActionButton { ...context }/>
		<TodoList { ...context }/>
		<ClearButton { ...context }/>
		<FilterBar { ...context }/>
	</div>;

export default App;
