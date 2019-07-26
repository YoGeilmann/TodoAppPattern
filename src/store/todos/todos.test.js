import deepFreeze from 'deep-freeze';
import { todos } from './index';

it("adds todos", () => {
	const stateBefore = [];
	const action = {
		type: "ADD_TODO",
		id: 0,
		text: "Learn"
	};
	const stateAfter = [
		{
			id: 0,
			text: "Learn",
			completed: false
		}
	];
	
	deepFreeze(stateBefore);
	deepFreeze(action);
	
	expect(
		todos(stateBefore, action)
	).toEqual(stateAfter);
});

it("toggles todos", () => {
	const stateBefore = [
		{
			id: 0,
			text: "Learn",
			completed: false
		},
		{
			id: 1,
			text: "Shop",
			completed: false
		}
	];
	const action = {
		type: "TOGGLE_TODO",
		id: 1
	};
	const stateAfter = [
			{
			id: 0,
			text: "Learn",
			completed: false
		},
		{
			id: 1,
			text: "Shop",
			completed: true
		}
	];
	
	deepFreeze(stateBefore);
	deepFreeze(action);
	
	expect(
		todos(stateBefore, action)
	).toEqual(stateAfter);

});
