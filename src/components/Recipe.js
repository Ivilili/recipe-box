import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Recipe extends Component {
	render() {
		const { image, label, calories } = this.props.recipe;
		const ingredients = this.props.recipe.ingredients;

		return (
			<React.Fragment>
				<div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
					<Link
						to={{
							pathname: `/recipe/${label}`,
							state: {
								recipe: label,
								ingredients: ingredients,
								image: image
							}
						}}
					>
						<div className="card cards">
							<img src={image} className="img-card-top image" style={{ height: 'auto' }} alt="recipe" />
							<div className="card-body text-capitalize">
								<h2>{label}</h2>
								<h6 className="d-inline p-1 yield">Number of Servings: {this.props.recipe.yield} </h6>
								<h6 className="d-inline p-1 cal">Calories: {Math.round(calories)} </h6>
							</div>
						</div>
					</Link>
				</div>
			</React.Fragment>
		);
	}
}
