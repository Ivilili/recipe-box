import React from 'react';

export default function Search({ value, handleSubmit, handleChange }) {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container App-header">
				<h1 className="App-title">Find a recipe</h1>

				<form className="mt-4" onSubmit={handleSubmit}>
					<div className="input-group justify-content-center">
						<input
							type="text"
							name="search"
							title="Search"
							placeholder="Search..."
							className="form-control-lg shadow-none form__input"
							value={value}
							onChange={handleChange}
						/>
						<div className="input-group-append">
							<button type="submit" className="form__button">
								Search
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
