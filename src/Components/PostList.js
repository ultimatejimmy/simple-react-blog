import React, { Component } from "react";
import Post from "./Post";
import { getQueryVariable } from "../utility";

export default class PostList extends Component {
	render() {
		let isSingle = getQueryVariable("post");
		let postArr = this.props.posts;
		// eslint-disable-next-line
		let currentPost = postArr.filter(post => post.id == isSingle);

		let posts;

		if (isSingle) postArr = currentPost;

		if (currentPost.length === 0 && isSingle)
			posts = <div id="404">Page not found</div>;
		else {
			posts = postArr.map((thePost, index) => {
				let author = this.props.users.find(
					person => person.id === thePost.userId
				);
				author = { ...author };

				return (
					<Post
						key={thePost.id}
						id={thePost.id}
						title={thePost.title}
						body={thePost.body}
						authorId={thePost.userId}
						authorName={author.name}
						comments={this.props.comments}
					/>
				);
			});
		}

		return <div id="posts">{posts}</div>;
	}
}
