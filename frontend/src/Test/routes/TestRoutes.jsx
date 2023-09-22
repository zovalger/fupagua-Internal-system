import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "../../context/UserContext";
import TestPath from "./TestPath";
import { Test } from "../pages/test";
import { Resultado } from "../pages/resultado";
import { TestProvider } from "../context/TestContext";

const TestRoutes = () => {
	const { user } = useContext(UserContext);

	if (!user) return;

	return (
		<TestProvider>
			{user.permissions.includes("testCreation") && (
				<Routes>
					<>
						<Route path={`${TestPath}`} element={<Test />} />
						<Route path={`${TestPath}/resultado`} element={<Resultado />} />
					</>
				</Routes>
			)}
		</TestProvider>
	);
};

export default TestRoutes;
