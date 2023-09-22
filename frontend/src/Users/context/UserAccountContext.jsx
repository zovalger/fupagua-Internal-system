const { createContext, useState, useEffect } = require("react");

const UserAccountContext = createContext();

// ****************************************************************************
// 			este es un contexto que se utilizara para darles datos al mapa
// ****************************************************************************

export const UserAccountProvider = ({ children }) => {
	// listas de datos
	const [userList, setUserList] = useState([]);
	const [userList_By_Query, setUserList_By_Query] = useState([]);

	// objeto para hacer la consulta
	const [queryObj, setQueryObj] = useState(null);

	// para saber si hemos hecho una consulta y decidir cual lista mostrar
	const [inQuery, setInQuery] = useState(false);

	// estado del componente para rellenar la consulta
	const [settings, setSettings] = useState({
		
	});

	return (
		<UserAccountContext.Provider
			value={{
				userList,
				setUserList,
				userList_By_Query,
				setUserList_By_Query,
				queryObj,
				setQueryObj,
				inQuery,
				setInQuery,
				settings,
				setSettings,
			}}
		>
			{children}
		</UserAccountContext.Provider>
	);
};

export default UserAccountContext;
