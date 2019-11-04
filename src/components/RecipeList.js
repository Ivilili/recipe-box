import React, { Component } from 'react';
import Recipe from './Recipe';
import Search from './Search';

export default class RecipeList extends Component {
	render() {
		return (
			<React.Fragment>
				<h1>Recipe List</h1>
				<Search />
				<Recipe />
			</React.Fragment>
		);
	}
}
