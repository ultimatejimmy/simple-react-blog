import React, { Component } from "react";
import "./App.css";
import PostList from "./Components/PostList";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			postsLoaded: false,
			posts: [],
			users: [],
			comments: []
		};
	}
	componentDidMount() {
		const apis = ["posts", "users", "comments"];
		const apiURL = "https://jsonplaceholder.typicode.com";

		apis.forEach(value => {
			let url = apiURL + "/" + value;
			fetch(url)
				.then(res => res.json())
				.then(
					result => {
						this.setState({
							[value]: result
						});
						if (value === "comments") {
							this.setState({
								isLoaded: true
							});
						}
					},
					error => {
						this.setState({
							isLoaded: true,
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
		} else {
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
