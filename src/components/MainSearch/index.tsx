import BoardAdd from "./BoardAdd";
import FilterSort from "./FilterSort";

const MainSearch = () => {
	return (
		<div className="menu-container flex justify-between items-center mt-10">
			<BoardAdd />

			<FilterSort />
		</div>
	);
};

export default MainSearch;
