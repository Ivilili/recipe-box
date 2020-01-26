import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import Pagination from './components/Pagination';

class App extends Component {
	state = {
		recipes: [],
		query: 'mix',
		search: '',
		currentPage: 1,
		recipesPerPage: 9,
		error: ''
	};

	async getRecipes() {
		const { query } = this.state;
		try {
			const data = await fetch(
				`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env
					.REACT_APP_APP_KEY}&from=0&to=50`
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
	//change page
	paginate = (pageNumber) => {
		this.setState({
			currentPage: pageNumber
		});
	};

	render() {
		const { currentPage, recipesPerPage, recipes } = this.state;
		//Get current recipes
		const indexOfLastRecipe = currentPage * recipesPerPage;
		const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
		const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

		return (
			<div className="App">
				<RecipeList
					recipes={currentRecipes}
					value={this.state.search}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					error={this.state.error}
				/>
				<Pagination recipesPerPage={recipesPerPage} totalRecipes={recipes.length} paginate={this.paginate} />
			</div>
		);
	}
}

export default App;
