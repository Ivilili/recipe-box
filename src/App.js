import React, { Component } from 'react';

import './App.css';
import RecipeList from './components/RecipeList';
//import RecipeDetails from './components/RecipeDetails';
const APP_ID = 'adaa83af';
const APP_KEY = '7d25fa4bcf6fd1cd5502176b4c2565ae';

class App extends Component {
	state = {
		recipes: [],
		query: '',
		id: null,
		search: '',
		error: ''
	};

	async getRecipes() {
		const { query } = this.state;
		try {
			const data = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
			const jsonData = await data.json();
			if (jsonData.hits.length === undefined) {
				this.setState(() => {
					return {
						error: 'No results, try again'
					};
				});
			} else {
				this.setState(() => {
					return { recipes: jsonData.hits };
				});
			}
		} catch (err) {
			console.log(err);
		}
	}
	componentDidMount() {
		this.getRecipes();
	}

	handleDetails = (id) => {
		this.setState({
			details_id: id
		});
	};
	handleChange = (e) => {
		this.setState({
			search: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const { search } = this.state;
		this.setState(
			() => {
				return {
					query: search
				};
			},
			() => {
				this.getRecipes();
			}
		);

		console.log(this.state.query);
	};

	render() {
		return (
			<div className="App">
				<RecipeList
					recipes={this.state.recipes}
					handleDetails={this.handleDetails}
					value={this.state.search}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					error={this.state.error}
				/>
			</div>
		);
	}
}

export default App;
