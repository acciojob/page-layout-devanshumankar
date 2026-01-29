import React from "react";
import "./../styles/App.css";
import PageLayout from "./PageLayout";

const App = () => {
	return (
		<div>
			<PageLayout>
				<h1>Welcome to my Website</h1>
				<p>This is the content of my website</p>
				<footer>© 2023 My website.All rights reserved.</footer>
			</PageLayout>
		</div>
	);
};

export default App;
