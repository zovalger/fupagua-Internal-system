import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import toast from "react-hot-toast";

import { useAppData } from "../../context/AppContext";

import Nav from "../../components/common/Nav";
import { VideoLinkForm } from "../../components/LandingEdit/VideoLinkForm";

export function LandingEditMain() {
	const { toggleAsideActive } = useAppData();

	return (
		<>
			<Nav
				leftIcon={<RxHamburgerMenu />}
				leftFuctionOnClick={toggleAsideActive}
				title={<div>Editor de Pagina</div>}
				rightButtons={
					<>
						{/* <button onClick={refreshData}>
							<AiOutlineReload />
						</button> */}

						{/* <Link to={"/"}>
							<button>
								<AiOutlinePlus />
							</button>
						</Link> */}
					</>
				}
			/>

			{/*********************************************************************
			
												formulario para buscar libros 
				
			*********************************************************************/}

			<div className="scrollInSpacework">
				<div className="container">
					<VideoLinkForm />
				</div>
			</div>
		</>
	);
}
