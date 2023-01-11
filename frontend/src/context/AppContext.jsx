import { createContext, useContext, useEffect, useState } from "react";
import {
	getRepresentativeRequest,
	getRepresentativesRequest,
} from "../api/representatives";

const AppDataContext = createContext();

export const useAppData = () => {
	const context = useContext(AppDataContext);
	if (!context) throw new Error("Post Provider is missing");
	return context;
};

export const AppDataProvider = ({ children }) => {
	const [appDataState, setAppData] = useState({
		representativeData: [],
	});

	// panel lateral de opciones
	const [asidePanelActive, setAsidePanelActive] = useState(true);
	const toggleAsideActive = (e) => {
		
		setAsidePanelActive(!asidePanelActive);
	};

	// const [representativeData, setRepresentativeData] = useState([]);

	const refreshRepresentatives = async () => {
		// const res = await getRepresentativeRequest();
		// console.log(res);
		// appDataState.representativeData = res.data;
		// console.log(appDataState);
	};

	return (
		<AppDataContext.Provider
			value={{
				// panel lateral de opciones
				asidePanelActive,
				toggleAsideActive,

				appDataState,

				refreshRepresentatives,
				// getRepresentativeRequest,
				// getRepresentativesRequest,
			}}
		>
			{children}
		</AppDataContext.Provider>
	);
};
