import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';

const APP_ID = 'adaa83af';
const APP_KEY = '7d25fa4bcf6fd1cd5502176b4c2565ae';
class App extends Component {
	state = {
		recipes: [],
		query: 'mix',
		search: '',
		error: ''
	};

	async getRecipes() {
		const { query } = this.state;
		try {
			const data = await fetch(
				`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=50`
			);
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
	};

	render() {
		console.log(this.state.recipes);
		return (
			<div className="App">
				<RecipeList
					recipes={this.state.recipes}
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
