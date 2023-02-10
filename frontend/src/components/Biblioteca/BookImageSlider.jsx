import styles from "./BookImageSlider.module.scss";

import Carousel from "react-bootstrap/Carousel";

const BookImageSlider = ({ book }) => {
	const { portada, imgExtras } = book;

	if (!portada && !imgExtras) return;

	if (!portada.img_local_url_original && !imgExtras.img_local_url_original)
		return;

	return (
		<Carousel className=" ">
			{portada ? (
				<Carousel.Item>
					<img
						src={portada.img_cloudinary_url}
						className="d-block w-100"
						alt="imagen de libro"
					/>

					{/* <Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption> */}
				</Carousel.Item>
			) : null}

			{imgExtras && imgExtras instanceof Array
				? imgExtras.map((img) => (
						<Carousel.Item key={img.id}>
							<img
								src={img.img_cloudinary_url}
								className="d-block w-100"
								alt="imagen de extra"
							/>
						</Carousel.Item>
				  ))
				: ""}
		</Carousel>
	);
};

export default BookImageSlider;
