import styles from "./styles/Biblioteca.module.scss";

import { Link } from "react-router-dom";
import Nav from "../components/common/Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

import { useAppData } from "../context/AppContext";
import Book from "../components/Biblioteca/Book";

export function Biblioteca() {
	const { toggleAsideActive } = useAppData();
	return (
		<>
			<Nav
				leftIcon={<RxHamburgerMenu />}
				leftFuctionOnClick={toggleAsideActive}
				title={"Biblioteca"}
				rightButtons={
					<Link to={"/biblioteca/nuevo_libro"}>
						<button>
							<AiOutlinePlus />
						</button>
					</Link>
				}
			/>

			<form className={styles.searchForm}>
				<div className={styles.searchInput}>
					<input type="search" />
					<button type="button">
						<AiOutlineSearch />
					</button>
				</div>
			</form>

			<div className={styles.container}>
				<div className={styles.books}>
					<Link to={"/biblioteca/2"}>
						<Book
							title={"aladino"}
							description={
								"un cuento para ninos de fantacia en donde djlaskdjalskdjlasdksa"
							}
						/>
					</Link>
					<Link to={"/biblioteca/2"}>
						<Book
							title={"aladino"}
							description={
								"un cuento para ninos de fantacia en donde djlaskdjalskdjlasdksa"
							}
						/>
					</Link>
					<Link to={"/biblioteca/2"}>
						<Book
							title={"aladino"}
							description={
								"un cuento para ninos de fantacia en donde djlaskdjalskdjlasdksa"
							}
						/>
					</Link>
				</div>
			</div>
		</>
	);
}
