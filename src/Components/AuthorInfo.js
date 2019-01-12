import React, { Component } from "react";

export default class AuthorInfo extends Component {
	static defaultProps = {
		author: {}
	};
	render() {
		const author = this.props.author;

		return (
			<div id="author-info">
				<h1>{author.name}</h1>
				<p>
					<b>Username: </b>
					{author.username}
				</p>
				<p>
					<b>email: </b>
					{author.email}
				</p>
				<p>
					<b>address: </b>
					<span className="indent">
						{author.address.street}
						<br />
						{author.address.suite}
						<br />
						{author.address.city}
						<br />
						{author.address.zipcode}
					</span>
				</p>
				<p>
					<b>phone: </b>
					{author.phone}
				</p>
				<p>
					<b>website: </b>
					<a href={"http://" + author.website}>{author.website}</a>
				</p>
				<p>
					<b>company: </b>
					{author.company.name}
					<br />
					{author.company.catchPhrase}
					<br />
					{author.company.bs}
					<br />
				</p>
				<hr /> <h2>Recent Posts:</h2>
			</div>
		);
	}
}
