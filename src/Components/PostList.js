import React, { Component } from "react";
import Post from "./Post";
import { getQueryVariable } from "../utility";
import AuthorInfo from "./AuthorInfo";

export default class PostList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSingle: getQueryVariable("post"),
			isAuthor: getQueryVariable("author")
		};
	}
	render() {
		let postArr = this.props.posts;

		let posts, authorInfo;

		if (this.state.isSingle)
			postArr = postArr.filter(
				// eslint-disable-next-line
				post => post.id == this.state.isSingle
			);

		if (this.state.isAuthor) {
			postArr = postArr.filter(
				// eslint-disable-next-line
				post => post.userId == this.state.isAuthor
			);
		}
		if (postArr.length === 0 && this.state.isSingle)
			posts = <div id="404">Page not found</div>;
		else {
			posts = postArr.map((thePost, index) => {
				let author = this.props.users.find(
					person => person.id === thePost.userId
				);
				author = { ...author };

				if (this.state.isAuthor)
					authorInfo = (
						<div>
							<AuthorInfo author={author} />
							<hr /> <h2>Recent Posts:</h2>
						</div>
					);
				return (
					<div>
						<Post
							key={thePost.id}
							id={thePost.id}
							title={thePost.title}
							body={thePost.body}
							authorId={thePost.userId}
							authorName={author.name}
							comments={this.props.comments}
						/>
					</div>
				);
			});
		}

		return (
			<div id="content">
				{authorInfo}
				{posts}
			</div>
		);
	}
}
