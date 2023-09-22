import styles from "./ItemListImagenTitleDescrip.module.scss";
import { useNavigate } from "react-router-dom";

export function ItemListImagenTitleDescrip({
	title,
	description,
	imgfile,
	onClick,
}) {






	return (
		<div className={styles.container} onClick={onClick}>
			<div className="row">
				{imgfile && (
					<div className="col-lg-4  col-md-4 col-sm-12">
						<div className={styles.image}>
							{imgfile && (
								<img
									src={
										// imgfile.img_cloudinary_url
										// 	? imgfile.img_cloudinary_url
										// 	: imgfile.img_local_url
										// 	? `/${imgfile.img_local_url}`
										// 	: `/${imgfile.img_local_url_original}`

										imgfile.img_local_url
											? `/${imgfile.img_local_url}`
											: `/${imgfile.img_local_url_original}`
									}
									className="d-block w-100"
									alt="imagen de servicio"
								/>
							)}
						</div>
					</div>
				)}

				<div className="col-lg-8 col-md-8 col-sm-12">
					<div className="p-2">
						<div>{title}</div>
						<div className="small">{description}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
