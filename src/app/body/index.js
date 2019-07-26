import { selectVisibleTodos } from '../../store/reducer/selectVisibleTodos';
import { connect } from 'react-redux';
import { TodoList } from "./TodoList";

const mapStateToTodoListProps = (
	state
) => {
	return {
		todos: selectVisibleTodos(
			state.todos,
			state.visibilityFilter
		)
	};
};

const mapDispatchToTodoListProps = (
	dispatch
) => {
	return {
		onTodoClick : (id) => {
			dispatch({
				type: "TOGGLE_TODO",
				id
			})
		}
	};
};

const VisibleTodoList = connect(
	mapStateToTodoListProps,
	mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;