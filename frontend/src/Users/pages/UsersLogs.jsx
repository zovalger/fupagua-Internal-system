import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";

import Nav from "../../UI/components/Nav";
import { getAllUserLogsRequest } from "../../api/usersLogs";
import UserLogItemList from "../components/UserLogItemList";

const UsersLogs = () => {
	const navigate = useNavigate();
	const [userLogs, setUserlogs] = useState([]);

	const getData = async () => {
		try {
			const { data } = await getAllUserLogsRequest();
			setUserlogs(data);
		} catch (error) {
			navigate({ to: "/" });
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Nav
				leftIcon={
					<button
						onClick={() => {
							navigate(`/`);
						}}
					>
						<BiChevronLeft />
					</button>
				}
				// leftFuctionOnClick={toggleAsideActive}
				title={"Bitácora"}
			/>

			<div className="scrollInSpacework pt-4">
				{/* <div className="container pt-3">
				</div> */}
				<UserLogItemList data={userLogs} />
			</div>
		</>
	);
};

export default UsersLogs;
