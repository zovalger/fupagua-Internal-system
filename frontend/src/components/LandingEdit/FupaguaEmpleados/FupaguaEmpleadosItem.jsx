import styles from "./FupaguaEmpleadosItem.module.scss";
import { useNavigate } from "react-router-dom";

export function FupaguaEmpleadosItem({ data }) {
	const navigate = useNavigate();

	const { id, name, ci, FPV, description, email, imgfile } = data;

	const toEdit = () => navigate(`/landing-edit/empleados/${id}`);

	return (
		<div className={styles.container} onClick={toEdit}>
			<div className="row">
				<div className="col-lg-4 col-sm-12">
					<div className={styles.image}>
						{imgfile ? (
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
						) : null}
					</div>
				</div>

				<div className="col-lg-8 col-sm-12">
					<div className="p-2">
						<div>{name}</div>
						<div>{description}</div>
						<div>{ci}</div>
						<div>{FPV}</div>
						<div>{email}</div>
					</div>
				</div>
			</div>
		</div>
	);
}