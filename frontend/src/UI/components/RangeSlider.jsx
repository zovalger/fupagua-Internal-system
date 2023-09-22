import React, { useEffect, useRef, useState } from "react";
import noUiSlider from "nouislider";
import "../../../node_modules/nouislider/dist/nouislider.min.css";
import wNumb from "wnumb";
function RangeSlider({ min, max, start, step, onChange }) {
	const sliderRef = useRef(null);
	const sliderInstanceRef = useRef(null);
	const [values, setValues] = useState([start[0], start[1]]);

	useEffect(() => {
		if (sliderRef.current && !sliderInstanceRef.current) {
			const slider = noUiSlider.create(sliderRef.current, {
				start: [start[0], start[1]],
				connect: true,
				// behaviour: "smooth-steps",
				behaviour: 'tap',
				range: {
					min,
					max,
				},
				format: wNumb({
					decimals: 0,
				}),
				step,
			});

			slider.on("change", (values) => {
				setValues(values);
				onChange(values);
			});

			sliderInstanceRef.current = slider;
		}

		return () => {
			if (sliderInstanceRef.current) {
				sliderInstanceRef.current.destroy();
				sliderInstanceRef.current = null;
			}
		};
	}, []);

	return (
		<>
			<div ref={sliderRef}></div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div style={{ color: "#555" }}> {values[0]} </div>
				<div style={{ color: "#555" }}>{values[1]} </div>
			</div>
		</>
	);
}

export default RangeSlider;
