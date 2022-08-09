const setInput = ({ data }) => ({
	input: data,
});

const addTodo = ({ state: { input, todoList }}) => ({
	todoList: [...todoList, input],
});

const actions = {
	setInput,
	addTodo,
};

export default actions;
