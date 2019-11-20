import React from 'react';
import Recipe from './Recipe';
import Search from './Search';
import Spinner from './Spinner';

export default function RecipeList({ recipes, handleDetails, value, handleSubmit, handleChange, error }) {
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
									<Recipe
										key={recipe.label}
										label={recipe.recipe.label}
										calories={recipe.recipe.calories}
										image={recipe.recipe.image}
										ingredients={recipe.recipe.ingredients}
										recipe={recipe.recipe}
										handleDetails={handleDetails}
									/>
								);
							}
						})
					)}
				</div>
			</div>
		</React.Fragment>
	);
}
