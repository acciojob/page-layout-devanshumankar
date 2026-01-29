import React from "react";
import "./../styles/App.css";
import PageLayout from "./PageLayout";

const App = ({ header, children, footer }) => {
	return (
		<div>
			<PageLayout
				header={<h1>Welcome to my Website</h1>}
				footer={<footer>© 2023 My website.All rights reserved.</footer>}
			>
				<p>This is the content of my Website</p>
			</PageLayout>
		</div>
	);
};

export default App;
