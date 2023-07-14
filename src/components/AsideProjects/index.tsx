import ProjectOptions from "./ProjectOptions";
import ThemeToggle from "./ThemeToggle";

const AsideProjects = () => {
	return (
		<aside className="aside-projects">
			<div className="project-title flex items-center w-full justify-between">
				<h2 className="font-bold text-[2.8rem] text-[white]">Projects</h2>
				<span className="add" />
			</div>

			<ProjectOptions />

			<ThemeToggle />
		</aside>
	);
};

export default AsideProjects;
