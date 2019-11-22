import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RecipeDetails extends Component {
	render() {
		const { image, recipe, ingredients } = this.props.location.state;
		console.log(this.props);

		return (
			<React.Fragment>
				<div className="card active-recipe">
					<img src={image} className="card-img-top active-recipe__img" alt={recipe} />

					{/* details */}
					<div className="card-body">
						<h6 className="card title active-recipe__title">{recipe}</h6>

						<button type="button" className="card-link active-recipe__button">
							<Link to="/">Go Home</Link>
						</button>
						<ul className="list-group mt-4">
							<h2 className="mt-3 mb-4">Ingredients</h2>
							{ingredients.map((item, index) => {
								return (
									<li key={index} className="list-group-item">
										{item.text}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
