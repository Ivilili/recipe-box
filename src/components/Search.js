import React, { Component } from 'react';

export default class Search extends Component {
	render() {
		return (
			<React.Fragment>
				<input type="search" q="googlesearch" title="Search" placeholder="Search..." />
			</React.Fragment>
		);
	}
}
