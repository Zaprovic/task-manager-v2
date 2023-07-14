import { useEffect } from "react";
import useClick from "../../hooks/useClick";
import { OptionsType } from "../../types/options";

const ProjectOptions = () => {
	const optionsList: OptionsType[] = [
		{
			id: 1,
			name: "Team",
			suboptions: ["My teams (5)", "Create new team"],
		},
		{
			id: 2,
			name: "Projects",
			suboptions: [
				"All projects (3)",
				"Design system",
				"User flow",
				"Ux research",
			],
		},
		{
			id: 3,
			name: "Tasks",
			suboptions: [
				"All tasks (11)",
				"To do (4)",
				"In progress (4)",
				"Done (3)",
			],
		},
		{
			id: 4,
			name: "Reminders",
			suboptions: ["All reminders (13)", "Settings"],
		},
		{
			id: 5,
			name: "Messengers",
			suboptions: ["All messages (190)", "Settings"],
		},
	];

	const { selected, handleClick } = useClick({ id: 0, isOpen: false });

	useEffect(() => {
		console.log(selected);
	}, [selected]);

	return (
		<ul className="project-options">
			{optionsList.map((item) => (
				<li key={item.id} className="projects-item">
					<div className="flex items-center justify-between w-full">
						<h4 onClick={() => handleClick(item.id)}>{item.name}</h4>

						<svg
							width="7"
							height="11"
							viewBox="0 0 7 11"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="arrow-right cursor-pointer"
								id="Icon"
								d="M1 1L5 5L1 9"
								stroke="#ffffff"
								strokeOpacity="0.5"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>

					{selected.id === item.id && selected.isOpen && (
						<ul className={`drop-down w-full pl-10 space-y-6 mt-4`}>
							{item.suboptions.map((suboption) => (
								<li key={suboption} className="">
									{suboption}
								</li>
							))}
						</ul>
					)}
				</li>
			))}
		</ul>
	);
};

export default ProjectOptions;
