import { ReactNode } from "react";

type navprops = {
	children: ReactNode;
};

const Navbar = ({ children }: navprops) => {
	return <nav className="flex-1 flex flex-col justify-between">{children}</nav>;
};

export default Navbar;
