import React, { useState } from "react";
import PropTypes from "prop-types";

const Light = props => {
	return (
		<div
			className={
				props.statecolor == true
					? "light ".concat(props.colorLight)
					: "light "
			}
			onClick={() => props.changeLight(props.colorLight)}></div>
	);
};

export default Light;

Light.propTypes = {
	colorLight: PropTypes.string,
	changeLight: PropTypes.func,
	statecolor: PropTypes.bool
};
