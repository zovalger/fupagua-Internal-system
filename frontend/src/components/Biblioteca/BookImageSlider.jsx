import styles from "./BookImageSlider.module.scss";

import Carousel from "react-bootstrap/Carousel";

const BookImageSlider = ({ book }) => {
	const { portada, book_extra_img } = book;

	if (!portada && !book_extra_img) return;

	if (!portada.img_local_url_original && !book_extra_img.img_local_url_original)
		return;

	return (
		<Carousel className=" ">
			{portada ? (
				<Carousel.Item>
					<img
						src={
							portada.img_cloudinary_url
								? portada.img_cloudinary_url
								: portada.img_local_url
								? portada.img_local_url
								: portada.img_local_url_original
						}
						className="d-block w-100"
						alt="imagen de libro"
					/>

					{/* <Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption> */}
				</Carousel.Item>
			) : null}

			{book_extra_img && book_extra_img instanceof Array
				? book_extra_img.map((img) => (
						<Carousel.Item key={img.id}>
							<img
								src={
									img.img_cloudinary_url
										? img.img_cloudinary_url
										: img.img_local_url
										? img.img_local_url
										: img.img_local_url_original
								}
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
