import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default class RecipeDetails extends Component {
	render() {
		const { image, recipe, ingredients } = this.props.location.state;

		return (
			<React.Fragment>
				<div className="card m-4 active-recipe">
					<div className="row no-gutters">
						<div className="col-md-4">
							<img src={image} className="card-img-top active-recipe__img" alt={recipe} />
							<h6 className="card-title active-recipe__title">{recipe}</h6>
							<button type="button" className="card-link mt-2 active-recipe__button">
								<Link to="/">
									<FaHome />
								</Link>
							</button>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<ul className="list-group list-group-flush">
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
					</div>
				</div>
			</React.Fragment>
		);
	}
}
