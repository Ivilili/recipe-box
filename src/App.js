import React, { Component } from 'react';
import './App.css';
//import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
	state = {
		recipes: [],
		url: 'https://www.food2fork.com/api/search?key=786eea97a948bac7e60e03cdc2de87f0&q=shredded%20chicken'
	};

	async getRecipes() {
		try {
			const data = await fetch(this.state.url);
			const jsonData = await data.json();
			this.setState({
				recipes: jsonData.recipes
			});
		} catch (err) {
			console.log(err);
		}
	}
	componentDidMount() {
		this.getRecipes();
	}

	render() {
		console.log(this.state.recipes);
		return (
			<div className="App">
				<RecipeList />
				<RecipeDetails />
			</div>
		);
	}
}

export default App;
