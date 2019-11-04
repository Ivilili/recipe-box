import React from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
	return (
		<div className="App">
			<RecipeList />
			<RecipeDetails />
		</div>
	);
}

export default App;
