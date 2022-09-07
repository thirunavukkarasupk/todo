import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import ToggleAll from './ToggleAllCheckBox';
import ClearButton from './ClearButton';
import FilterBar from './FilterBar';
import ActionButton from './ActionButton';

const TodoPane = (context) =>
	<div className="todoPane" role="todoPane">
		<h4>TODO PANE</h4>
		<div><ToggleAll { ...context }/></div>
		<div><TodoInput { ...context }/></div>
		<div><ActionButton { ...context }/></div>
		<div><TodoList { ...context }/></div>
		<div><ClearButton { ...context }/></div>
		<div><FilterBar { ...context }/></div>
	</div>;

export default TodoPane;
