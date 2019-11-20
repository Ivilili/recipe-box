import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RecipeDetails extends Component {
	state = {
		recipe: []
	};
	componentDidMount() {
		console.log(this.props);
		const id = this.props.id;
		//	const url = `https://www.food2fork.com/api/get?key=786eea97a948bac7e60e03cdc2de87f0&rId=${id}`;
		//	try {
		//		const data = await fetch(url);
		//		const jsonData = await data.json();
		//		this.setState(
		//			(state, props) => {
		//				return {
		//					recipe: jsonData.recipe
		//				};
		//			},
		//			() => {}
		//		);
		//	} catch (err) {
		//		console.log(err);
		//	}
	}
	render() {
		const { image, label, ingredients } = this.state.recipe;
		console.log(this.props);

		return (
			<React.Fragment>
				<div className="card active-recipe">
					<img src={image} className="card-img-top active-recipe__img" alt="recipe" />

					{/* details */}
					<div className="card-body">
						<h6 className="card title active-recipe__title">{label}</h6>

						<button type="button" className="card-link active-recipe__button">
							<Link to="/">Go Home</Link>
						</button>
						<ul className="list-group mt-4">
							<h2 className="mt-3 mb-4">Ingredients</h2>
							{/*{ingredients.map((item, index) => {
								return (
									<li key={index} className="list-group-item">
										{item.text}
									</li>
								);
							})}
							 */}
						</ul>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
