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
						<div className="card">
							<img src={image} className="img-card-top" style={{ height: '14rem' }} alt="recipe" />
							<div className="card-body text-campitalize">
								<h6>{label}</h6>
								<h6 className="text-warning">Calories: {calories} </h6>
							</div>
						</div>
					</Link>
				</div>
			</React.Fragment>
		);
	}
}
