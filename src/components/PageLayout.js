import React from "react";

const PageLayout = ({ header, footer, children }) => {
	return (
		<>
			{header}
			{children}
			{footer}
		</>
	);
};

export default PageLayout;
