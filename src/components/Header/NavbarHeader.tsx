import { ReactNode } from "react";

type navprops = {
	children: ReactNode;
};

const NavbarHeader = ({ children }: navprops) => {
	return <nav className="flex h-[22px]">{children}</nav>;
};

export default NavbarHeader;
