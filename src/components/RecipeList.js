import React from 'react';
import Recipe from './Recipe';
import Search from './Search';

export default function RecipeList({ recipes, handleDetails, value, handleSubmit, handleChange, error }) {
	return (
		<React.Fragment>
			<Search value={value} handleChange={handleChange} handleSubmit={handleSubmit} />

			<div className="container my-5 header">
				<div className="row">
					{error ? (
						<h1 className="text-danger text-center">{error}</h1>
					) : (
						recipes.map((recipe, index) => {
							return (
								<Recipe
									key={index}
									label={recipe.recipe.label}
									yield={recipe.recipe.yield}
									calories={recipe.recipe.calories}
									image={recipe.recipe.image}
									ingredients={recipe.recipe.ingredients}
									recipe={recipe.recipe}
									handleDetails={handleDetails}
								/>
							);
						})
					)}
				</div>
			</div>
		</React.Fragment>
	);
}
