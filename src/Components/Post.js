import React, { Component } from "react";
import CommentList from "./CommentList";
import { getQueryVariable } from "../utility";

export default class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSingle: getQueryVariable("post"),
			isAuthor: getQueryVariable("author")
		};
	}
	render() {
		const theComments = this.props.comments.filter(
			comment => comment.postId === this.props.id
		);
		const commentCount = theComments.length;

		let postTitle, postComments;
		if (this.state.isSingle) {
			postTitle = <h2>{this.props.title}</h2>;
			postComments = (
				<CommentList
					comments={theComments}
					commentCount={commentCount}
				/>
			);
		} else {
			postTitle = (
				<a href={"?post=" + this.props.id}>
					<h2>{this.props.title}</h2>
				</a>
			);
		}

		return (
			<article>
				<header>
					{postTitle}

					<div className="byline">
						<a href={"?author=" + this.props.authorId}>
							By {this.props.authorName}
						</a>{" "}
						|{" "}
						<a href={"?post=" + this.props.id + "#comments"}>
							{commentCount +
								(commentCount === 1 ? " Comment" : " Comments")}
						</a>
					</div>
				</header>
				<div className="post-content">{this.props.body}</div>
				<footer>{postComments}</footer>
			</article>
		);
	}
}
