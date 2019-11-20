import React from 'react';

export default function Search({ value, handleSubmit, handleChange }) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-10 mx-auto col-md-8 mt-5 text-center App-header">
					<h1 className="text-capitalize App-title">Search for recipes</h1>
					<form className="mt-4" onSubmit={handleSubmit}>
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
