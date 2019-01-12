import React, { Component } from "react";

import PostList from "./Components/PostList";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			posts: [],
			users: [],
			comments: [],
			usersLoaded: false,
			postsLoaded: false,
			commentsLoaded: false
		};
	}
	componentDidMount() {
		const apis = ["users", "posts", "comments"];
		const apiURL = "https://jsonplaceholder.typicode.com";

		apis.forEach((value, index) => {
			let url = apiURL + "/" + value;
			fetch(url)
				.then(res => res.json())
				.then(
					result => {
						let load = value + "Loaded";
						this.setState({
							[value]: result,
							[load]: true
						});
						console.log();
						if (
							this.state.usersLoaded &&
							this.state.postsLoaded &&
							this.state.commentsLoaded
						) {
							this.setState({
								isLoaded: true
							});
						}
					},
					error => {
						this.setState({
							error
						});
					}
				);
		});
	}

	render() {
		const { error, isLoaded } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else if (isLoaded) {
			return (
				<div className="App">
					<PostList
						posts={this.state.posts}
						users={this.state.users}
						comments={this.state.comments}
					/>
				</div>
			);
		}
	}
}

export default App;
