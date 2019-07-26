import { todos } from "../todos";
import { visibilityFilter } from "./visibilityFilters";
import { combineReducers } from 'redux';

/* export const todoApp = (state, action) => {
	return {
		todos: todos(
			state.todos,
			action
		),
		visibilityFilter: visibilityFilter(
			state.visibilityFilter,
			action
		)
	}
} */

// Use Redux combineReducers

/* export const todoApp = combineReducers({
	todos: todos,
	visibilityFilter: visibilityFilter
}); */

// ES6 shorthand notation

export const rootReducer = combineReducers({
	todos,
	visibilityFilter
});

