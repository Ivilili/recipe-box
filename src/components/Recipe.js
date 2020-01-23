import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { GiHotMeal, GiMeal } from 'react-icons/gi';

export default class Recipe extends Component {
	render() {
		const { image, label, calories, healthLabels } = this.props.recipe;
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
						<div className="card h-100 cards">
							<img src={image} className="img-card-top image" style={{ height: 'auto' }} alt="recipe" />
							<div className="card-body card-img-overlay">
								<h2 title={label} className="mb-0">
									{label.length < 20 ? `${label}` : `${label.substring(0, 18)}...`}
								</h2>
								<div className="card-body">
									{healthLabels.map((e, i) => {
										return (
											<p key={i} className="d-inline p-1 health-labels">
												{e}
											</p>
										);
									})}
								</div>
								<h6 className="d-inline p-2 yield">
									Servings:
									{this.props.recipe.yield}
								</h6>
								<h6 className="d-inline p-2 cal">Calories: {Math.round(calories)} </h6>
							</div>
							<div className="gradient-overlay" />
							<div className="color-overlay" />
						</div>
					</Link>
				</div>
			</React.Fragment>
		);
	}
}
