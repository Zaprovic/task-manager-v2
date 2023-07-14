import { useState } from "react";

const useClick = (initialState: { id: number; isOpen: boolean }) => {
	const [selected, setSelected] = useState({
		id: initialState.id,
		isOpen: initialState.isOpen,
	});

	const handleClick = (id: number) => {
		setSelected((current) => ({
			id,
			isOpen: current.id === id ? !current.isOpen : true,
		}));
	};

	return { selected, handleClick };
};

export default useClick;
