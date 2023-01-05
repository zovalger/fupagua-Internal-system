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
	const [appData, setAppData] = useState({
		representativeData: [],
	});
	// const [representativeData, setRepresentativeData] = useState([]);

	const refreshRepresentatives = async () => {
		const res = await getRepresentativeRequest();

		console.log(res);
		appData.representativeData = res.data;

		console.log(appData);
	};

	return (
		<AppDataContext.Provider
			value={{
				// cosas para pasar
				appData,
				refreshRepresentatives,
				// getRepresentativeRequest,
				// getRepresentativesRequest,
			}}
		>
			{children}
		</AppDataContext.Provider>
	);
};
