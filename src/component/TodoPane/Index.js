import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import ToggleAll from './ToggleAllCheckBox';
import ClearButton from './ClearButton';
import FilterBar from './FilterBar';
import ActionButton from './ActionButton';

const TodoPane = (context) =>
	<div className="todoPane">
		<h4>TODO PANE</h4>
		<ToggleAll { ...context }/>
		<TodoInput { ...context }/>
		<ActionButton { ...context }/>
		<TodoList { ...context }/>
		<ClearButton { ...context }/>
		<FilterBar { ...context }/>
	</div>;

export default TodoPane;
