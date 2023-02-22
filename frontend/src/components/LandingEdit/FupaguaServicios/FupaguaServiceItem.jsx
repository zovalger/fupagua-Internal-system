import styles from "./FupaguaServiceItem.module.scss";
import { useNavigate } from "react-router-dom";

export function FupaguaServiceItem({ data }) {
	const navigate = useNavigate();

	const { id, title, description, imgfile } = data;

	const toEdit = () => navigate(`/landing-edit/servicios/${id}`);

	return (
		<div className={styles.container} onClick={toEdit}>
			<div className="row">
				<div className="col-lg-4 col-sm-12">
					<div className={styles.image}>
						<img
							src={
								imgfile.img_cloudinary_url
									? imgfile.img_cloudinary_url
									: imgfile.img_local_url
									? `/${imgfile.img_local_url}`
									: `/${imgfile.img_local_url_original}`
							}
							className="d-block w-100"
							alt="imagen de servicio"
						/>
					</div>
				</div>

				<div className="col-lg-8 col-sm-12">
					<div className="p-2" >
						<div>{title}</div>
						<div className="small">{description}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
