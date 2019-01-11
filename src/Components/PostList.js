import React, { Component } from "react";
import Post from "./Post";

export default class PostList extends Component {
	render() {
		function getQueryVariable(variable) {
			var query = window.location.search.substring(1);
			var vars = query.split("&");
			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split("=");
				if (pair[0] === variable) {
					return pair[1];
				}
			}
			return false;
		}
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
