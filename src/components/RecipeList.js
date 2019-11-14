import React, { Component } from 'react';
import Recipe from './Recipe';
import Search from './Search';
import Spinner from './Spinner';

export default class RecipeList extends Component {
	render() {
		const { recipes, handleDetails, value, handleSubmit, handleChange, error } = this.props;
		return (
			<React.Fragment>
				<Search value={value} handleChange={handleChange} handleSubmit={handleSubmit} />

				<div className="container my-5 header">
					<div className="row">
						<div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
							<h1 className="title"> Recipe List</h1>
						</div>
					</div>
					<div className="row">
						{error ? (
							<h1 className="text-danger text-center">{error}</h1>
						) : (
							recipes.map((recipe) => {
								if (recipes === undefined || recipes.length === 0) {
									return <Spinner />;
								} else {
									return (
										<Recipe key={recipe.recipe_id} recipe={recipe} handleDetails={handleDetails} />
									);
								}
							})
						)}
					</div>
				</div>
			</React.Fragment>
		);
	}
}
