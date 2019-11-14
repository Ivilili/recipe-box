import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Recipe extends Component {
	render() {
		const { image_url, title, publisher, recipe_id } = this.props.recipe;

		return (
			<React.Fragment>
				<div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
					<Link
						to={{
							pathname: `/recipe/${recipe_id}`,
							state: {
								recipe: title,
								ingredients: []
							}
						}}
					>
						<div className="card">
							<img src={image_url} className="img-card-top" style={{ height: '14rem' }} alt="recipe" />
							<div className="card-body text-campitalize">
								<h6>{title}</h6>
								<h6 className="text-warning">provided by {publisher} ></h6>
							</div>
						</div>
					</Link>
				</div>
			</React.Fragment>
		);
	}
}
