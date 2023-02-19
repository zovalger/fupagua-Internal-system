import styles from "./VideoLink.module.scss";
import { useNavigate } from "react-router-dom";
import formateToEmbeLinkYotube from "../../utility/formateToEmbeLinkYotube";

export function VideoLink({ data }) {
	const navigate = useNavigate();

	const { id, title, description, url, categoryvideo } = data;

	const toEdit = () => navigate(`/landing-edit/videos/${id}`);

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
						></iframe>
					</div>
				</div>

				<div className="col-lg-8 col-sm-12">
					<div className="p-2" onClick={toEdit}>
						<div>{title}</div>
						<div className="small">Link: {url}</div>
						<div className="small">Categoria: {categoryvideo.title}</div>
						<div className="small">Descripcion: {description}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
