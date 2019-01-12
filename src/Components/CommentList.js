import React, { Component } from "react";
import Comment from "./Comment";

export default class CommentList extends Component {
	render() {
		const comments = this.props.comments.map((theComment, index) => {
			return (
				<Comment
					key={theComment.id}
					id={theComment.id}
					name={theComment.name}
					body={theComment.body}
					email={theComment.email}
				/>
			);
		});
		return (
			<div id="comments">
				<h3>
					{this.props.commentCount +
						(this.props.commentCount === 1
							? " Comment"
							: " Comments")}
				</h3>
				{comments}
			</div>
		);
	}
}
