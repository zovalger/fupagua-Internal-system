import { Routes, Route } from "react-router-dom";
import { AppDataProvider } from "./context/AppContext";

import { HomePage, People, Agenda } from "./pages";

import AsidePanelOptions from "./components/AsidePanelOptions";
import "./App.scss";
import { PeopleNew } from "./pages/PeopleNew";

function App() {
	return (
		<AppDataProvider>
			<div className="App">
				<AsidePanelOptions />

				<div className="SectionApp">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/agenda" element={<Agenda />} />
						{/* <Route path="/People" element={<People />} />
						<Route path="/People/new" element={<PeopleNew />} /> */}
						{/* <Route path="/:id" element={<PostForm />} />
					<Route path="*" element={<NotFoundPage />} /> */}
					</Routes>
				</div>
			</div>
		</AppDataProvider>
	);
}

export default App;
