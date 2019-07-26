import React from 'react';
import AddTodo from './header';
import VisibleTodoList from './body';
import Footer from './footer';

// presentational App-compononent
const App = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default App;
