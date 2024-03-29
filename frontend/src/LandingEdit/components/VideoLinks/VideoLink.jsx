import styles from "./VideoLink.module.scss";
import { useNavigate } from "react-router-dom";
import formateToEmbeLinkYotube from "../../../utility/formateToEmbeLinkYotube";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";

export function VideoLink({ data }) {
	const navigate = useNavigate();

	const { user } = useContext(UserContext);

	const { id, title, description, url, categoryvideo } = data;

	const toEdit = () => {
		if (user && user.permissions.includes("landingEdit")) {
			navigate(`/landing-edit/videos/${id}`);
		}
	};

	return (
		<div className={styles.container}>
			<div className="row">
				<div className="col-lg-4 col-sm-12">
					<div className={styles.video}>
						<iframe
							src={
								url
									? formateToEmbeLinkYotube(url)
									: "https://www.youtube.com/embed/dWFBlfZSkak"
							}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
					</div>
				</div>

				<div className="col-lg-8 col-sm-12">
					<div className="p-2" onClick={toEdit}>
						<div>{title}</div>
						<div className="small">Link: {url}</div>
						<div className="small">Categoria: {categoryvideo.title}</div>

						{description ? (
							<div className="small">Descripcion: {description}</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
