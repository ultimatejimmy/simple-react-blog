import React, { Component } from "react";

export default class Post extends Component {
	render() {
		let postTitle;

		if (this.props.isSingle) {
			postTitle = <h2>{this.props.title}</h2>;
		} else {
			postTitle = (
				<a href={"?post=" + this.props.id}>
					<h2>{this.props.title}</h2>
				</a>
			);
		}
		const postComments = this.props.comments.filter(
			comment => comment.postId === this.props.id
		);
		const commentCount = postComments.length;
		return (
			<article>
				<header>
					{postTitle}
					<a href={"?author=" + this.props.authorId}>
						<div className="byline">{this.props.authorName}</div>
					</a>
					<a href={"?post=" + this.props.id + "#comments"}>
						{commentCount +
							" " +
							(commentCount === 1 ? "Comment" : "Comments")}
					</a>
				</header>
				<div className="post-content">{this.props.body}</div>
				<footer />
			</article>
		);
	}
}
