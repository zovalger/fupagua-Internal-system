import UserLogItem from "./UserLogItem";
import style from "./UserLogItemList.module.scss";

const UserLogItemList = ({ data }) => {
	return (
		<div className={style.container}>
			{/* <div className={style.content}> */}
				{data.map((i) => (
					<UserLogItem key={i.id} data={i} />
				))}
			{/* </div> */}
		</div>
	);
};

export default UserLogItemList;
