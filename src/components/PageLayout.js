const PageLayout = ({ header, footer, children }) => {
	return (
		<>
			{header}
			{children}
			{footer}
		</>
	);
};
