import React, { Component } from 'react';

export default class Search extends Component {
	render() {
		const { value, handleSubmit, handleChange } = this.props;
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-5 text-center App-header">
						<h1 className="text-capitalize App-title">
							{' '}
							Search for recipe with <strong className="text-danger">Food2Fork</strong>
						</h1>
						<form className="mt-4" onSubmit={handleSubmit}>
							<label htmlFor="search" className="text-capitalize">
								Type recipes seperated by comma
							</label>
							<div className="input-group">
								<input
									type="text"
									name="search"
									title="Search"
									placeholder="Search..."
									className="form-control form__input"
									value={value}
									onChange={handleChange}
								/>
								<div className="input-group-append">
									<button type="submit" className=" form__button">
										Search
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
