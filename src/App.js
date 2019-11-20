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
		url: `https://api.edamam.com/search?q=${this.query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
		base_url: 'https://api.edamam.com/search',
		id: null,
		search: '',
		error: ''
	};

	async getRecipes() {
		try {
			const data = await fetch(this.state.url);
			const jsonData = await data.json();
			console.log(jsonData.hits);
			if (jsonData.hits.length === 0) {
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
		const { query, search } = this.state;
		this.setState(
			() => {
				return {
					query: search,
					search: ''
				};
			},
			() => {
				this.getRecipes();
			}
		);
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
