import { React } from 'react';
import './App.scss';
import AddButton from './component/todo/AddButton';
import TodoInput from './component/todo/TodoInput';
import TodoList from './component/todo/TodoList';
import ToggleAll from './component/todo/ToggleAllCheckBox';
import ClearButton from './component/todo/ClearButton';
import FilterBar from './component/todo/FilterBar';
import EditButton from './component/todo/EditButton.js';

const App = (context) =>
	<div className="App" role="App">
		<ToggleAll { ...context }/>
		<TodoInput { ...context }/>
		<EditButton { ...context }/>
		<AddButton { ...context }/>
		<TodoList { ...context }/>
		<ClearButton { ...context }/>
		<FilterBar { ...context }/>
	</div>;

export default App;
