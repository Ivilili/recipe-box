import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaFire } from 'react-icons/fa';

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
							<div className="card-body">
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
								<h6 className="d-inline p-1 yield">
									<FaUser />
									<div className="d-inline">Servings: </div>
									{this.props.recipe.yield}
								</h6>
								<h6 className="d-inline p-2 cal">
									<FaFire /> <div className="d-inline">Calories: </div> {Math.round(calories)}
								</h6>
							</div>
						</div>
					</Link>
				</div>
			</React.Fragment>
		);
	}
}
