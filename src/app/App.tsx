import AsideNavbar from "../components/AsideNavbar";
import AsideProjects from "../components/AsideProjects";
import Card from "../components/Card";
import Header from "../components/Header";
import MainSearch from "../components/MainSearch";
import Section from "../components/Section";
import Title from "../components/Section/Title";
import "../styles/index.css";

const App = () => {
	return (
		<>
			<div className="main-container">
				<AsideNavbar />

				<AsideProjects />

				<div className="main-section">
					<Header />

					<MainSearch />

					<main>
						<Section>
							<Title title="To do (4)" />

							<Card
								title="Design new ui presentation"
								subtitle="Dribble marketing"
							/>
							<Card
								title="Add more ux/ui mockups"
								subtitle="Pinterest promotion"
							/>
							<Card
								title="Design few mobile screens"
								subtitle="Dropbox mobile app"
							/>
							<Card
								title="Create a tweet and promote"
								subtitle="Twitter marketing"
							/>
						</Section>

						<Section>
							<Title title="In progress (4)" />

							<Card
								title="Design system update"
								subtitle="Oreo website project"
							/>
							<Card
								title="Create brand guidelines"
								subtitle="Oreo branding project"
							/>
							<Card
								title="Create wireframe for ios app"
								subtitle="Oreo ios app project"
							/>
							<Card
								title="Create ui kit for layout"
								subtitle="Crypto mobile app"
							/>
						</Section>

						<Section>
							<Title title="Done (3)" />

							<Card
								title="Add product to the market"
								subtitle="Ui8 marketplace"
								color="#78d700"
								loading="100%"
							/>
							<Card
								title="Launch product promotion"
								subtitle="Kickstarter campaign"
								color="#78d700"
								loading="100%"
							/>
							<Card
								title="Make twitter banner"
								subtitle="Twitter marketing"
								color="#78d700"
								loading="100%"
							/>
							<Card
								title="Create a tweet and promote"
								subtitle="Twitter marketing"
								color="#78d700"
								loading="100%"
							/>
						</Section>
					</main>
				</div>
			</div>
		</>
	);
};

export default App;
