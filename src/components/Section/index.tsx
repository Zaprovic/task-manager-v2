import { ReactNode } from "react";

type sectionprops = {
	children: ReactNode;
};

const Section = ({ children }: sectionprops) => {
	return <section className="section">{children}</section>;
};

export default Section;
