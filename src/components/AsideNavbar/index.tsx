import NavbarItem from "../NavbarItem";
import Navbar from "./Navbar";

const AsideNavbar = () => {
	return (
		<aside className="aside-navbar flex flex-col items-center p-10 gap-16">
			<NavbarItem iconName="three-dots" />
			<NavbarItem iconName="logo" />

			<Navbar>
				<ul className="flex flex-col gap-6">
					<li className="box">
						<NavbarItem iconName="icon" />
					</li>
					<li className="box">
						<NavbarItem iconName="user" />
					</li>
					<li className="box">
						<NavbarItem iconName="calendar" />
					</li>
					<li className="box">
						<NavbarItem iconName="stats" />
					</li>
					<li className="box">
						<NavbarItem iconName="cloud" />
					</li>
					<li className="box">
						<NavbarItem iconName="maps" />
					</li>
					<li className="box">
						<NavbarItem iconName="others" />
					</li>
				</ul>
				<div className="box box-next">
					<NavbarItem iconName="next" />
				</div>
			</Navbar>
		</aside>
	);
};

export default AsideNavbar;
