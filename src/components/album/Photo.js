import React from "react";
import PropTypes from "prop-types";

const Photo = ({ image }) => {
	return (
		<div className="photo-wrapper">
			<div className="photo">
				<img src={image} alt="Albert Einstein" className="big" />
			</div>
		</div>
	);
};

Photo.propTypes = {
	image: PropTypes.string.isRequired,
};

export default Photo;
