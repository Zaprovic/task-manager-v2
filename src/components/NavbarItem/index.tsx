type navprops = {
	iconName: string;
};

const NavbarItem = ({ iconName }: navprops) => {
	return <div className={iconName} />;
};

export default NavbarItem;
