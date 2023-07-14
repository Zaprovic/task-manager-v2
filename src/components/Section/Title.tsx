type titleprops = {
	title: string;
};

const Title = ({ title }: titleprops) => {
	return (
		<div className="title-container">
			<h3>{title}</h3>
			<div className="flex gap-3 items-center">
				<div className="added" />
				<p>Add new task</p>
			</div>
		</div>
	);
};

export default Title;
