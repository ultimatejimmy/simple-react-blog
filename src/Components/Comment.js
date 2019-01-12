import React, { Component } from "react";

export default class Comment extends Component {
	render() {
		return (
			<div className="comment">
				<h3>{this.props.name}</h3>
				<div>{this.props.email}</div>
				<p>{this.props.body}</p>
			</div>
		);
	}
}
