import NavbarItem from "../NavbarItem";
import NavbarHeader from "./NavbarHeader";

const Header = () => {
	return (
		<header>
			<h2 className="text-[2rem] text-white font-bold">
				Welcome back, Vincent 👋
			</h2>

			<NavbarHeader>
				<ul className="flex h-full gap-9 justify-end">
					<li>
						<NavbarItem iconName="search" />
					</li>
					<li>
						<NavbarItem iconName="notifications" />
					</li>

					<li className="flex gap-3">
						<NavbarItem iconName="calendar" />
						<span className="date">19 May 2023</span>
					</li>
					<li>
						<NavbarItem iconName="profile" />
					</li>
				</ul>
			</NavbarHeader>
		</header>
	);
};

export default Header;
