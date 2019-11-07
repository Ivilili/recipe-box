import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
	state = {
		recipes: recipes,
		url: 'https://www.food2fork.com/api/search?key=786eea97a948bac7e60e03cdc2de87f0&q=shredded%20chicken',
		details_id: 35384
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
		//console.log(this.state.recipes);
		return (
			<div className="App">
				<RecipeList recipes={this.state.recipes} />
				<RecipeDetails id={this.state.details_id} />
			</div>
		);
	}
}

export default App;
