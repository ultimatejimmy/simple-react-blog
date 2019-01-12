import React, { Component } from "react";
import { getQueryVariable } from "../utility";

export default class AuthorInfo extends Component {
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
					<div className="indent">
						{author.address.street}
						<br />
						{author.address.suite}
						<br />
						{author.address.city}
						<br />
						{author.address.zipcode}
					</div>
				</p>
				<p>
					<b>phone: </b>
					{author.phone}
				</p>
				<p>
					<b>website: </b>
					{author.website}
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
			</div>
		);
	}
}
