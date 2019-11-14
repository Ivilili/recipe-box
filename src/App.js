import React, { Component } from 'react';

import './App.css';
import RecipeList from './components/RecipeList';
//import RecipeDetails from './components/RecipeDetails';

class App extends Component {
	state = {
		recipes: [],
		url: 'https://www.food2fork.com/api/search?key=786eea97a948bac7e60e03cdc2de87f0',
		base_url: 'https://www.food2fork.com/api/search?key=786eea97a948bac7e60e03cdc2de87f0',
		id: null,
		search: '',
		query: '&q=',
		error: ''
	};

	async getRecipes() {
		try {
			const data = await fetch(this.state.url);
			const jsonData = await data.json();

			if (jsonData.recipes.length === 0) {
				this.setState(() => {
					return {
						error: 'No results, try again'
					};
				});
			} else {
				this.setState(() => {
					return { recipes: jsonData.recipes };
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
		const { base_url, query, search } = this.state;
		this.setState(
			() => {
				return {
					url: `${base_url}${query}${search}`,
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
