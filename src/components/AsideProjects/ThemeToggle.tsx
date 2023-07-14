const ThemeToggle = () => {
	return (
		<div className="light-dark-container">
			<div className="light-dark-btns">
				<button type="button" className="light-btn">
					<span className="light" />
					<h5>Light</h5>
				</button>
				<button type="button" className="dark-btn">
					<span className="dark" />
					<h5>Dark</h5>
				</button>
			</div>
		</div>
	);
};

export default ThemeToggle;
