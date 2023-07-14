const BoardAdd = () => {
	return (
		<div className="board-add-container">
			<div className="board-container flex items-center gap-4">
				<div className="board" />
				<h5>Board view</h5>
			</div>

			<div className="add-container flex items-center gap-4">
				<div className="added" />
				<h5>Add view</h5>
			</div>
		</div>
	);
};

export default BoardAdd;
